const { Schema, model, Types: { ObjectId } } = require('mongoose');

const creatureSchema = new Schema({
    name: { type: String, required: true, minLength: [2, 'Creature name must be at least 2 characters long!'] },
    species: { type: String, required: true, minLength: [3, 'Species must be at least 3 characters long!'] },
    skincolor: { type: String, required: true, minLength: [3, 'Skin color must be at least 3 characters long!'] },
    eyecolor: { type: String, required: true, minLength: [3, 'Eye color must be at least 3 characters long!'] },
    imgUrl: { type: String, required: true },
    description: { type: String, required: true, minLength: [5, 'Description must be between 5 and 500 characters long!'], maxLength: [500, 'Description must be between 5 and 500 characters long!'] },
    votes: [{ type: ObjectId, default: [], ref: 'User' }],
    owner: { type: ObjectId, required: true, ref: 'User' },
});

creatureSchema.index({ votes: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Creature = model('Creature', creatureSchema);

module.exports = Creature;