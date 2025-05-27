const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, minLength: [3, 'Username must be at least 3 characters long!'], unique: true },
    email: { type: String, required: true, minLength: [10, 'Email must be at least 10 characters long!'], match: [/^[a-z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, 'Valid email is required!'], unique: true },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;