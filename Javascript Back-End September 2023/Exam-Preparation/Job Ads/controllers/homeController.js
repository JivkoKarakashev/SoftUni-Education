const { Router } = require('express');
const homeController = Router();

const { parseError } = require('../utils/parser');
const { getfirstThree } = require('../services/adService');

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    // const firstThree =[];
    try { 
        const firstThree = await getfirstThree();
        // console.log(firstThree); 
        res.render('home', {
            title: 'Home Page',
            firstThree,
        });
    } catch (error) {
        const errors = parseError(error);
        res.status(404)
            .render('404', {
                title: 'Not Found Page',
                errors
            });
    }
});

module.exports = homeController;