const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/animalService');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res, next) => {
    res.render('create', {
        title: 'Create Page',
    });
});

createController.post('/',
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
        .notEmpty().withMessage('A valid image URL is required!')
        .isURL({ protocols: ['http', 'https'] }),
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
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const animal = await create(req.body, req.email['_id']);
            // console.log(animal);
            res.redirect('/details/' + animal['_id']);
        } catch (error) {
            // console.log(error);
            // next(error);
            res.render('create', {
                title: 'Create Page',
                error: parseError(error),
                body: req.body,
            });
        }
    });

module.exports = createController;