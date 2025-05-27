const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/cryptoService');
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

createController.get('/', (req, res, next) => {
    req.body['selected'] = { value: 'crypto-wallet', text: 'Crypto Wallet' };
    req.body['restoptions'] = options.filter((obj) => obj['value'] != req.body['selected']['value']);
    // console.log(req.body);
    res.render('create', {
        title: 'Create Page',
        body: req.body
    });
});

createController.post('/',
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
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['name'] == '' || req.body['imgurl'] == '' || Number(req.body['price']) <= 0 || req.body['description'] == '' || req.body['paymethod'] == '') {
                throw new Error('All fields are required!');
            }
            const offer = await create(req.body, req.user['_id']);
            // console.log(offer);
            res.redirect('/catalog');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors)
            const optIdx = options.findIndex((obj) => obj['value'] == req.body['paymethod']);
            req.body['selected'] = {
                value: req.body['paymethod'],
                text: options[optIdx]['text']
            };
            req.body['restoptions'] = options.filter((obj) => obj['value'] != req.body['paymethod']);
            // console.log(req.body);
            res.render('create', {
                title: 'Create Page',
                errors,
                body: req.body,
            });
        }
    });

module.exports = createController;