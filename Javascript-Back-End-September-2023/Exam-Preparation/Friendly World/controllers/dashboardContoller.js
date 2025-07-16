const { Router } = require('express');
const dashboardContoller = Router();

const { getAll } = require('../services/animalService');

dashboardContoller.get('/', async (req, res, next) => {
    // const animals = [];
    const animals = await getAll();    
    // console.log(animals);

    res.render('dashboard', {
        title: 'Dashboard Page',
        animals
    });
});

module.exports = dashboardContoller;