const bcrypt = require('bcrypt');
const User = require('../models/User');
const fulfilledFormCheck = require('../utils/fulfilledFormCheck');

async function register(reqBody) {
    const { email, password, rePass } = reqBody;

    // Check for missing fields
    const formEntries = { email, password, rePass };
    // console.log(formEntries);
    fulfilledFormCheck(formEntries);

    // check if username is taken
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('Username is taken!');
    }

    // hash password    
    const hashedPassword = await bcrypt.hash(password, 10);

    // create and save user    
    const user = await User.create({
        email,
        hashedPassword
    });
    // console.log(user);
    // return user data
    return {
        _id: user['_id'],
        email,
    };
}

async function login(reqBody) {
    const { email, password } = reqBody;

    // Check for missing fields
    const formEntries = { email, password };
    fulfilledFormCheck(formEntries);

    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Incorrect username or password!');
    }

    const match = await bcrypt.compare(password, user['hashedPassword']);
    if (!match) {
        throw new Error('Incorrect username or password!');
    }

    return {
        _id: user['_id'],
        email: user['email'],
    };
}

module.exports = {
    register,
    login,
};
