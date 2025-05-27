const userNav = () => (req, res, next) => {
    res.locals['hasUser'] = req.user != undefined;
    next();
};

module.exports = userNav;