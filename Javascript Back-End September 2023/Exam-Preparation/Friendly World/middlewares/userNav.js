const userNav = () => (req, res, next) => {
    res.locals['hasUser'] = req.email != undefined;
    next();
};

module.exports = userNav;