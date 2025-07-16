const { Router } = require('express');
const catalogContoller = Router();

const { getAll } = require('../services/electronicService');

catalogContoller.get('/', async (req, res, next) => {
    // const offers = [];
    const offers = await getAll();    
    // console.log(offers);

    res.render('catalog', {
        title: 'Catalog Page',
        offers
    });
});

module.exports = catalogContoller;