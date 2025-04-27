function countStringOccurrences(sentenceStr, word){

    let occurrenceCounter = 0;
    let sentenceArray = sentenceStr.split(' ');

    for (let currWord of sentenceArray) {
        if (currWord === word){
            occurrenceCounter++;
        }
    }
    console.log(occurrenceCounter);
}

countStringOccurrences(
    'This is a word and it also is a sentence',
    'is')
console.log('--');
countStringOccurrences(
    'softuni is great place for learning new programming languages',
    'softuni')