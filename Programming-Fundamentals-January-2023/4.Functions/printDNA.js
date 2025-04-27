function printDNA(helihLength) {

    let symbolSequenceArray = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let symbolSequenceArrayLenght = symbolSequenceArray.length;
    let emptyRowArray = [];
    let emptyRowArrayLength = emptyRowArray.length = 6;
    let bufferRowArray = [...emptyRowArray]
    // console.log(emptyRowArray)
    // console.log(bufferRowArray)

    let asteriskSymbolCount = 4;
    let isAsteriskReverseCount = true;
    let asteriskSymbolPrint = (arr, count) => {
        if (count === 4) {
            arr.splice(0, 2, '*', '*');
            arr.splice(4, 2, '*', '*');
            isAsteriskReverseCount = true;
        } else if (count === 2) {
            arr.splice(0, 1, '*');
            arr.splice(5, 1, '*');
        } else if (count === 0) {
            isAsteriskReverseCount = false;
        }        
        // console.log(arr)
        // console.log(arr.length)
        return count;
    }
    
    let dashSymbolCount = 0;
    let isDashReverseCount = false;
    let dashSymbolPrint = (arr, count) => {
        if (count === 4) {           
            arr.splice(1, 4, '-', '-', '-', '-');
            isDashReverseCount = true;
        } else if (count === 2) {
            arr.splice(2, 2, '-', '-');            
        } else if (count === 0) {
            isDashReverseCount = false;
        }        
        // console.log(arr)
        // console.log(arr.length)
        return count;
    }

    let indexlettersPair = 0;
    
    let lettersPairPrint = (arr, starCount, dashCount, lettersIndex) => {

        let firstLetter = symbolSequenceArray[lettersIndex];
        let secondLetter = symbolSequenceArray[lettersIndex + 1];
                
        if (starCount === 4 && dashCount === 0) {           
            arr.splice(2, 2, firstLetter, secondLetter);            
        } else if (starCount === 2 && dashCount === 2) {
            arr.splice(1, 1, firstLetter);            
            arr.splice(4, 1, secondLetter);            
        } else if (starCount === 0 && dashCount === 4) {
            arr.splice(0, 1, firstLetter);            
            arr.splice(5, 1, secondLetter);
        }
        
        // console.log(arr)
        // console.log(arr.length)
        return lettersIndex;
    }    
    
    for (let i = 0; i < helihLength; i++) {
        
        asteriskSymbolPrint(bufferRowArray, asteriskSymbolCount); //debug        
        dashSymbolPrint(bufferRowArray, dashSymbolCount); //debug
        lettersPairPrint(bufferRowArray, asteriskSymbolCount, dashSymbolCount, indexlettersPair);
        if (isAsteriskReverseCount && !isDashReverseCount) {
            asteriskSymbolCount -= 2;
            dashSymbolCount += 2;
        } else {
            asteriskSymbolCount += 2;
            dashSymbolCount -= 2;
        }
        
        indexlettersPair += 2;
        if (indexlettersPair === symbolSequenceArrayLenght){
            indexlettersPair = 0;
        }
        console.log(bufferRowArray.join(''))        
        // console.log(bufferRowArray.length)
        bufferRowArray = [...emptyRowArray];
    }
}

// printDNA(4)
printDNA(10)