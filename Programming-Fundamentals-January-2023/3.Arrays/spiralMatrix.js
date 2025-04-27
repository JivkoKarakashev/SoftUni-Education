function spiralMatrix(columns, rows) {

    let result = [];
    
    for (let i = 0; i < rows; i++){
        let newArray = [];
        for (let j = 0; j < columns; j++){
            newArray[j] = [...newArray];
        }
        result = [...newArray];        
    }
    console.log(result)
    let counter = 1;

    let startCol = 0;
    let endCol = columns - 1;
    let startRow = 0;
    let endRow = rows - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }
    for (let i = 0; i < rows; i++) {
        console.log(result[i].join(' '));
    }
}

spiralMatrix(5, 5)