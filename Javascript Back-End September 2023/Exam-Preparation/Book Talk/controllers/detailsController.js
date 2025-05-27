const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, wishBook, updateById, deleteById } = require('../services/bookService');
const { parseError } = require('../utils/parser');

detailsController.get('/:id', async (req, res, next) => {
    // console.log(req.user);
    const bookId = req.params['id'];
    // console.log(bookId);
    try {
        const book = await getById(bookId);
        // console.log(book);
        if (book == null) {
            throw new Error('Page Not Found!')
        }
        const wish = {};
        if (req.user) {
            wish['user'] = req.user;
            wish['isOwner'] = req.user['_id'] == book.owner['_id'];
            wish['hasWished'] = book['wishinglist'].some((usr) => usr['_id'] == req.user['_id']);
            wish['canWish'] = wish['isOwner'] == false && wish['hasWished'] == false;
        }
        // console.log(wish);
        res.render('details', {
            title: 'Details Page',
            book,
            wish
        });
    } catch (error) {
        const errors = parseError(error);
        res.render('404', {
            title: '404 Page',
            errors
        });
    }
});

detailsController.get('/:id/wish', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const bookId = req.params['id'];
    const book = await getById(bookId);
    const wish = {};
    try {
        if (req.user) {
            wish['user'] = req.user;
            wish['isOwner'] = req.user['_id'] == book.owner['_id'];
            wish['hasWished'] = book['wishinglist'].some((usr) => usr['_id'] == req.user['_id']);
            wish['canWish'] = wish['isOwner'] == false && wish['hasWished'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(wish);
        if (wish['isOwner'] == true) {
            throw new Error('Cannot wish your own book!');
        }
        if (wish['hasWished'] == true) {
            throw new Error('You already wished this book!');
        }
        await wishBook(bookId, req.user['_id']);
        res.redirect(`/details/${bookId}`)
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        res.render('details', {
            title: 'Details Page',
            errors,
            book,
            wish
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const bookId = req.params['id'];
    const book = await getById(bookId);
    // console.log(book);

    if (!req.user || book['owner'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Page',
        book,
    });
});

detailsController.post('/:id/edit',
    hasUser(),
    body('title')
        .trim()
        .isLength({ min: 2 }).withMessage('Book title must be at least 2 characters long!'),
    body('author')
        .trim()
        .isLength({ min: 5 }).withMessage('Book author must be at least 5 characters long!'),
    body('imgurl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    body('review')
        .trim()
        .isLength({ min: 10 }).withMessage('Book review must be at least 10 characters long!'),
    body('genre')
        .trim()
        .isLength({ min: 3 }).withMessage('Book genre must be at least 3 characters long!'),
    body('stars')
        .trim()
        .isInt({ min: 1, max: 5 }).withMessage('Stars must be an Integer between 1 and 5!'),
    async (req, res, next) => {
        // console.log(req.body);
        const bookId = req.params['id'];
        const book = await getById(bookId);

        if (!req.user || book['owner'] != req.user['_id']) {
            return res.redirect('/auth/login');
        }

        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(bookId, req.body);
            res.redirect(`/details/${result['_id']}`);
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            req.body['_id'] = bookId;
            res.render('edit', {
                title: 'Edit Page',
                book: req.body,
                errors,
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const bookId = req.params['id'];
    const book = await getById(bookId);

    if (!req.user || book['owner'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    try {
        await deleteById(bookId);
        res.redirect('/catalog');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        req.body['_id'] = bookId;
        res.render('details', {
            title: 'Details Page',
            book: req.body,
            errors,
        });
    }
});

module.exports = detailsController;