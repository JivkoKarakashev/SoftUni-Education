const { Schema, model, Types: { ObjectId } } = require('mongoose');

const gameSchema = new Schema({
    name: { type: String, required: true, minLength: [4, 'Game name must be at least 4 characters long!'] },
    imgurl: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, minLength: [10, 'Description must be at least 10 characters long!'] },
    genre: { type: String, required: true, minLength: [2, 'Genre must be at least 2 characters long!'] },
    platform: { type: String, required: true, enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'] },
    boughtby: [{ type: ObjectId, default: [], ref: 'User' }],
    owner: { type: ObjectId, required: true, ref: 'User' },
});

gameSchema.index({ name: 1, platform: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

gameSchema.index({ boughtby: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Game = model('Game', gameSchema);

module.exports = Game;