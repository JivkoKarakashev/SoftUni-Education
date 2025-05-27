const { Router } = require('express');
const profileController = Router();

const { getByUserWishinglist } = require('../services/bookService');

profileController.get('/', async (req, res, next) => {
    // console.log(req.user);
    const wishinglist = await getByUserWishinglist(req.user['_id']);
    res.render('profile', {
        title: 'Profile Page',
        user: req.user,
        wishinglist,
    });
});

module.exports = profileController;