const { Schema, model, Types: { ObjectId } } = require('mongoose');

const hotelSchema = new Schema({
    name: { type: String, required: true, unique: true, minLength: [4, 'Hotel name must be at least 4 characters long!'] },
    city: { type: String, required: true, minLength: [3, 'City must be at least 3 characters long!'] },
    imgUrl: { type: String, required: true },
    rooms: { type: Number, required: true, min: [1, 'Rooms must be an Integer between 1 and 100!'], max: [100, 'Rooms must be an Integer between 1 and 100!'] },
    bookedusers: [{ type: ObjectId, default: [], ref: 'User' }],
    owner: { type: ObjectId, required: true, ref: 'User' },
});

hotelSchema.index({ bookedusers: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;