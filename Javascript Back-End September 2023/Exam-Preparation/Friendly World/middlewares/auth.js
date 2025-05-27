const jwt = require('jsonwebtoken');

const auth = (jwtSecret) => (req, res, next) => {
    const token = req.cookies['jwt'];
    if (token) {
        try {
            const data = jwt.verify(token, jwtSecret);
            // console.log(data);
            req.email = data;
        } catch (err) {
            res.clearCookie('jwt');
            return res.redirect('/login');
        }
    }

    req.signJwt = (data) => jwt.sign(data, jwtSecret, { expiresIn: '4h' });

    next();
};

module.exports = auth;