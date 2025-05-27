const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/bookService');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res, next) => {
    res.render('create', {
        title: 'Create Page',
    });
});

createController.post('/',
    body('title')
        .trim()
        .isLength({ min: 2 }).withMessage('Book title must be at least 2 characters long!'),
    body('author')
        .trim()
        .isLength({ min: 5 }).withMessage('Book author must be at least 5 characters long!'),
    body('imgurl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    body('review')
        .trim()
        .isLength({ min: 10 }).withMessage('Book review must be at least 10 characters long!'),
    body('genre')
        .trim()
        .isLength({ min: 3 }).withMessage('Book genre must be at least 3 characters long!'),
    body('stars')
        .trim()
        .isInt({ min: 1, max: 5 }).withMessage('Stars must be an Integer between 1 and 5!'),
    async (req, res, next) => {
        // console.log(req.body);
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['title'] == '' || req.body['author'] == '' || req.body['imgurl'] == '' || req.body['review'] == '' || req.body['genre'] == '' || req.body['stars'] == '') {
                throw new Error('All fields are required!');
            }
            const book = await create(req.body, req.user['_id']);
            // console.log(book);
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