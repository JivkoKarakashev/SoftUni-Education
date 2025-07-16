// const express = require('express');
// const authController = express.Router();

const { Router } = require('express');
const { hasUser, isGuest } = require('../middlewares/guards');
const { login, register } = require('../services/authService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../utils/parser');
const authController = Router();

authController.get('/login', isGuest(), (req, res) => {
    // console.log('Here is your token');
    res.render('loginPage', {
        title: 'Login Page',
    });
});

authController.post('/login',
    isGuest(),
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required!').bail()
        .isEmail().withMessage('Valid email is required!'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await login(req.body);
            const token = req.signJwt(result);
            res.cookie('jwt', token, { maxAge: 14400000 });
            // console.log('Succsessful Signed In');
            res.redirect('/');
        } catch (error) {
            res.render('loginPage', {
                title: 'Login Page',
                error: parseError(error),
                body: {
                    username: req.body['username'],
                }
            });
        }
    });

authController.get('/register', isGuest(), (req, res) => {
    // console.log('Here is your token');
    res.render('registerPage', {
        title: 'Register Page',
    });
});

authController.post('/register',
    isGuest(),
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required!').bail()
        .isEmail().withMessage('Valid email is required!'),
    body('password')
        .trim()
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!'),
    body('repeatPassword')
        .trim()
        .isLength({ min: 6 }).withMessage('Re-password must be at least 6 characters long!')
        .custom((value, { req }) => {
            return value == req.body['password'];
        }).withMessage('Password don\'t match!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await register(req.body);
            const token = req.signJwt(result);
            res.cookie('jwt', token, { maxAge: 14400000 });
            res.redirect('/');
        } catch (error) {
            // console.log(error);
            res.render('registerPage', {
                title: 'Register Page',
                error: parseError(error),
                body: {
                    username: req.body['username'],
                }
            });
        }
    });

authController.get('/logout', hasUser(), (req, res) => {
    // console.log('Succsessful Logout');
    res.clearCookie('jwt');
    return res.redirect('/');
});

module.exports = authController;