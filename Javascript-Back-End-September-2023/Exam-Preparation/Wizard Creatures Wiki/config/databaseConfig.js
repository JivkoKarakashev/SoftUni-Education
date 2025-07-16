const mongoose = require('mongoose');

const CONNECT_URL = 'mongodb://localhost:27017/wizard';

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECT_URL), {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        console.log('Database connected');
    } catch (err) {
        console.error('Error initializing database');
        console.error(err.message);
        process.exit(1);
    }
};