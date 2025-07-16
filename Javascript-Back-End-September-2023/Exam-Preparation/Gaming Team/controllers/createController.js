const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/gameService');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res, next) => {
    res.render('create', {
        title: 'Create Page - Gaming Team',
    });
});

createController.post('/',
    body('name')
        .trim()
        .isLength({ min: 2 }).withMessage('Creature name must be at least 2 characters long!'),
    body('imgurl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    body('price')
        .trim()
        .custom((price = Number(value), { req }) => {
            return price > 0;
        }).withMessage('Price should be a positive number!'),
    body('description')
        .trim()
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long!'),
    body('genre')
        .trim()
        .isLength({ min: 2 }).withMessage('Genre must be at least 2 characters long!'),
    body('platform')
        .trim()
        .isIn(['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX']).withMessage('Invalid game Platform!'),
    async (req, res, next) => {
        // console.log(req.body);
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['name'] == '' || req.body['imgurl'] == '' || Number(req.body['price']) <= 0 || req.body['description'] == '' || req.body['genre'] == '' || req.body['platform'] == '') {
                throw new Error('All fields are required!');
            }
            const game = await create(req.body, req.user['_id']);
            // console.log(game);
            res.redirect('/catalog');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('create', {
                title: 'Create Page - Gaming Team',
                errors,
                body: req.body,
            });
        }
    });

module.exports = createController;