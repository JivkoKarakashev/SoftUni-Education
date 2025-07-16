const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/electronicService');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res, next) => {
    res.render('create', {
        title: 'Create Page',
    });
});

createController.post('/',
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
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const offer = await create(req.body, req.user['_id']);
            // console.log(offer);
            res.redirect('/catalog');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('create', {
                title: 'Create Page',
                errors,
                body: req.body,
            });
        }
    });

module.exports = createController;