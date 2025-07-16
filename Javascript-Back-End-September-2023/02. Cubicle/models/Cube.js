const { Schema, model, Types } = require('mongoose');

const urlRegEx = /^(https?:\/)?\/.*/i;

const cubeSchema = new Schema({
    name: { type: String, required: [true, 'Name is required!'] },
    description: { type: String, required: [true, 'Description is required!'], maxLength: [240, 'Description must be less than 240 characters'], },
    imageUrl: {
        type: String, required: [true, 'Image URL is required!'], minLength: [3, 'Image URL must be at least 3 character long!'], validate: {
            validator: (value) => {
                return urlRegEx.test(value);
            },
            message: (props) => {
                // console.log(props);
                return `${props['path']} is not a valid Image URL!`;
            },
        }
    },
    difficultyLevel: { type: Number, required: true, maxLength: 240, min: 1, max: 6, },
    accessories: { type: [Types.ObjectId], default: [], ref: 'Accessory', },
    owner: { type: Types.ObjectId, ref: 'User', required: true, },
});

cubeSchema.index({ name: 1, description: 1, difficultyLevel: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;