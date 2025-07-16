const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, minLength: [10, 'Email must be at least 10 characters long!'], match: [/^[a-zA-Z+_.-]+@[a-zA-Z.-]+$/i, 'Valid email is required and may contain only english letters and digits!'] },
    hashedPassword: { type: String, required: true },
    firstname: { type: String, required: true, minLength: [1, 'First name must be at least 1 characters long!'] },
    lastname: { type: String, required: true, minLength: [1, 'Last name must be at least 1 characters long!'] },
});

// userSchema.index({ email: 1 }, {
//     unique: true,
//     collation: {
//         locale: 'en',
//         strength: 2
//     }
// });

const User = model('User', userSchema);

module.exports = User;