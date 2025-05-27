// const express = require('express');
// const aboutController = express.Router();

const { Router } = require('express');
const aboutController = Router();

aboutController.get('/', (req, res) => {
    res.render('about', {
        title: 'About Page',
    });
});

module.exports = aboutController;