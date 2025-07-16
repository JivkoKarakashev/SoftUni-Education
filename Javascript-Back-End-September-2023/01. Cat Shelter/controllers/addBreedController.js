// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const router = Router();

const { addBreed } = require('../services/catService');


router.get('/', (req, res) => {
    res.render('addBreed');
});
router.post('/', async (req, res, next) => {
    try {
        await addBreed(req.body['breed']);        
    } catch (err) {
        next(err);
    }
    res.redirect('/');
});

module.exports = router;