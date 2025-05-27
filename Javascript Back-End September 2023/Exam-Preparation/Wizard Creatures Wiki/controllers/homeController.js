const { Router } = require('express');
const homeController = Router();

const { parseError } = require('../utils/parser');

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    try { 
        res.render('home', {
            title: 'Home Page',
        });
    } catch (error) {
        const errors = parseError(error);
            // console.log(errors);
            res.render('404', {
                title: '404 Page',
                errors,
            });
    }
});

module.exports = homeController;