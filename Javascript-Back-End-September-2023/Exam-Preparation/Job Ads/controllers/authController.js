const { Router } = require('express');
const authController = Router();

const { hasUser, isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../utils/parser');

authController.get('/login', isGuest(), (req, res, next) => {
    // console.log('Here is your token');
    res.render('login', {
        title: 'Login Page',
    });
});

authController.post('/login',
    isGuest(),
    body('email')
        .trim()
        .notEmpty().withMessage('Username is required!').bail()
        .isEmail().withMessage('Valid email is required!'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required!'),
    async (req, res, next) => {
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const token = await login(req.body);

            res.cookie('token', token, { maxAge: 14400000 });
            res.redirect('/');
        } catch (error) {
            const errors = parseError(error);
            res.render('login', {
                title: 'Login Page',
                errors,
                body: {
                    email: req.body['email'],
                }
            });
        }
    });

authController.get('/register', isGuest(), (req, res, next) => {
    // console.log('Here is your token');
    res.render('register', {
        title: 'Register Page',
    });
});

authController.post('/register',
    isGuest(),
    body('email')
        .trim()
        .notEmpty().withMessage('Username is required!')
        .isEmail().withMessage('Valid email is required and may contain only english letters and digits!'),
    body('password')
        .trim()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!'),
    body('repass')
        .trim()
        .isLength({ min: 5 }).withMessage('Re-password must be at least 5 characters long!')
        .custom((value, { req }) => {
            return value == req.body['password'];
        }).withMessage('Password don\'t match!'),
    body('skills')
        .trim()
        .isLength({ max: 10 }).withMessage('Skills must contain no more than 10 characters!'),
    async (req, res, next) => {
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body['email'] == '' || req.body['password'] == '' || req.body['skills'] == '') {
                throw new Error('All fields are required!');
            }
            if (req.body['password'] != req.body['repass']) {
                throw new Error('Passwords don\'t match!');
            }
            const token = await register(req.body);
            res.cookie('token', token, { maxAge: 14400000 });
            res.redirect('/');
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('register', {
                title: 'Register Page',
                errors,
                body: {
                    email: req.body['email'],
                }
            });
        }
    });

authController.get('/logout', hasUser(), (req, res) => {
    // console.log('Succsessful Logout');
    res.clearCookie('token');
    return res.redirect('/');
});

module.exports = authController;