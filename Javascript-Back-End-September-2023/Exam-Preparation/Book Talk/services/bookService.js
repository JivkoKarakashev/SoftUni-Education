const Book = require('../models/Book');

async function getAll() {
    const books = await Book.find({})
        .lean()
        .populate();
    // console.log(books);
    return books;
}

async function getById(id) {
    // return book.findById(id).lean();
    return Book.findOne({ _id: id }).lean().populate();
}


async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { title, author, imgurl, review, genre, stars } = reqBody;
    // console.log(title);
    // console.log(author);
    // console.log(imgurl);
    // console.log(review);
    // console.log(genre);
    // console.log(stars);
    // console.log(ownerId);
    const book = {
        title,
        author,
        imgurl,
        review,
        genre,
        stars: Number(stars),
        owner: ownerId,
    };
    // console.log(book);

    const result = await Book.create(book);
    // console.log(result);
    return result;
}

async function updateById(bookId, reqBody) {
    const book = await Book.findById(bookId);

    const { title, author, imgurl, review, genre, stars } = reqBody;

    book['title'] = title;
    book['author'] = author;
    book['imgurl'] = imgurl;
    book['review'] = review;
    book['genre'] = genre;
    book['stars'] = Number(stars);

    await book.save();
    return book;
}

async function deleteById(bookId) {
    return Book.findByIdAndDelete(bookId);
}

async function wishBook(bookId, userId) {
    const book = await Book.findById(bookId);
    book['wishinglist'].push(userId);

    await book.save();
    return book;
}

async function getByUserWishinglist(userId) {
    // console.log(userId);
    const wishinglist = await Book.find({ wishinglist: userId }).populate().lean();
    // const wishinglistArr = wishinglist.map((b) => b.name);
    // console.log(wishinglist);
    // console.log(wishinglistArr);
    return wishinglist;
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    wishBook,
    getByUserWishinglist
};