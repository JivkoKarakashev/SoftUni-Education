const { Schema, model, Types: { ObjectId } } = require('mongoose');

const adSchema = new Schema({
    headline: { type: String, required: true, minLength: [4, 'Headline must be at least 4 characters long!'] },
    location: { type: String, required: true, minLength: [8, 'Location must be at least 8 characters long!'] },
    companyname: { type: String, required: true, minLength: [3, 'Company name must be at least 3 characters long!'] },
    description: { type: String, required: true, maxLength: [40, 'Description must contain no more than 40 characters!'] },
    applied: [{ type: ObjectId, default: [], ref: 'User' }],
    owner: { type: ObjectId, required: true, ref: 'User' },
});

adSchema.index({ applied: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

adSchema.index({ owner: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Ad = model('Ad', adSchema);

module.exports = Ad;