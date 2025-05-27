const { Router } = require('express');
const catalogContoller = Router();

const { getAll } = require('../services/auctionService');

catalogContoller.get('/', async (req, res, next) => {
    // const auctions = [];
    const auctions = await getAll();    
    // console.log(auctions);

    res.render('browse', {
        title: 'Browse Auctions',
        auctions
    });
});

module.exports = catalogContoller;