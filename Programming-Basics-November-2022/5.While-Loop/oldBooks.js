function oldBooks(input){

    let favorBook = input[0];
    let index = 0;
    index++;
    let bookNums = 0;
    let currBookLibr = input[index];
    while (currBookLibr !== "No More Books"){
        if (currBookLibr === favorBook){
            console.log(`You checked ${bookNums} books and found it.`)
            return;
        }
        index++;
        bookNums++;
        currBookLibr = input[index];        
        // console.log(currBookLibr)
        // console.log(bookNums)
    }
    console.log(`The book you search is not here!`)
    console.log(`You checked ${bookNums} books.`)
}

oldBooks (["Troy",
"Stronger",
"Life Style",
"Troy"])







