function wordTracker(inputArray) {

    const searchedWordsArr = inputArray.shift().split(' ');
    const searchedWordsObj = {};

    for (const word of searchedWordsArr) {
        searchedWordsObj[word] = 0;        
    }
    // console.log(searchedWordsObj)
    inputArray.forEach(el => {
        if (searchedWordsObj.hasOwnProperty(el)){
            searchedWordsObj[el]++;
        }
    });

    let sortedWordsArr = Object.entries(searchedWordsObj).sort((kvpA , kvpB) => kvpB[1] - kvpA[1]);
    
    for (const wordOccursArrLine of sortedWordsArr) {
        let [word, ocurrCount] = wordOccursArrLine;
        console.log(`${word} - ${ocurrCount}`);
    }
}

wordTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])