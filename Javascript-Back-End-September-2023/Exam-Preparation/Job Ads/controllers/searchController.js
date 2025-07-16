const { Router } = require('express');
const searchController = Router();
const { query } = require('express-validator');

const { search } = require('../services/adService');
const { parseError } = require('../utils/parser');

searchController.get('/',
    query('email')
        .trim(),
    async (req, res, next) => {
        const searchQuery = req.query['email'] || '';
        // console.log(searchQuery);
        // console.log(req.query);
        try {
            // ads = [];
            const ads = await search(searchQuery || '');
            // console.log(ads);
            res.render('search', {
                title: 'Search',
                ads,
                searchQuery
            });
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('search', {
                title: 'Search',
                errors
            });
        }
    });

module.exports = searchController;