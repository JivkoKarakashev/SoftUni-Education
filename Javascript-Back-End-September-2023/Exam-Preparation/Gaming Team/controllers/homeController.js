const { Router } = require('express');
const homeController = Router();

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    try {  
        res.render('home', {
            title: 'Home Page - Gaming Team',
        });
    } catch (err) {
        res.status(404)
            .render('404', {
                title: '404 Page - Gaming Team',
            });
    }
});

module.exports = homeController;