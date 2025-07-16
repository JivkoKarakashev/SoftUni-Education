const { Router } = require('express');
const profileController = Router();

const { getClosedByUser} = require('../services/auctionService');

profileController.get('/', async (req, res, next) => {
    // console.log(req.user);
    const closed = await getClosedByUser(req.user['_id']);
    // console.log(closed);
    res.render('closed-auctions', {
        title: 'Closed Auctions',
        closed,
    });
});


module.exports = profileController;