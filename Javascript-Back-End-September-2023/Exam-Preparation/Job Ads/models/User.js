const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, /*minLength: [10, 'Email must be at least 10 characters long!'],*/ match: [/^[a-z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, 'Valid email is required and may contain only english letters and digits!'], unique: true },
    hashedPassword: { type: String, required: true },
    skills: { type: String, required: true, maxLength: [10, 'Skills must contain no more than 10 characters!'] },
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