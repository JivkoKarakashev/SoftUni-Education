const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getBidderNames } = require('../services/userService');
const { getById, placeBid, updateById, deleteById, closeAuction } = require('../services/auctionService');
const { parseError } = require('../utils/parser');

const options = [
    {
        value: 'estate',
        text: 'Real Estate',
    },
    {
        value: 'vehicles',
        text: 'Vehicles',
    },
    {
        value: 'furniture',
        text: 'Furniture',
    },
    {
        value: 'electronics',
        text: 'Electronics',
    },
    {
        value: 'other',
        text: 'Other',
    }
]

detailsController.get('/:id', async (req, res, next) => {
    // console.log(req.user);
    const auctionId = req.params['id'];
    const auction = await getById(auctionId);
    // console.log(auction);
    const bids = {};
    try {
        // console.log(auction);
        if (auction == null) {
            throw new Error('Page Not Found!')
        }
        bids['hasABidder'] = auction['bidder'] != undefined;
        if (bids['hasABidder']) {
            bids['bidderNames'] = await getBidderNames(auction['_id'], auction['bidder']);
        }
        if (req.user) {
            bids['user'] = req.user;
            bids['isOwner'] = req.user['_id'] == auction.owner['_id'];
            bids['hasBidded'] = auction['bidder'] == req.user['_id'];
            bids['canBid'] = bids['isOwner'] == false && bids['hasBidded'] == false;
        }
        // console.log(bids);
        // console.log(res.locals);
        if (req.user && bids['isOwner'] == true) {
            res.render('details-owner', {
                title: 'Auction Details - OWNER',
                auction,
                bids,
            });
        } else {
            res.render('details', {
                title: 'Auction Details',
                auction,
                bids,
            });
        }
    } catch (error) {
        const errors = parseError(error);
        res.render('404', {
            title: 'Page Not Found',
            errors
        });
    }
});

detailsController.get('/:id/bid', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const auctionId = req.params['id'];
    const auction = await getById(auctionId);
    const newPrice = req.body['bidamount'];
    // console.log(auction)
    const bids = {};
    try {
        bids['hasABidder'] = auction['bidder'] != undefined;
        if (bids['hasABidder']) {
            bids['bidderNames'] = await getBidderNames(auction['_id'], auction['bidder']);
        }
        if (req.user) {
            bids['user'] = req.user;
            bids['isOwner'] = req.user['_id'] == auction.owner['_id'];
            bids['hasBidded'] = auction['bidder'] == req.user['_id'];
            bids['canBid'] = bids['isOwner'] == false && bids['hasBidded'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(bids);
        if (bids['isOwner'] == true) {
            throw new Error('Cannot place bid for your own auction!');
        }
        if (bids['hasBidded'] == true) {
            throw new Error('You are already the highest bidder!');
        }
        if (Number(req.body['bidamount'] <= auction['price'])) {
            throw new Error('Your bid must be higher than the current price!');
        }
        await placeBid(auctionId, req.user['_id'], newPrice);
        res.redirect(`/details/${auctionId}`)
    } catch (error) {
        const errors = parseError(error);
        // console.log(bids);
        // console.log(errors);
        if (req.user && bids['isOwner'] == true) {
            res.render('details-owner', {
                title: 'Auction Details - OWNER',
                errors,
                auction,
                bids,
            });
        } else {
            res.render('details', {
                title: 'Auction Details',
                errors,
                auction,
                bids,
            });
        }
    }
});

detailsController.post('/:id/bid', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    // console.log('Here')
    const auctionId = req.params['id'];
    const auction = await getById(auctionId);
    const newPrice = req.body['bidamount'];
    // console.log(auction)
    const bids = {};
    try {
        bids['hasABidder'] = auction['bidder'] != undefined;
        if (bids['hasABidder']) {
            bids['bidderNames'] = await getBidderNames(auction['_id'], auction['bidder']);
        }
        if (req.user) {
            bids['user'] = req.user;
            bids['isOwner'] = req.user['_id'] == auction.owner['_id'];
            bids['hasBidded'] = auction['bidder'] == req.user['_id'];
            bids['canBid'] = bids['isOwner'] == false && bids['hasBidded'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(bids);
        if (bids['isOwner'] == true) {
            throw new Error('Cannot place bid for your own auction!');
        }
        if (bids['hasBidded'] == true) {
            throw new Error('You are already the highest bidder!');
        }
        if (Number(req.body['bidamount'] <= auction['price'])) {
            throw new Error('Your bid must be higher than the current price!');
        }
        await placeBid(auctionId, req.user['_id'], newPrice);
        res.redirect(`/details/${auctionId}`)
    } catch (error) {
        const errors = parseError(error);
        // console.log(bids);
        // console.log(errors);
        res.render('details', {
            title: 'Auction Details',
            errors,
            auction,
            bids
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const auctionId = req.params['id'];
    const auction = await getById(auctionId);
    // console.log(auction);
    auction['hasABidder'] = auction['bidder'] != undefined;
    const optIdx = options.findIndex((obj) => obj['value'] == auction['category']);
    auction['selected'] = {
        value: auction['category'],
        text: options[optIdx]['text']
    };
    auction['restoptions'] = options.filter((obj) => obj['value'] != auction['category']);

    if (!req.user || auction.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Auction',
        auction,
    });
});

detailsController.post('/:id/edit',
    hasUser(),
    body('title')
        .trim()
        .isLength({ min: 4 }).withMessage('Title must be at least 4 characters long!'),
    body('description')
        .trim()
        .isLength({ max: 200 }).withMessage('Description must be not more than 200 characters long!'),
    body('category')
        .trim()
        .isIn(['vehicles', 'estate', 'electronics', 'furniture', 'other']).withMessage('Invalid category!'),
    body('price')
        .trim(),
    async (req, res, next) => {
        // console.log(req.body);
        const auctionId = req.params['id'];
        const auction = await getById(auctionId);
        if (req.body['price'] == '') {
            req.body['price'] = auction['price'];
        }

        if (!req.user || auction.owner['_id'] != req.user['_id']) {
            return res.redirect('/auth/login');
        }

        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(auctionId, req.body);
            res.redirect('/details/' + result['_id']);
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            req.body['hasABidder'] = auction['bidder'] != undefined;
            const optIdx = options.findIndex((obj) => obj['value'] == req.body['category']);
            req.body['selected'] = {
                value: req.body['category'],
                text: options[optIdx]['text']
            };
            req.body['restoptions'] = options.filter((obj) => obj['value'] != req.body['category']);
            req.body['_id'] = auctionId;
            // console.log(req.body);
            res.render('edit', {
                title: 'Edit Auction',
                auction: req.body,
                errors,
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const auctionId = req.params['id'];
    const auction = await getById(auctionId);

    if (!req.user || auction.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    try {
        await deleteById(auctionId);
        res.redirect('/catalog');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        req.body['_id'] = auctionId;
        res.render('details', {
            title: 'Auction Details',
            auction: req.body,
            errors,
        });
    }
});

detailsController.get('/:id/close', async (req, res, next) => {
    // console.log(req.user);
    const auctionId = req.params['id'];
    try {
        await closeAuction(auctionId);
        res.redirect('/profile');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        res.status(404)
        .render('404', {
            title: 'Page Not Found',
            errors
        });
    }
});

module.exports = detailsController;