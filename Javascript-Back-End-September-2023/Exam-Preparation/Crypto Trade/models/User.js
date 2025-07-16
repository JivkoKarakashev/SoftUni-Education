const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, minLength: [5, 'Username must be at least 5 characters long!'], unique: true },
    email: { type: String, required: true, unique: true, minLength: [10, 'Email must be at least 10 characters long!'], match: [/^[a-z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, 'Valid email is required and may contain only english letters and digits!'], unique: true },
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