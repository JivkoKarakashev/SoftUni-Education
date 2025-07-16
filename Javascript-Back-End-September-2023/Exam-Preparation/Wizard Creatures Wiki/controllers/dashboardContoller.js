const { Router } = require('express');
const dashboardContoller = Router();

const { getAll } = require('../services/creatureService');

dashboardContoller.get('/', async (req, res, next) => {
    // const creatures = [];
    const creatures = await getAll();    
    // console.log(creatures);

    res.render('all-posts', {
        title: 'Catalog Page',
        creatures
    });
});

module.exports = dashboardContoller;