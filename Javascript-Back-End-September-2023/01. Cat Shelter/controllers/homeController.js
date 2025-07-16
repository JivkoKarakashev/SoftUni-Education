// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const { getData } = require('../services/catService');
const router = Router();

router.get('/', (req, res) => {
    const search = req.query['search'] || '';
    // console.log(search);
    const catsObjsArr = getData(search);
    res.render('home', {
        catSearch: true,
        catsObjsArr,
        search,
    });
});

module.exports = router;