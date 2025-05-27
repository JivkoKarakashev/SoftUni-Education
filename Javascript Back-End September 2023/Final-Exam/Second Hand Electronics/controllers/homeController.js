const { Router } = require('express');
const homeController = Router();

const { parseError } = require('../utils/parser');

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    try {  
        res.render('home', {
            title: 'Second Hand Electronics',
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