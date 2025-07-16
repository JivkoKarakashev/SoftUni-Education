const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    firstname: { type: String, required: true, minLength: [3, 'First name must be at least 3 characters long!'] },
    lastname: { type: String, required: true, minLength: [3, 'Last name must be at least 3 characters long!'] },
    email: { type: String, required: true, unique: true, minLength: [10, 'Email must be at least 10 characters long!'], match: [/^[a-z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, 'Valid email is required and may contain only english letters and digits!'] },
    hashedPassword: { type: String, required: true },
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