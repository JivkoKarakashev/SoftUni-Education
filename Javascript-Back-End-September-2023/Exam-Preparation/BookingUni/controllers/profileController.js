const { Router } = require('express');
const { getByUserBookings } = require('../services/hotellService');
const profileController = Router();

profileController.get('/', async (req, res, next) => {
    // console.log(req.user);
    const bookings = await getByUserBookings(req.user['_id']);
    res.render('profile', {
        title: 'BookingUni',
        user: req.user,
        bookings,
    });
});

module.exports = profileController;