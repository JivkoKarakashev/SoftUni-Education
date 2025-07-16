const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, buyById, updateById, deleteById } = require('../services/electronicService');
const { parseError } = require('../utils/parser');

detailsController.get('/:id', async (req, res, next) => {
    const offerId = req.params['id'];
    // console.log(adId);
    const status = {};
    try {
        const offer = await getById(offerId);
        // console.log(offer);
        if (offer == null) {
            throw new Error('Page Not Found!')
        }
        if (req.user) {
            status['user'] = req.user;
            status['isOwner'] = req.user['_id'] == offer.owner['_id'];
            status['hasBought'] = offer['buyinglist'].some((usr) => usr['_id'] == req.user['_id']);
            status['canBuy'] = status['isOwner'] == false && status['hasBought'] == false;
        }
        // console.log(status);
        res.render('details', {
            title: 'Details Page',
            offer,
            status
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

detailsController.get('/:id/buy', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const offerId = req.params['id'];
    const offer = await getById(offerId);
    // console.log(offer);
    const status = {};
    try {
        if (req.user) {
            status['user'] = req.user;
            status['isOwner'] = req.user['_id'] == offer.owner['_id'];
            status['hasBought'] = offer['buyinglist'].some((usr) => usr['_id'] == req.user['_id']);
            status['canBuy'] = status['isOwner'] == false && status['hasBought'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(status);
        if (status['isOwner'] == true) {
            throw new Error('Cannot buy your own offered item!');
        }
        if (status['hasBought'] == true) {
            throw new Error('You have already bought this item!');
        }
        await buyById(offerId, req.user['_id']);
        res.redirect(`/details/${offerId}`)

    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        res.render('details', {
            title: 'Details Page',
            errors,
            offer,
            status
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const offerId = req.params['id'];
    const offer = await getById(offerId);
    // console.log(offer);
    if (!req.user || offer.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    res.render('edit', {
        title: 'Edit Page',
        offer,
    });
});

detailsController.post('/:id/edit',
    hasUser(),
    body('name')
        .trim()
        .isLength({ min: 10 }).withMessage('Name must be at least 10 characters long!'),
    body('type')
        .trim()
        .isLength({ min: 2 }).withMessage('Type must be at least 2 characters long!'),
    body('production')
        .trim()
        .isInt({ min: 1900, max: 2023 }).withMessage('Production year must be an Integer between 1900 and 2023!'),
    body('exploitation')
        .trim()
        .isInt({ min: 0 }).withMessage('Exploitation years must be positive number!'),
    body('damages')
        .trim()
        .isLength({ min: 10 }).withMessage('Damages must be at least 10 characters long!'),
    body('imgurl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    body('price')
        .trim()
        .custom((price = Number(value), { req }) => {
            return price > 0;
        }).withMessage('Price should be positive number!'),
    body('description')
        .trim()
        .notEmpty().withMessage('Description is required!')
        .isLength({ max: 40 }).withMessage('Description must contain no more than 40 characters!'),
    async (req, res, next) => {
        // console.log(req.body);
        const offerId = req.params['id'];
        try {
            const offer = await getById(offerId);
            if (!req.user || offer.owner['_id'] != req.user['_id']) {
                return res.redirect('/auth/login');
            }
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(offerId, req.body);
            res.redirect(`/details/${result['_id']}`);
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            // console.log(req.body);
            req.body['_id'] = offerId;
            res.render('edit', {
                title: 'Edit Page',
                offer: req.body,
                errors
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const offerId = req.params['id'];
    const offer = await getById(offerId);
    if (!req.user || offer.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    try {
        await deleteById(offerId);
        res.redirect('/catalog');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        // console.log(req.body);
        res.render('details', {
            title: 'Details Page',
            offer,
            errors,
        });
    }
});

module.exports = detailsController;