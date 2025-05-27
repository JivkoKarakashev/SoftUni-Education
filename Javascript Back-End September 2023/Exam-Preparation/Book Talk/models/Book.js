const { Schema, model, Types: { ObjectId } } = require('mongoose');

const bookSchema = new Schema({
    title: { type: String, required: true, minLength: [2, 'Book title must be at least 2 characters long!'] },
    author: { type: String, required: true, minLength: [5, 'Book author must be at least 5 characters long!'] },
    imgurl: { type: String, required: true },
    review: { type: String, required: true, minLength: [10, 'Book review must be at least 10 characters long!'] },
    genre: { type: String, required: true, minLength: [3, 'Book genre must be at least 3 characters long!'] },
    stars: { type: Number, required: true, min: [1, 'Stars must be an Integer between 1 and 5!'], max: [5, 'Stars must be an Integer between 1 and 5!'] },
    wishinglist: [{ type: ObjectId, default: [], ref: 'User' }],
    owner: { type: ObjectId, required: true, ref: 'User' },
});

bookSchema.index({ wishinglist: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Book = model('Book', bookSchema);

module.exports = Book;