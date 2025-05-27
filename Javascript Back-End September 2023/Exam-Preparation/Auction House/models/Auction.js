const { Schema, model, Types: { ObjectId } } = require('mongoose');

const IMAGE_PATTERN = /^(.+)\.(png|jpg|jpeg)$/;

const auctionSchema = new Schema({
    title: { type: String, required: true, minLength: [4, 'Title must be at least 4 characters long!'] },
    description: { type: String, maxLength: [200, 'Description must be not more than 200 characters long!'] },
    category: { type: String, required: true, enum: ['vehicles', 'estate', 'electronics', 'furniture', 'other'] },
    imgurl: {
        type: String, validate: {
            validator(value) {
                return IMAGE_PATTERN.test(value);
            },
            message: 'Image must be of type JPG, JPEG or PNG'
        }
    },
    price: { type: Number, required: true, min: [0, 'Starting price is required and should be a positive number!'] },
    bidder: { type: ObjectId, ref: 'User' },
    owner: { type: ObjectId, required: true, ref: 'User' },
    closed: { type: Boolean, default: false }
});

// auctionSchema.index({ votes: 1 }, {
//     collation: {
//         locale: 'en',
//         strength: 2
//     }
// });

const Auction = model('Auction', auctionSchema);

module.exports = Auction;