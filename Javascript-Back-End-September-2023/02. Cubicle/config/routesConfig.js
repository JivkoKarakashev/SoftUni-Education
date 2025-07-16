const homeController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');
const attachAccessoryController = require('../controllers/attachAccessoryContoller');
const authController = require('../controllers/authController');
const defaultController = require('../controllers/defaultController');
const { hasUser } = require('../middlewares/guards');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/about', aboutController);
    app.use('/create', hasUser(), createController);
    app.use('/details', detailsController);
    app.use('/attach/accessory', hasUser(), attachAccessoryController);
    app.use('/auth', authController);

    app.use('*', defaultController);
};