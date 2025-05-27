const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'fads768fds2lfsd';

async function register(reqBody) {
    const { username, email, password, repass } = reqBody;

    // check if username or email is taken
    const existingUsername = await User.findOne({ username }).select('username');
    if (existingUsername) {
        throw new Error('Username is taken!');
    }

    const existingEmail = await User.findOne({ email }).select('email');
    if (existingEmail) {
        throw new Error('Email is taken!');
    }

    // hash password    
    const hashedPassword = await bcrypt.hash(password, 10);

    // create and save user    
    const user = await User.create({
        username,
        email,
        hashedPassword
    });
    // console.log(user);
    const token = createSession(user);
    // return user session
    return token;
}

async function login(reqBody) {
    const { email, password } = reqBody;

    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error('Incorrect email or password!');
    }

    const match = await bcrypt.compare(password, user['hashedPassword']);
    if (match == false) {
        throw new Error('Incorrect email or password!');
    }

    const token = createSession(user);
    return token;
}

function createSession(user) {
    const payload = {
        _id: user['_id'],
        username: user['username'],
        email: user['email'],
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '4h' });
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken,
};
