function wordOccurrences(inputArray){
    const wordOccurencesObj = {};

    inputArray.forEach(el => {
        let wordOccCounter = 0;
        for (let word of inputArray) {
            if (word === el){
                wordOccCounter++;
            }
        }
        if (!wordOccurencesObj.hasOwnProperty(el)){
            wordOccurencesObj[el] = wordOccCounter;
        }
    });
    let sortedwordOccurencesArr = Object.entries(wordOccurencesObj);
    sortedwordOccurencesArr.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    sortedwordOccurencesArr.forEach(el => {
       let [word, occurCount] = [...el];
       console.log(`${word} -> ${occurCount} times`);
    });
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])