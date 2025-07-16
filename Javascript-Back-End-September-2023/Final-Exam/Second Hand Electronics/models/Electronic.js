const { Schema, model, Types: { ObjectId } } = require('mongoose');

const electronicSchema = new Schema({
    name: { type: String, required: true, minLength: [10, 'Name must be at least 10 characters long!'] },
    type: { type: String, required: true, minLength: [2, 'Type must be at least 2 characters long!'] },
    damages: { type: String, required: true, minLength: [10, 'Damages must be at least 10 characters long!'] },
    imgurl: { type: String, required: true },
    description: { type: String, required: true, minLength: [10, 'Description must contains between 10 and 200 characters!'], maxLength: [200, 'Description must contains between 10 and 200 characters!'] },
    production: { type: Number, required: true, min: [1900, 'Production year must be an Integer between 1900 and 2023!'], max: [2023, 'Production year must be an Integer between 1900 and 2023!'] },
    exploitation : { type: Number, required: true, min: [0, 'Exploitation years must be positive number!'] },
    price : { type: Number, required: true, min: [0, 'Price must be positive number!'] },
    buyinglist : [{ type: ObjectId, default: [], ref: 'User' }],
    owner: { type: ObjectId, required: true, ref: 'User' },
});

electronicSchema.index({ name: 1, type: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Electronic = model('Electronic', electronicSchema);

module.exports = Electronic;