const { Router } = require('express');
const { getLastThree } = require('../services/animalService');
const homeController = Router();

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    // const lastThree =[];
    try { 
        const lastThree = await getLastThree();
        // console.log(lastThree); 
        res.render('home', {
            title: 'Home Page',
            lastThree,
        });
    } catch (err) {
        res.status(404)
            .render('404', {
                title: '404 Page',
            });
    }
});

module.exports = homeController;