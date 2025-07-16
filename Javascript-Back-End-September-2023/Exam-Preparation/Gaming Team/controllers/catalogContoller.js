const { Router } = require('express');
const catalogContoller = Router();

const { getAll } = require('../services/gameService');

catalogContoller.get('/', async (req, res, next) => {
    // const games = [];
    const games = await getAll();    
    // console.log(games);

    res.render('catalog', {
        title: 'Catalog Page - Gaming Team',
        games
    });
});

module.exports = catalogContoller;