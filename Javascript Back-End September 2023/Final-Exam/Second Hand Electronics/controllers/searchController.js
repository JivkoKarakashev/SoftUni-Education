const { Router } = require('express');
const searchController = Router();
const { query } = require('express-validator');

const { searchFunc } = require('../services/electronicService');
const { parseError } = require('../utils/parser');

searchController.get('/',
    query('name')
        .trim(),
    query('type')
        .trim(),
    async (req, res, next) => {
        const search = req.query || '';
        // console.log(search);
        // console.log(req.query);
        try {
            // offers = [];
            const offers = await searchFunc(search);
            // console.log(offers);
            res.render('search', {
                title: 'Search Page',
                offers,
                search
            });
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            res.render('search', {
                title: 'Search Page',
                errors
            });
        }
    });

module.exports = searchController;