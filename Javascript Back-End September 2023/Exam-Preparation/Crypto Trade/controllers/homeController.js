const { Router } = require('express');
const homeController = Router();

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    try {  
        res.render('home', {
            title: 'Home Page - Crypto Web',
        });
    } catch (err) {
        res.status(404)
            .render('404', {
                title: '404 Page',
            });
    }
});

module.exports = homeController;