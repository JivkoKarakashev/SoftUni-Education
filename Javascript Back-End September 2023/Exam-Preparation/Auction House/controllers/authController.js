const { Router } = require('express');
const authController = Router();

const { hasUser, isGuest } = require('../middlewares/guards');
const { login, register } = require('../services/userService');
const { parseError } = require('../utils/parser');
const { body, validationResult } = require('express-validator');

authController.get('/login', isGuest(), (req, res, next) => {
    res.render('login', {
        title: 'Login',
    });
});

authController.post('/login',
    isGuest(),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required!'),
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
                title: 'Login',
                errors,
                body: {
                    email: req.body['email'],
                }
            });
        }
    });

authController.get('/register', isGuest(), (req, res, next) => {
    res.render('register', {
        title: 'Register',
    });
});

authController.post('/register',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Valid email is required!'),
    body('firstname')
        .trim()
        .isLength({ min: 1 }).withMessage('First name must be at least 1 characters long!'),
    body('lastname')
        .trim()
        .isLength({ min: 1 }).withMessage('Last name must be at least 1 characters long!'),
    body('password')
        .trim()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!'),
    body('repass')
        .trim()
        .isLength({ min: 5 }).withMessage('Re-password must be at least 5 characters long!')
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
            if (req.body['email'] == '' || req.body['firstname'] == '' || req.body['lastname'] == '' || req.body['password'] == '') {
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
                title: 'Register',
                errors,
                body: {
                    // username: req.body['username'],
                    email: req.body['email'],
                    firstname: req.body['firstname'],
                    lastname: req.body['lastname'],
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