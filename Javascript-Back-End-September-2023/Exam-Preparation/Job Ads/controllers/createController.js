const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/adService');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res, next) => {
    res.render('create', {
        title: 'Create Page',
    });
});

createController.post('/',
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
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const ad = await create(req.body, req.user['_id']);
            // console.log(ad);
            res.redirect('/dashboard');
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