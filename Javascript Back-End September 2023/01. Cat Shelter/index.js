const express = require('express');
const hbs = require('express-handlebars');

const homeController = require('./controllers/homeController');
const addBreedController = require('./controllers/addBreedController');
const addCatController = require('./controllers/addCatController');
const catShelterController = require('./controllers/catShelterController');
const editController = require('./controllers/editController');

const handlebars = hbs.create({
    extname: '.hbs',
});

const app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: false }));

app.use('/', homeController);
app.use('/addBreed', addBreedController);
app.use('/addCat', addCatController);
app.use('/newhome', catShelterController);
app.use('/edit', editController);

app.listen(3000, () => console.log('Server is listening on port 3000...'));