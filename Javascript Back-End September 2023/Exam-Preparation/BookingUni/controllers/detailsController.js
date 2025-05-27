const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, bookHotel, updateById, deleteById } = require('../services/hotellService');
const { parseError } = require('../utils/parser');

detailsController.get('/:id', hasUser(), async (req, res, next) => {
    // console.log(req.user);
    const hotelId = req.params['id'];
    // console.log(hotelId);
    const hotel = await getById(hotelId);
    const book = {};
    try {
        // console.log(hotel);
        if (hotel == null) {
            throw new Error('Page Not Found!')
        }
        if (req.user) {
            book['user'] = req.user;
            book['isOwner'] = req.user['_id'] == hotel.owner['_id'];
            book['hasbooked'] = hotel['bookedusers'].some((usr) => usr['_id'] == req.user['_id']);
            book['canbook'] = book['isOwner'] == false && book['hasbooked'] == false;
        }
        // console.log(book);
        res.render('details', {
            title: 'BookingUni',
            hotel,
            book
        });
    } catch (error) {
        const errors = parseError(error);
        res.render('details', {
            title: 'BookingUni',
            hotel,
            book,
            errors
        });
    }
});
detailsController.get('/:id/book', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const hotelId = req.params['id'];
    const hotel = await getById(hotelId);
    const book = {};
    try {
        if (req.user) {
            book['user'] = req.user;
            book['isOwner'] = req.user['_id'] == hotel.owner['_id'];
            book['hasbooked'] = hotel['bookedusers'].some((usr) => usr['_id'] == req.user['_id']);
            book['canbook'] = book['isOwner'] == false && book['hasbooked'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!');
        }
        if (book['isOwner'] == true) {
            throw new Error('Cannot book your own hotel!');
        }
        if (book['hasbooked'] == true) {
            throw new Error('You already have booked a room!');
        }
        await bookHotel(hotelId, req.user['_id']);
        res.redirect(`/details/${hotelId}`)
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        res.render('details', {
            title: 'BookingUni',
            hotel,
            book,
            errors,
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const hotelId = req.params['id'];
    const hotel = await getById(hotelId);
    // console.log(hotel);

    if (!req.user || hotel.owner != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'BookingUni',
        hotel,
    });
});

detailsController.post('/:id/edit',
    hasUser(),
    body('name')
        .trim()
        .isLength({ min: 4 }).withMessage('Hotel name must be at least 4 characters long!'),
    body('city')
        .trim()
        .isLength({ min: 3 }).withMessage('City must be at least 3 characters long!'),
    body('rooms')
        .trim()
        .isInt({ min: 1, max: 100 }).withMessage('Free rooms must be an Integer between 1 and 100!'),
    body('imgUrl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    async (req, res, next) => {
        // console.log(req.body);
        const hotelId = req.params['id'];
        const hotel = await getById(hotelId);

        if (!req.user || hotel.owner != req.user['_id']) {
            return res.redirect('/auth/login');
        }

        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(hotelId, req.body);
            res.redirect('/details/' + result['_id']);
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            req.body['_id'] = hotelId;
            res.render('edit', {
                title: 'BookingUni',
                hotel: req.body,
                errors,
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const hotelId = req.params['id'];
    const hotel = await getById(hotelId);

    if (!req.user || hotel.owner != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    try {
        await deleteById(hotelId);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        req.body['_id'] = hotelId;
        res.render('details', {
            title: 'BookingUni',
            hotel: req.body,
            errors,
        });
    }
});

module.exports = detailsController;