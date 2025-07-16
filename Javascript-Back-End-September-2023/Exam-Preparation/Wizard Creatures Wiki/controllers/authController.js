const { Router } = require('express');
const authController = Router();

const { hasUser, isGuest } = require('../middlewares/guards');
const { login, register } = require('../services/userService');
const { parseError } = require('../utils/parser');
const { body, validationResult } = require('express-validator');

authController.get('/login', isGuest(), (req, res, next) => {
    res.render('login', {
        title: 'Login Page',
    });
});

authController.post('/login',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Valid email is required and should be at least 10 characters long!')
        .isLength({ min: 10 }).withMessage('Email should be at least 10 characters long!'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
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
                title: 'Login Page',
                errors,
                body: {
                    email: req.body['email'],
                }
            });
        }
    });

authController.get('/register', isGuest(), (req, res, next) => {
    res.render('register', {
        title: 'Register Page',
    });
});

authController.post('/register',
    isGuest(),
    body('firstname')
        .trim()
        .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long!'),
    body('lastname')
        .trim()
        .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long!'),
    body('email')
        .trim()
        .isEmail().withMessage('Valid email is required and should be at least 10 characters long!')
        .isLength({ min: 10 }).withMessage('Email should be at least 10 characters long!'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    body('repass')
        .trim()
        .isLength({ min: 4 }).withMessage('Re-password must be at least 4 characters long!')
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
            if (req.body.firstname == '' || req.body.lastname == '' || req.body.email == '' || req.body.password == '') {
                throw new Error('All fields are required!');
            }
            if (req.body.password != req.body.repass) {
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
                    // username: req.body['username'],
                    firstname: req.body['firstname'],
                    lastname: req.body['lastname'],
                    email: req.body['email'],
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