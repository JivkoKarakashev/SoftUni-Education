const { Router } = require('express');
const searchController = Router();
const { query } = require('express-validator');

const { search } = require('../services/gameService');
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
            const games = await search(searchQuery || '');
            res.render('search', {
                title: 'Search - Gaming Team',
                games,
                searchQuery
            });
        } catch (err) {
            res.render('search', {
                title: 'Search - Gaming Team',
                error: parseError(err)
            });
        }
    });

module.exports = searchController;