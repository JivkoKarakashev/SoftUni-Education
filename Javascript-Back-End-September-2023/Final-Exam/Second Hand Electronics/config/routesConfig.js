const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const createController = require('../controllers/createController');
const catalogContoller = require('../controllers/catalogContoller');
const detailsController = require('../controllers/detailsController');
const searchController = require('../controllers/searchController');
const defaultController = require('../controllers/defaultController');
const { hasUser } = require('../middlewares/guards');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/create', hasUser(), createController);
    app.use('/catalog',catalogContoller);
    app.use('/details', detailsController);
    app.use('/search', hasUser(), searchController);

    app.use('*', defaultController);
};