const { Router } = require('express');
const catalogContoller = Router();

const { getAll } = require('../services/bookService');

catalogContoller.get('/', async (req, res, next) => {
    // const books = [];
    const books = await getAll();    
    // console.log(books);

    res.render('catalog', {
        title: 'Catalog Page',
        books
    });
});

module.exports = catalogContoller;