const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    email : { type: String, required: true },
    hashedPassword: { type: String, required: true },
    // roles: { type: [String], enum: ['user', 'owner'], default: ['user'] },
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