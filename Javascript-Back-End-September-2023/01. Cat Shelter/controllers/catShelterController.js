// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const router = Router();
const { getById, deleteById } = require('../services/catService');

router.get('/:catId', (req, res) => {
    const catId = req.params['catId'];
    const catObj = getById(catId);
    res.render('catShelter', {
        catSearch: false,
        catObj,
    });
});

router.post('/delete/:catId', async (req, res, next) => {
    const catId = req.params['catId'];
    const catObj = getById(catId);
    try {
        await deleteById(catId);        
    } catch (err) {
        next(err);
    }
    res.redirect('/');
});

module.exports = router;