function schoolLibrary(inputArray){

    let booksArray = inputArray.shift().split('&');
    let index = 0;
    let commandArray = inputArray[index].split(' | ');
    let command = commandArray[index];
    // console.log(commandArray);

    let addBook = (arr, bkname) =>{
        if (arr.includes(bkname)){            
            return arr;
        }
        arr.unshift(bkname);
        return arr;
    }
    let takeBook = (arr, bkname) =>{
        if (arr.includes(bkname)){
            let bkIdx = arr.indexOf(bkname);
            arr.splice(bkIdx, 1);
            return arr;
        }
        return arr;
    }
    let swapBooks = (arr, bk1, bk2) =>{
        if (arr.includes(bk1) && arr.includes(bk2)){
            let bk1Idx = arr.indexOf(bk1);
            let bk2Idx = arr.indexOf(bk2);
            // let book1 = arr[bk1Idx];
            // let book2 = arr[bk2Idx];
            [arr[bk1Idx], arr[bk2Idx]] = [arr[bk2Idx], arr[bk1Idx]];
            return arr;
        }
        return arr;
    }
    let inserBook = (arr, bkname) =>{
        if (arr.includes(bkname)){
            return arr;
        }
        arr.push(bkname);
        return arr;
    }
    let checkBook = (arr, idx) =>{
        let arrLength = arr.length;
        if (idx >= 0 && idx < arrLength){
            console.log(arr[idx]);
        }
        return arr;
    }

    while (command !== 'Done'){
        let bookName;
        let book2;
        let idx;
        if (command === 'Swap Books'){
            bookName = commandArray[1];
            book2 = commandArray[2];
        } else if (command === 'Check Book'){
            idx = Number(commandArray[1]);
        } else {
            bookName = commandArray[1];
        }

        switch (command){
            case 'Add Book': addBook(booksArray, bookName); break;
            case 'Take Book': takeBook(booksArray, bookName); break;
            case 'Swap Books': swapBooks(booksArray, bookName, book2); break;
            case 'Insert Book': inserBook(booksArray, bookName); break;
            case 'Check Book': checkBook(booksArray, idx); break;
            default: ; break;
        }

        index++
        commandArray = inputArray[index].split(' | ');
        command = commandArray[0];
        // console.log(command);
    }
    if (command === 'Done'){
        console.log(booksArray.join(', '));
    }
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])
console.log('-------------------------------------')
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"])
console.log('-------------------------------------')
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])

