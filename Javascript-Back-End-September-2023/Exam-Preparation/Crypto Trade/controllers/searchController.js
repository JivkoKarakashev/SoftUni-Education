const { Router } = require('express');
const searchController = Router();
const { query } = require('express-validator');

const { search } = require('../services/cryptoService');
const { parseError } = require('../utils/parser');

searchController.get('/',
    query('name')
        .trim(),
    query('platform')
        .trim(),
    async (req, res, next) => {
        const searchQuery = req.query || '';
        // console.log(searchQuery);
        // console.log(req.query);
        try {
            const offers = await search(searchQuery || '');
            res.render('search', {
                title: 'Search',
                offers,
                searchQuery
            });
        } catch (err) {
            res.render('search', {
                title: 'Search',
                error: parseError(err)
            });
        }
    });

module.exports = searchController;