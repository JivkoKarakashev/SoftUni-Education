const { Router } = require('express');
const homeController = Router();

homeController.get('/', async (req, res, next) => {
    // console.log(req.user); 
        res.render('home', {
            title: 'Book Store',
        });
});

module.exports = homeController;