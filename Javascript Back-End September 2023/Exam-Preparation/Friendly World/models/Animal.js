const { Schema, model, Types: { ObjectId } } = require('mongoose');

const urlRegEx = /^https?:\/\/.*/i;

const animalSchema = new Schema({
    name: { type: String, required: [true, 'Name is required!'], minLength: [2, 'Name must be at least 2 characters long!'] },
    years: { type: Number, required: [true, 'Years are required!'], min: [1, 'Years must be an Integer between 1 and 100!'], max: [100, 'Years must be an Integer between 1 and 100!'] },
    kind: { type: String, required: [true, 'Kind is required!'], minLength: [3, 'Kind must be at least 3 characters long!'] },
    image: {
        type: String, required: [true, 'Image URL is required!'], validate: {
            validator: (value) => {
                return urlRegEx.test(value);
            },
            message: (props) => {
                // console.log(props);
                return `${props['path']} is not a valid Image URL!`;
            },
        }
    },
    need: { type: String, required: [true, 'Need is required!'], minLength: [3, 'Need must be between 3 and 20 characters long!'], maxLength: [20, 'Need must be between 3 and 20 characters long!'] },
    location: { type: String, required: [true, 'Location is required!'], minLength: [5, 'Need must be between 5 and 15 characters long!'], maxLength: [15, 'Need must be between 5 and 15 characters long!'] },
    description: { type: String, required: [true, 'Description is required!'], minLength: [5, 'Need must be between 5 and 50 characters long!'], maxLength: [50, 'Need must be between 5 and 50 characters long!'] },
    donations: { type: Array, default: [], ref: 'User', },
    owner: { type: ObjectId, ref: 'User', required: true, },
});

animalSchema.index({ location: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;