const hasUser = () => (req, res, next) => {
    if (req.user != undefined) {
        next();
    } else {
        res.redirect('/auth/login');
    }
};

const isGuest = () => (req, res, next) => {
    if (req.user == undefined) {
        next();
    } else {
        res.redirect('/');
    }
};

const hasRole = (role) => (req, res, next) => {
    if (req.user == undefined || req.user['roles'].includes(role) == false) {
        res.redirect('/auth/login');
    } else {
        next();
    }
};

module.exports = {
    hasUser,
    isGuest,
    hasRole,
};