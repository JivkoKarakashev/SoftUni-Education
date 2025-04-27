function oddOccurrences(inputString){

    const stringsOccurrencesMap = new Map();
    const wordsArray = inputString.split(' ');
    
    wordsArray.forEach(el => {        
        let loweredWord = el.toLowerCase();

        if (!stringsOccurrencesMap.has(loweredWord)){
            stringsOccurrencesMap.set(loweredWord, 1);
        } else {
            let wordOccurrs = stringsOccurrencesMap.get(loweredWord);
            wordOccurrs++;
            stringsOccurrencesMap.set(loweredWord, wordOccurrs);
        }
    });
    
    let outputStrings = '';
    for (let [string, occurrsCount] of stringsOccurrencesMap.entries()) {
        occurrsCount = Number(occurrsCount);
        if (occurrsCount % 2 !== 0){
            outputStrings += (` ${string}`)
        }
    }
    console.log(outputStrings); 
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log('-----------')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')