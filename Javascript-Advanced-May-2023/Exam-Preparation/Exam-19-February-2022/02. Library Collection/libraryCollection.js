function solve() {
    class LibraryCollection {
        #sortByBookNameFunc = (arr) => {
            return arr.sort((bookAObj, bookBObj) => bookAObj.bookName.localeCompare(bookBObj.bookName));
        }
        constructor(capacity) {
            this.capacity = capacity;
            this.books = [];
        }
        addBook(bookName, bookAuthor) {
            if (this.capacity === 0) {
                throw new Error('Not enough space in the collection.');
            }
            this.books.push({ bookName, bookAuthor, payed: false });
            this.capacity--;
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        }
        payBook(bookName) {
            const bookObjIdx = this.books.findIndex((bookObj) => bookObj['bookName'] === bookName);
            if (bookObjIdx === -1) {
                throw new Error(`${bookName} is not in the collection.`);
            }
            if (this.books[bookObjIdx].payed === true) {
                throw new Error(`${bookName} has already been paid.`);
            }
            this.books[bookObjIdx].payed = true;
            return `${bookName} has been successfully paid.`;
        }
        removeBook(bookName) {
            const bookObjIdx = this.books.findIndex((bookObj) => bookObj['bookName'] === bookName);
            if (bookObjIdx === -1) {
                throw new Error('The book, you\'re looking for, is not found.');
            }
            if (this.books[bookObjIdx].payed === false) {
                throw new Error(`${bookName} need to be paid before removing from the collection.`);
            }
            this.books.splice(bookObjIdx, 1);
            this.capacity++;
            return `${bookName} remove from the collection.`;
        }
        getStatistics(bookAuthor) {
            const outputBooksArray = [];
            if (bookAuthor === undefined) {
                const sortedBooksObjArray = this.#sortByBookNameFunc(this.books);
                for (const bookObj of sortedBooksObjArray) {
                    let paid = 'Has Paid';
                    if (bookObj.payed === false) {
                        paid = 'Not Paid';
                    }
                    outputBooksArray.push(`${bookObj.bookName} == ${bookObj.bookAuthor} - ${paid}.`);
                }
                return `The book collection has ${this.capacity} empty spots left.\n${outputBooksArray.join('\n')}`;
            } else {
                const bookObjIdx = this.books.findIndex((bookObj) => bookObj['bookAuthor'] === bookAuthor);
                if (bookObjIdx === -1) {
                    throw new Error(`${bookAuthor} is not in the collection.`);
                }
                const foundBooksArray = this.books.filter((bookObj) => bookObj['bookAuthor'] === bookAuthor);
                for (const bookObj of foundBooksArray) {
                    let paid = 'Has Paid';
                    if (bookObj.payed === false) {
                        paid = 'Not Paid';
                    }
                    outputBooksArray.push(`${bookObj.bookName} == ${bookObj.bookAuthor} - ${paid}.`);
                }
                return `${outputBooksArray.join('\n')}`;
            }
        }
    }
    // const library = new LibraryCollection(2)
    // console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
    // console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
    // console.log(library.addBook('Ulysses', 'James Joyce'));
    // console.log('-----------------------------------------------');
    // const library = new LibraryCollection(2)
    // library.addBook('In Search of Lost Time', 'Marcel Proust');
    // console.log(library.payBook('In Search of Lost Time'));
    // console.log(library.payBook('Don Quixote'));
    // console.log('-----------------------------------------------');
    // const library = new LibraryCollection(2)
    // library.addBook('In Search of Lost Time', 'Marcel Proust');
    // library.addBook('Don Quixote', 'Miguel de Cervantes');
    // library.payBook('Don Quixote');
    // console.log(library.removeBook('Don Quixote'));
    // console.log(library.removeBook('In Search of Lost Time'));
    // console.log('-----------------------------------------------');
    // const library = new LibraryCollection(2)
    // console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
    // console.log(library.getStatistics('Miguel de Cervantes'));}
    console.log('-----------------------------------------------');
    const library = new LibraryCollection(5)
    library.addBook('Don Quixote', 'Miguel de Cervantes');
    library.payBook('Don Quixote');
    library.addBook('In Search of Lost Time', 'Marcel Proust');
    library.addBook('Ulysses', 'James Joyce');
    console.log(library.getStatistics());
}

solve()