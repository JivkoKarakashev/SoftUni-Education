const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, buyCrypto, updateById, deleteById } = require('../services/cryptoService');
const { parseError } = require('../utils/parser');

const options = [
    {
        value: 'crypto-wallet',
        text: 'Crypto Wallet',
    },
    {
        value: 'credit-card',
        text: 'Credit Card',
    },
    {
        value: 'debit-card',
        text: 'Debit Card',
    },
    {
        value: 'paypal',
        text: 'PayPal',
    }
]

detailsController.get('/:id', async (req, res, next) => {
    // console.log(req.user);
    const offerId = req.params['id'];
    // console.log(offerId);
    const buy = {};
    try {
        const offer = await getById(offerId);
        // console.log(offer);
        if (offer == null) {
            throw new Error('Page Not Found!')
        }
        if (req.user) {
            buy['user'] = req.user;
            buy['isOwner'] = req.user['_id'] == offer.owner['_id'];
            buy['hasBought'] = offer.boughtby.some((usr) => usr['_id'] == req.user['_id']);
            buy['canBuy'] = buy['isOwner'] == false && buy['hasBought'] == false;
        }
        // console.log(buy);        
        res.render('details', {
            title: 'Details Page',
            offer,
            buy
        });
    } catch (error) {
        const errors = parseError(error);
        res.render('404', {
            title: '404 Page',
            errors
        });
    }
});
detailsController.get('/:id/buy', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const offerId = req.params['id'];
    const offer = await getById(offerId);
    // console.log(offer)
    const buy = {};
    try {
        if (req.user) {
            buy['user'] = req.user;
            buy['isOwner'] = req.user['_id'] == offer.owner['_id'];
            buy['hasBought'] = offer.boughtby.some((usr) => usr['_id'] == req.user['_id']);
            buy['canBuy'] = buy['isOwner'] == false && buy['hasBought'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(buy);
        if (buy['isOwner'] == true) {
            throw new Error('Cannot buy your own Crypto offer!');
        }
        if (buy['hasBought'] == true) {
            throw new Error('You already bought this Crypto offer!');
        }
        await buyCrypto(offerId, req.user['_id']);
        res.redirect(`/details/${offerId}`)
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        res.render('details', {
            title: 'Details Page',
            errors,
            offer,
            buy
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const offerId = req.params['id'];
    const offer = await getById(offerId);
    // console.log(offer);
    const optIdx = options.findIndex((obj) => obj['value'] == offer['paymethod']);
    offer['selected'] = {
        value: offer['paymethod'],
        text: options[optIdx]['text']
    };
    offer['restoptions'] = options.filter((obj) => obj['value'] != offer['paymethod']);
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
        .isLength({ min: 2 }).withMessage('Crypto name must be at least 2 characters long!'),
    body('imgurl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Crypto image URL should starts with http or https'),
    body('price')
        .trim()
        .custom((price = Number(value), { req }) => {
            return price > 0;
        }).withMessage('Price should be a positive number!'),
    body('description')
        .trim()
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long!'),
    body('paymethod')
        .trim()
        .isIn(['crypto-wallet', 'credit-card', 'debit-card', 'paypal']).withMessage('Invalid payment method!'),
    async (req, res, next) => {
        // console.log(req.body);
        const offerId = req.params['id'];
        const offer = await getById(offerId);

        if (!req.user || offer.owner['_id'] != req.user['_id']) {
            return res.redirect('/auth/login');
        }

        try {
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
            const optIdx = options.findIndex((obj) => obj['value'] == req.body['paymethod']);
            req.body['selected'] = {
                value: req.body['paymethod'],
                text: options[optIdx]['text']
            };
            req.body['restoptions'] = options.filter((obj) => obj['value'] != req.body['paymethod']);
            req.body['_id'] = offerId;
            // console.log(req.body);
            res.render('edit', {
                title: 'Edit Page',
                errors,
                offer: req.body
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
        req.body['_id'] = gameId;
        res.render('details', {
            title: 'Details Page',
            errors,
            offer: req.body,
        });
    }
});

module.exports = detailsController;