const hasUser = () => (req, res, next) => {
    // console.log(req.email);
    if (req.email != undefined) {
        next();
    } else {
        res.redirect('/auth/login');
    }
};

const isGuest = () => (req, res, next) => {
    if (req.email == undefined) {
        next();
    } else {
        res.redirect('/');
    }
};

module.exports = {
    hasUser,
    isGuest,
};