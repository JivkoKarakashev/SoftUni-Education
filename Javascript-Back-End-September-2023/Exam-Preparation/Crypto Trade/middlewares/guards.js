const hasUser = () => (req, res, next) => {
    // console.log(req.email);
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

module.exports = {
    hasUser,
    isGuest,
};