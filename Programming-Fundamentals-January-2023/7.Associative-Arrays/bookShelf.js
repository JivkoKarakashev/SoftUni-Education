function bookShelf(inputArray){

    const sortByBooksCount = (genreArr) => {
        genreArr.sort((booksCountA, booksCountB) => {
            if (booksCountA[1].length === booksCountB[1].length) {
                return booksCountA[0].localeCompare(booksCountB[0]);
            } else {
                return booksCountB[1].length - booksCountA[1].length;
            }
        });
    }
    const sortByBookTitle = (genreArr) =>{ 
        for (let bookLine of genreArr) {
            return bookLine[1].sort((bookA, bookB) => bookA[0].localeCompare(bookB[0]));
        }      
    }
    
    const shelvesObject ={};
    const genreObject = {};

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let id, genre, bookAuthorPair, book, author;
        if(inputArray[i].includes(' -> ')){
            [id, genre] = inputArray[i].split(' -> ');
            if (!Object.values(shelvesObject).includes(id)){
                shelvesObject[genre] = id;
                genreObject[genre] = [];
            }
        } else {
            [bookAuthorPair, genre] = inputArray[i].split(', ');
            [book, author] = bookAuthorPair.split(': ');
            if (shelvesObject.hasOwnProperty(genre)){
                let bookAuthorPairArr = Array.of(book, author);
                genreObject[genre].push(bookAuthorPairArr);
            }
        }        
    }
    // console.log(genreObject);
    const genreArray = Object.entries(genreObject);
    sortByBooksCount(genreArray);
    sortByBookTitle(genreArray);
    // console.log(genreArray);
    for (let currGenre of genreArray) {
        console.log(`${shelvesObject[currGenre[0]]} ${currGenre[0]}: ${currGenre[1].length}`);
        for (let booksArr of currGenre[1]) {
            console.log(`--> ${booksArr[0]}: ${booksArr[1]}`);
        }
    }
}

bookShelf(
[
    '1 -> history', 
    '1 -> action', 
    'Death in Time: Criss Bell, mystery', 
    '2 -> mystery', 
    '3 -> sci-fi', 
    'Child of Silver: Bruce Rich, mystery', 
    'Hurting Secrets: Dustin Bolt, action', 
    'Future of Dawn: Aiden Rose, sci-fi', 
    'Lions and Rats: Gabe Roads, history', 
    '2 -> romance', 
    'Effect of the Void: Shay B, romance', 
    'Losing Dreams: Gail Starr, sci-fi', 
    'Name of Earth: Jo Bell, sci-fi', 
    'Pilots of Stone: Brook Jay, history'
])
console.log('----------------------------------');
bookShelf(
[   '1 -> mystery', 
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
])