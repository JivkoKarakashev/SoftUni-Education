const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/auctionService');
const { parseError } = require('../utils/parser');

const options = [
    {
        value: 'estate',
        text: 'Real Estate',
    },
    {
        value: 'vehicles',
        text: 'Vehicles',
    },
    {
        value: 'furniture',
        text: 'Furniture',
    },
    {
        value: 'electronics',
        text: 'Electronics',
    },
    {
        value: 'other',
        text: 'Other',
    }
]

createController.get('/', (req, res, next) => {
    req.body['selected'] = { value: 'estate', text: 'Real Estate' };
    req.body['restoptions'] = options.filter((obj) => obj['value'] != req.body['selected']['value']);
    res.render('create', {
        title: 'Publish Auction',
        body: req.body
    });
});

createController.post('/',
    body('title')
        .trim()
        .isLength({ min: 4 }).withMessage('Title must be at least 4 characters long!'),
    body('description')
        .trim()
        .isLength({ max: 200 }).withMessage('Description must be not more than 200 characters long!'),
    body('category')
        .trim()
        .isIn(['vehicles', 'estate', 'electronics', 'furniture', 'other']).withMessage('Invalid category!'),
    body('price')
        .trim()
        .custom((price = Number(value), { req }) => {
            return price > 0;
        }).withMessage('Price should be a positive number!'),
    async (req, res, next) => {
        // console.log(req.body);
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['title'] == '' || req.body['category'] == '' || req.body['price'] == '') {
                throw new Error('Title, Category and Price fields are required!');
            }
            const auction = await create(req.body, req.user['_id']);
            // console.log(auction);
            res.redirect('/catalog');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            const optIdx = options.findIndex((obj) => obj['value'] == req.body['category']);
            req.body['selected'] = {
                value: req.body['category'],
                text: options[optIdx]['text']
            };
            req.body['restoptions'] = options.filter((obj) => obj['value'] != req.body['category']);
            // console.log(req.body);
            res.render('create', {
                title: 'Publish Auction',
                errors,
                body: req.body,
            });
        }
    });

module.exports = createController;