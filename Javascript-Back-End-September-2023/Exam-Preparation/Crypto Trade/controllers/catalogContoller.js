const { Router } = require('express');
const catalogContoller = Router();

const { getAll } = require('../services/cryptoService');

catalogContoller.get('/', async (req, res, next) => {
    // const offers = [];
    const offers = await getAll();    
    // console.log(offers);

    res.render('catalog', {
        title: 'Trade Catalog',
        offers
    });
});

module.exports = catalogContoller;