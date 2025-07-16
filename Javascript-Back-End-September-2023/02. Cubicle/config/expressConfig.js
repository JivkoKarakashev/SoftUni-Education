const express = require('express');
const hbs = require('express-handlebars');
const handlebars = hbs.create({
    extname: '.hbs',
});
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const userNav = require('../middlewares/userNav');

const jwtSecret = 'asdf';

module.exports = (app) => {
    app.engine('hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth(jwtSecret));
    app.use(userNav());
};