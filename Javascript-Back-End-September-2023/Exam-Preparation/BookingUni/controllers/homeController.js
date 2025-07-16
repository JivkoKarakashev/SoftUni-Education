const { Router } = require('express');
const homeController = Router();

const { getAll } = require('../services/hotellService');
const { parseError } = require('../utils/parser');

homeController.get('/', async (req, res, next) => {
    // console.log(req.user);
    // const lastThree =[];
    try { 
        // const hotels = [];
        const hotels = await getAll();
        // console.log(hotels); 
        res.render('home', {
            title: 'BookingUni',
            hotels,
        });
    } catch (error) {
        const errors = parseError(error);
            // console.log(errors);
            res.render('login', {
                title: 'BookingUni',
                errors,
                body: req.body,
            });
    }
});

module.exports = homeController;