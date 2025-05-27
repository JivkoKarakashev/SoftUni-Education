// const express = require('express');
// const homeController = express.Router();

const { Router } = require('express');
const { getAll } = require('../services/cubicleServiceDB');
const homeController = Router();

homeController.get('/', async (req, res) => {
    const searchQueries = req.query || '';
    // console.log(searchQueries);
    // console.log(req.user);
    // const cubesObjsArr =[];
    const cubesObjsArr = await getAll(searchQueries);
    // console.log(cubesObjsArr);
    if (cubesObjsArr.length > 0) {
        res.render('index', {
            title: 'Cubicle',
            cubesObjsArr,
            searchQueries,
        });
    } else {
        res.status(404)
            .render('404', {
                title: 'Page Not Found',
            });
    }
});

module.exports = homeController;