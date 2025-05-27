const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, applyJob, updateById, deleteById } = require('../services/adService');
// const { getById, donate, updateById, deleteById } = require('../services/animalService');
const { parseError } = require('../utils/parser');

detailsController.get('/:id', async (req, res, next) => {
    const adId = req.params['id'];
    // console.log(adId);
    const apply = {};
    try {
        const ad = await getById(adId);
        ad['candidates'] = ad.applied.length;
        // console.log(ad);
        if (ad == null) {
            throw new Error('Page Not Found!')
        }
        if (req.user) {
            apply['user'] = req.user;
            apply['isOwner'] = req.user['_id'] == ad.owner['_id'];
            apply['hasApplied'] = ad['applied'].some((usr) => usr['_id'] == req.user['_id']);
            apply['canApply'] = apply['isOwner'] == false && apply['hasApplied'] == false;
        }
        // console.log(apply);
        res.render('details', {
            title: 'Details Page',
            ad,
            apply
        });
    } catch (error) {
        const errors = parseError(error);
        res.status(404)
            .render('404', {
                title: 'Not Found Page',
                errors
            });
    }
});

detailsController.get('/:id/apply', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const adId = req.params['id'];
    const ad = await getById(adId);
    // console.log(ad);
    const apply = {};
    try {
        if (req.user) {
            apply['user'] = req.user;
            apply['isOwner'] = req.user['_id'] == ad.owner['_id'];
            apply['hasApplied'] = ad['applied'].some((usr) => usr['_id'] == req.user['_id']);
            apply['canApply'] = apply['isOwner'] == false && apply['hasApplied'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(apply);
        if (apply['isOwner'] == true) {
            throw new Error('Cannot apply for your own Job Ad!');
        }
        if (apply['hasApplied'] == true) {
            throw new Error('You have already applied for this Job!');
        }
        await applyJob(adId, req.user['_id']);
        res.redirect(`/details/${adId}`)

    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        res.render('details', {
            title: 'Details Page',
            errors,
            ad,
            apply
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const adId = req.params['id'];
    const ad = await getById(adId);
    // console.log(ad);
    if (!req.user || ad.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    res.render('edit', {
        title: 'Edit Page',
        ad,
    });
});

detailsController.post('/:id/edit',
    hasUser(),
    body('headline')
        .trim()
        .isLength({ min: 4 }).withMessage('Headline must be at least 4 characters long!'),
    body('location')
        .trim()
        .isLength({ min: 8 }).withMessage('Location must be at least 8 characters long!'),
    body('companyname')
        .trim()
        .isLength({ min: 3 }).withMessage('Company name must be at least 3 characters long!'),
    body('description')
        .trim()
        .notEmpty().withMessage('Description is required!')
        .isLength({ max: 40 }).withMessage('Description must contain no more than 40 characters!'),
    async (req, res, next) => {
        // console.log(req.body);
        const adId = req.params['id'];
        try {
            const ad = await getById(adId);
            if (!req.user || ad.owner['_id'] != req.user['_id']) {
                return res.redirect('/auth/login');
            }
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(adId, req.body);
            res.redirect(`/details/${result['_id']}`);
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            // console.log(req.body);
            req.body['_id'] = adId;
            res.render('edit', {
                title: 'Edit Page',
                ad: req.body,
                errors
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const adId = req.params['id'];
    const ad = await getById(adId);
    if (!req.user || ad.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    try {
        await deleteById(adId);
        res.redirect('/dashboard');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        // console.log(req.body);
        // req.body['_id'] = adId;
        res.render('details', {
            title: 'Details Page',
            ad,
            errors,
        });
    }
});

module.exports = detailsController;