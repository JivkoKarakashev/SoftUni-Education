const { Router } = require('express');
const searchController = Router();
const { query } = require('express-validator');

const { search } = require('../services/animalService');
const { parseError } = require('../utils/parser');

searchController.get('/',
    query('location')
        .trim(),
    async (req, res, next) => {
        const searchQuery = req.query['location'] || '';
        // console.log(searchQuery);
        // console.log(req.query);
        try {
            const animals = await search(searchQuery || '');
            res.render('search', {
                title: 'Search Page',
                animals,
                searchQuery
            });
        } catch (err) {
            res.render('search', {
                title: 'Search Page',
                error: parseError(err)
            });
        }
    });

module.exports = searchController;