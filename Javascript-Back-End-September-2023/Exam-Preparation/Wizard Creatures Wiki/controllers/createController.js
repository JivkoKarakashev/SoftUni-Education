const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/creatureService');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res, next) => {
    res.render('create', {
        title: 'Create Page',
    });
});

createController.post('/',
    body('name')
        .trim()
        .isLength({ min: 2 }).withMessage('Creature name must be at least 2 characters long!'),
    body('species')
        .trim()
        .isLength({ min: 3 }).withMessage('Species must be at least 3 characters long!'),
    body('skincolor')
        .trim()
        .isLength({ min: 3 }).withMessage('Skin color must be at least 3 characters long!'),
    body('eyecolor')
        .trim()
        .isLength({ min: 3 }).withMessage('Eye color must be at least 3 characters long!'),
    body('imgUrl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    body('description')
        .trim()
        .isLength({ min: 5, max: 500 }).withMessage('Description must be between 5 and 500 characters long!'),
    async (req, res, next) => {
        // console.log(req.body);
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['name'] == '' || req.body['species'] == '' || req.body['skincolor'] == '' || req.body['eyecolor'] == '' || req.body['imgUrl'] == '' || req.body['description'] == '') {
                throw new Error('All fields are required!');
            }
            const creature = await create(req.body, req.user['_id']);
            // console.log(hotel);
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