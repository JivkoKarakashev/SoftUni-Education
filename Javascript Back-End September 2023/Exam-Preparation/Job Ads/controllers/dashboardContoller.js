const { Router } = require('express');
const dashboardContoller = Router();

const { getAll } = require('../services/adService');

dashboardContoller.get('/', async (req, res, next) => {
    // const animals = [];
    const ads = await getAll();    
    // console.log(ads);

    res.render('all-ads', {
        title: 'All-Ads Page',
        ads
    });
});

module.exports = dashboardContoller;