const { Router } = require('express');
const homeController = Router();

const { parseError } = require('../utils/parser');

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    try { 
        res.render('home', {
            title: 'Auction House',
        });
    } catch (error) {
        const errors = parseError(error);
            // console.log(errors);
            res.render('404', {
                title: '404 Not Found',
                errors,
            });
    }
});

module.exports = homeController;