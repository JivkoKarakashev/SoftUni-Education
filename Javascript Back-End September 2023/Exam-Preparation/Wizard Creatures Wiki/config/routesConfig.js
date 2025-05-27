const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const dashboardContoller = require('../controllers/dashboardContoller');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');
const profileController = require('../controllers/profileController');
const defaultController = require('../controllers/defaultController');
const { hasUser, isGuest } = require('../middlewares/guards');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/dashboard', dashboardContoller);
    app.use('/create', hasUser(), createController);
    app.use('/details', detailsController);
    app.use('/profile', hasUser(), profileController);

    app.use('*', defaultController);
};