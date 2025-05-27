// const express = require('express');
// const createController = express.Router();

const { Router } = require('express');
const createController = Router();
const { body, validationResult } = require('express-validator');

const { create } = require('../services/cubicleServiceDB');
const { createAccessory } = require('../services/accessoryServiceDB');
const { parseError } = require('../utils/parser');

createController.get('/', (req, res) => {
    res.render('create', {
        title: 'Create Cube Page',
    });
});

createController.post('/',
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required!'),
    body('description')
        .trim()
        .notEmpty().withMessage('Description is required!'),
    body('imageUrl')
        .trim()
        .notEmpty().withMessage('Image URL is required!'),
    async (req, res, next) => {
        // console.log(req.body);
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const cubeObj = await create(req.body, req.user['_id']);
            res.redirect('/details/' + cubeObj['_id']);
        } catch (error) {
            // console.log(error);
            // next(error);
            res.render('create', {
                title: 'Create Cube Page',
                error: parseError(error),
                body: req.body,
            });
        }
    });

createController.get('/accessory', (req, res) => {
    res.render('createAccessory', {
        title: 'Create Accessory',
    });
});

createController.post('/accessory', async (req, res, next) => {
    // console.log(req.body);
    try {
        await createAccessory(req.body);
        res.redirect('/create/accessory');
    } catch (err) {
        // next(err);
        res.render('createAccessory', {
            title: 'Create Accessory',
            error: err.message.split('\n'),
        });
    }
});

module.exports = createController;