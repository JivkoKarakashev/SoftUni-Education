const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, donate, updateById, deleteById } = require('../services/animalService');
const { parseError } = require('../utils/parser');

detailsController.get('/:id', async (req, res, next) => {
    // console.log('Here');
    const animalId = req.params['id'];
    // console.log(animalId);
    const donation = {};
    try {
        const animal = await getById(animalId);
        // console.log(animal);
        if (animal == null) {
            throw new Error('Page Not Found!')
        }
        if (req.email) {
            donation['user'] = req.email;
            donation['isOwner'] = req.email['_id'] == animal.owner['_id'];
            donation['hasdonated'] = animal['donations'].some((usrId) => usrId == req.email['_id']);
            donation['candonate'] = donation['isOwner'] == false && donation['hasdonated'] == false;
        }
        // console.log(donation);
        res.render('details', {
            title: 'Details Page',
            animal,
            donation
        });
    } catch (err) {
        const error = parseError(err);
        res.status(404)
            .render('404', {
                title: 'Page Not Found',
                error
            });
    }
});

detailsController.get('/:id/donate', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const animalId = req.params['id'];
    const animal = await getById(animalId);
    // console.log(animal);
    const donation = {};
    try {
        if (req.email) {
            donation['user'] = req.email;
            donation['isOwner'] = req.email['_id'] == animal.owner['_id'];
            donation['hasdonated'] = animal['donations'].some((usrId) => usrId == req.email['_id']);
            donation['candonate'] = donation['isOwner'] == false && donation['hasdonated'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(donation);
        if (donation['isOwner'] == true) {
            throw new Error('Cannot donate for your own animal!');
        }
        if (donation['hasdonated'] == true) {
            throw new Error('You already has donated for this animal!');
        }
        await donate(animalId, req.email['_id']);
        res.redirect(`/details/${animalId}`)

    } catch (err) {
        const error = parseError(err);
        // console.log(errors);
        res.render('details', {
            title: 'Details Page',
            error,
            animal,
            donation
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const animalId = req.params['id'];
    const animal = await getById(animalId);
    // console.log(animal);
    if (!req.email || animal.owner != req.email['_id']) {
        return res.redirect('/auth/login');
    }
    // console.log('Edit Page');
    res.render('edit', {
        title: 'Edit Page',
        animal,
    });
    // next();
});

detailsController.post('/:id/edit',
    hasUser(),
    body('name')
        .trim()
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long!'),
    body('years')
        .trim()
        .isInt({ min: 1, max: 100 }).withMessage('Years must be an Integer between 1 and 100!'),
    body('kind')
        .trim()
        .isLength({ min: 3 }).withMessage('Kind must be at least 3 characters long!'),
    body('image')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('A valid image URL is required!'),
    body('need')
        .trim()
        .isLength({ min: 3, max: 20 }).withMessage('Kind must be between 3 and 20 characters long!'),
    body('location')
        .trim()
        .isLength({ min: 5, max: 15 }).withMessage('Location must be between 5 and 15 characters long!'),
    body('description')
        .trim()
        .isLength({ min: 5, max: 50 }).withMessage('Kind must be between 5 and 50 characters long!'),
    async (req, res, next) => {
        // console.log(req.body);
        const animalId = req.params['id'];
        try {
            const animal = await getById(animalId);
            if (!req.email || animal.owner != req.email['_id']) {
                return res.redirect('/auth/login');
            }
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(animalId, req.body);
            res.redirect('/details/' + result['_id']);
        } catch (err) {
            // console.log(req.body);
            req.body['_id'] = animalId;
            res.render('edit', {
                title: 'Edit Page',
                animal: req.body,
                error: parseError(err),
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const animalId = req.params['id'];
    const animal = await getById(animalId);
    if (!req.email || animal.owner != req.email['_id']) {
        return res.redirect('/auth/login');
    }
    try {
        await deleteById(animalId);
        res.redirect('/dashboard');
    } catch (err) {
        // console.log(req.body);
        // req.body['_id'] = animalId;
        res.render('details', {
            title: 'Details Page',
            animal,
            error: parseError(err),
        });
    }
});

module.exports = detailsController;