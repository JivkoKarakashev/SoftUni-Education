const { verifyToken } = require("../services/userService");

const session = () => (req, res, next) => {
    const token = req.cookies['token'];
    if (token) {
        try {
            const userData = verifyToken(token);
            // console.log(userData);
            req.user = userData;
            res.locals['user'] = userData['username'];
        } catch (error) {
            res.clearCookie('token');
            return res.redirect('auth/login');
        }
    }

    next();
};

module.exports = session;