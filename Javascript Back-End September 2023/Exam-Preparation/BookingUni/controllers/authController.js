const { Router } = require('express');
const authController = Router();

const { hasUser, isGuest } = require('../middlewares/guards');
const { login, register } = require('../services/userService');
const { parseError } = require('../utils/parser');
const { body, validationResult } = require('express-validator');

authController.get('/login', (req, res, next) => {
    res.render('login', {
        title: 'BookingUni',
    });
});

authController.post('/login',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Valid email is required and may contain only english letters and digits!'),
    body('password')
        .trim()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!')
        .isAlphanumeric('en-US').withMessage('Password may contain only english letters and digits!'),
    async (req, res, next) => {
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['email'] == '' || req.body['password'] == '') {
                throw new Error('All fields are required!');
            }
            const token = await login(req.body);

            res.cookie('token', token, { maxAge: 14400000 });
            res.redirect('/');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('login', {
                title: 'BookingUni',
                errors,
                body: {
                    email: req.body['email'],
                }
            });
        }
    });

authController.get('/register', isGuest(), (req, res, next) => {
    res.render('register', {
        title: 'BookingUni',
    });
});

authController.post('/register',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Valid email is required!'),
    body('username')
        .trim()
        .isAlphanumeric('en-US').withMessage('Username may contain only english letters and digits!'),
    body('password')
        .trim()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!')
        .isAlphanumeric('en-US').withMessage('Password may contain only english letters and digits!'),
    body('rePassword')
        .trim()
        .isLength({ min: 5 }).withMessage('Re-password must be at least 5 characters long!')
        .isAlphanumeric('en-US').withMessage('Re-password may contain only english letters and digits!')
        .custom((value, { req }) => {
            return value == req.body['password'];
        }).withMessage('Password don\'t match!'),
    async (req, res, next) => {
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body.email == '' || req.body.username == '' || req.body.password == '') {
                throw new Error('All fields are required!');
            }
            if (req.body.password != req.body.rePassword) {
                throw new Error('Passwords don\'t match!');
            }
            const token = await register(req.body);

            res.cookie('token', token, { maxAge: 14400000 });
            res.redirect('/');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('register', {
                title: 'BookingUni',
                errors,
                body: {
                    email: req.body['email'],
                    username: req.body['username'],
                }
            });
        }
    });

authController.get('/logout', hasUser(), (req, res, next) => {
    // console.log('Succsessful Logout');
    res.clearCookie('token');
    return res.redirect('/');
});

module.exports = authController;