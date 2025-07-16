const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, buyGame, updateById, deleteById } = require('../services/gameService');
const { parseError } = require('../utils/parser');

detailsController.get('/:id', async (req, res, next) => {
    // console.log(req.user);
    const gameId = req.params['id'];
    // console.log(gameId);
    const buy = {};
    try {
        const game = await getById(gameId);
        // console.log(game);
        if (game == null) {
            throw new Error('Page Not Found!')
        }
        if (req.user) {
            buy['user'] = req.user;
            buy['isOwner'] = req.user['_id'] == game.owner['_id'];
            buy['hasBought'] = game.boughtby.some((usr) => usr['_id'] == req.user['_id']);
            buy['canBuy'] = buy['isOwner'] == false && buy['hasBought'] == false;
        }
        // console.log(buy);        
        res.render('details', {
            title: 'Details Page',
            game,
            buy
        });
    } catch (error) {
        const errors = parseError(error);
        res.render('404', {
            title: '404 Page - Gaming Team',
            errors
        });
    }
});
detailsController.get('/:id/buy', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const gameId = req.params['id'];
    const game = await getById(gameId);
    // console.log(game)
    const buy = {};
    try {
        if (req.user) {
            buy['user'] = req.user;
            buy['isOwner'] = req.user['_id'] == game.owner['_id'];
            buy['hasBought'] = game.boughtby.some((usr) => usr['_id'] == req.user['_id']);
            buy['canBuy'] = buy['isOwner'] == false && buy['hasBought'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(buy);
        if (buy['isOwner'] == true) {
            throw new Error('Cannot buy your own game!');
        }
        if (buy['hasBought'] == true) {
            throw new Error('You already bought this game!');
        }
        await buyGame(gameId, req.user['_id']);
        res.redirect(`/details/${gameId}`)
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        res.render('details', {
            title: 'Details Page',
            errors,
            game,
            buy
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const gameId = req.params['id'];
    const game = await getById(gameId);
    // console.log(game.platform);

    if (!req.user || game.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Page - Gaming Team',
        game,
    });
});

detailsController.post('/:id/edit',
    hasUser(),
    body('name')
        .trim()
        .isLength({ min: 2 }).withMessage('Creature name must be at least 2 characters long!'),
    body('imgurl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    body('price')
        .trim()
        .custom((price = Number(value), { req }) => {
            return price > 0;
        }).withMessage('Price should be a positive number!'),
    body('description')
        .trim()
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long!'),
    body('genre')
        .trim()
        .isLength({ min: 2 }).withMessage('Genre must be at least 2 characters long!'),
    body('platform')
        .trim()
        .isIn(['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX']).withMessage('Invalid game Platform!'),
    async (req, res, next) => {
        // console.log(req.body);
        const gameId = req.params['id'];
        const game = await getById(gameId);

        if (!req.user || game.owner['_id'] != req.user['_id']) {
            return res.redirect('/auth/login');
        }

        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(gameId, req.body);
            res.redirect('/details/' + result['_id']);
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            req.body['_id'] = gameId;
            res.render('edit', {
                title: 'Edit Page - Gaming Team',
                game: req.body,
                errors,
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const gameId = req.params['id'];
    const game = await getById(gameId);

    if (!req.user || game.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    try {
        await deleteById(gameId);
        res.redirect('/catalog');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        req.body['_id'] = gameId;
        res.render('details', {
            title: 'Details Page',
            game: req.body,
            errors,
        });
    }
});

module.exports = detailsController;