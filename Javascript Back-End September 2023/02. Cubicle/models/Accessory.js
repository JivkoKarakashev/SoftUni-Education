const { Schema, model, Types: { ObjectId } } = require('mongoose');

const accsessorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 240, },
    imageUrl: { type: String, required: true },
    cubes: { type: [ObjectId], default: [], ref: 'Cube', },
});

const Accessory = model('Accessory', accsessorySchema);

module.exports = Accessory;