const homeController = require('../controllers/homeController');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');
const dashboardContoller = require('../controllers/dashboardContoller');
const authController = require('../controllers/authController');
const defaultController = require('../controllers/defaultController');
const searchController = require('../controllers/searchController');
const { hasUser } = require('../middlewares/guards');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/create', hasUser(), createController);
    app.use('/details', detailsController);
    app.use('/dashboard',dashboardContoller);
    app.use('/auth', authController);
    app.use('/search', searchController);

    app.use('*', defaultController);
};