const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/hotellService');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res, next) => {
    res.render('create', {
        title: 'BookingUni',
    });
});

createController.post('/',
    body('name')
        .trim()
        .isLength({ min: 4 }).withMessage('Hotel name must be at least 4 characters long!'),
    body('city')
        .trim()
        .isLength({ min: 3 }).withMessage('City must be at least 3 characters long!'),
    body('rooms')
        .trim()
        .isInt({ min: 1, max: 100 }).withMessage('Free rooms must be an Integer between 1 and 100!'),
    body('imgUrl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    async (req, res, next) => {
        // console.log(req.body);
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['name'] == '' || req.body['city'] == '' || req.body['rooms'] == '' || req.body['imgUrl'] == '') {
                throw new Error('All fields are required!');
            }
            const hotel = await create(req.body, req.user['_id']);
            // console.log(hotel);
            res.redirect('/');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('create', {
                title: 'BookingUni',
                errors,
                body: req.body,
            });
        }
    });

module.exports = createController;