function magicMatrices(matricesArray) {

    let magicSum = 0;
    let isMagicmatrix = true;
    
    for (let i = 0; i < matricesArray.length; i++) {
        let currRow = [...matricesArray[i]];
        let sumCurrRow = 0;
        
        // console.log(currRow)
        for (let j = 0; j < currRow.length; j++) {
            let currElement = currRow[j];            
            if (i === 0) {
                magicSum += currElement;
            }
            sumCurrRow += currElement;            
        }
        // console.log(sumCurrRow)
        if (sumCurrRow !== magicSum){
            isMagicmatrix = false;
            break;
        }
    }
    // console.log(isMagicmatrix)
    
    
    for (let i = 0; i < matricesArray.length; i++) {
        let sumCurrColumn = 0;
        for (let j = 0; j < matricesArray.length; j++) {
            let currColumn = [...matricesArray[j]];        
            let currElement = currColumn[i];            
            sumCurrColumn += currElement;            
            // console.log(currColumn)
        }
        // console.log(sumCurrColumn)
        if (sumCurrColumn !== magicSum){
            isMagicmatrix = false;
            break;
        }
    }
    
    console.log(isMagicmatrix)
    // console.log(magicSum)
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
   )