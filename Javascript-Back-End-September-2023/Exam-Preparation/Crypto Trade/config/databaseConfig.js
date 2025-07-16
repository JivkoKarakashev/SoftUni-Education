const mongoose = require('mongoose');

const connectUrl = 'mongodb://localhost:27017/cryptotrade';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectUrl), {
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