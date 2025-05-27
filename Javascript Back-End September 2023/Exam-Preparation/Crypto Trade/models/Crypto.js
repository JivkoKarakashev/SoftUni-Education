const { Schema, model, Types: { ObjectId } } = require('mongoose');

const cryptoSchema = new Schema({
    name: { type: String, required: true, minLength: [2, 'Crypto name must be at least 2 characters long!'] },
    imgurl: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, minLength: [10, 'Description must be at least 10 characters long!'] },
    paymethod: { type: String, required: true, enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'] },
    boughtby: [{ type: ObjectId, default: [], ref: 'User' }],
    owner: { type: ObjectId, required: true, ref: 'User' },
});

cryptoSchema.index({ name: 1, paymethod: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

cryptoSchema.index({ boughtby: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;