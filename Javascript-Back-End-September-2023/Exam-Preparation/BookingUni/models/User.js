const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, match: [/^[a-z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, 'Valid email is required and may contain only english letters and digits!'] },
    username: { type: String, required: true, unique: true, match: [/^[a-zA-Z0-9]{5,}$/i, 'Username should be at least 5 charecters long and may contain only english letters and digits!'] },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;