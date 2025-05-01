function spiralMatrix(rows, columns) {

    // const cellsCount = rows * columns;
    let cellFillCounter = 1;
    const matrix = [...Array(rows)].map(() => [...Array(columns)].fill(0));

    const coordinateStateMap = new Map();
    const coordinateStateArray = ['XminConstYminIncr', 'XminIncrYmaxConst', 'XmaxConstYmaxDecr', 'XmaxDecrYminConst'];
    const coordinateStateArrayLength = coordinateStateArray.length;
    let coordinateStateCycles;
    if (rows === columns) {
        coordinateStateCycles = rows + columns - 1;
    } else if (rows === 1 || columns === 1) {
        coordinateStateCycles = 1;
    } else if (rows > columns) {
        coordinateStateCycles = columns * 2;
    } else if (rows < columns) {
        coordinateStateCycles = rows * 2 - 1;
    }
    const initialRepeats = Math.floor(coordinateStateCycles / 4);
    const additionalRepeats = coordinateStateCycles % 4;

    for (let i = 0; i < coordinateStateArrayLength; i++) {
        coordinateStateMap.set(coordinateStateArray[i], initialRepeats);
    }
    for (let i = 0; i < additionalRepeats; i++) {
        let newValue = coordinateStateMap.get(coordinateStateArray[i]) + 1;
        coordinateStateMap.set(coordinateStateArray[i], newValue);
    }
    // console.log(coordinateStateMap);
    //////////////////////////////////////////////////////////////////////////////////// #0
    const XminConstYminIncrMatrix = [];
    const XminConstYminIncrRow = [];
    let XminConstYminIncrBufferArr;
    if (coordinateStateMap.get(coordinateStateArray[0]) > 0) {

        for (let i = 0, j = 0; j < columns; j++) {
            let corrdinates = Array(i, j);
            XminConstYminIncrRow.push(corrdinates);
        }
        // console.log(XminConstYminIncrRow);
        XminConstYminIncrMatrix.push(XminConstYminIncrRow);
        XminConstYminIncrBufferArr = JSON.parse(JSON.stringify(XminConstYminIncrRow));
        for (let i = 1; i < coordinateStateMap.get(coordinateStateArray[0]); i++) {
            // console.log(coordinateStateMap.get(coordinateStateArray[0]));
            XminConstYminIncrBufferArr.pop();
            XminConstYminIncrBufferArr.shift();
            for (let j = 0; j < XminConstYminIncrBufferArr.length; j++) {
                XminConstYminIncrBufferArr[j][0] = i;
            }
            // for (let currCord of XminConstYminIncrBufferArr) {
            XminConstYminIncrMatrix.push(XminConstYminIncrBufferArr);
            // }
            XminConstYminIncrBufferArr = JSON.parse(JSON.stringify(XminConstYminIncrBufferArr));
            // console.log(XminConstYminIncrMatrix);
        }
    }
    //////////////////////////////////////////////////////////////////////////////////// #1
    const XminIncrYmaxConstMatrix = [];
    const XminIncrYmaxConstRow = [];
    let XminIncrYmaxConstBufferArr;
    if (coordinateStateMap.get(coordinateStateArray[1]) > 0) {

        for (let i = 1, j = columns - 1; i < rows; i++) {
            let corrdinates = Array(i, j);
            XminIncrYmaxConstRow.push(corrdinates);
        }
        // console.log(XminIncrYmaxConstRow);
        XminIncrYmaxConstMatrix.push(XminIncrYmaxConstRow);
        XminIncrYmaxConstBufferArr = JSON.parse(JSON.stringify(XminIncrYmaxConstRow));
        let k = columns - 1;
        for (let i = 1; i < coordinateStateMap.get(coordinateStateArray[1]); i++) {
            // console.log(coordinateStateMap.get(coordinateStateArray[1]));
            k--;
            XminIncrYmaxConstBufferArr.pop();
            XminIncrYmaxConstBufferArr.shift();
            for (let j = 0; j < XminIncrYmaxConstBufferArr.length; j++) {
                XminIncrYmaxConstBufferArr[j][1] = k;
            }
            // for (let currCord of XminIncrYmaxConstBufferArr) {
            XminIncrYmaxConstMatrix.push(XminIncrYmaxConstBufferArr);
            // }
            XminIncrYmaxConstBufferArr = JSON.parse(JSON.stringify(XminIncrYmaxConstBufferArr));
            // console.log(XminIncrYmaxConstMatrix);
        }
    }
    //////////////////////////////////////////////////////////////////////////////////// #2
    const XmaxConstYmaxDecrMatrix = [];
    const XmaxConstYmaxDecrRow = [];
    let XmaxConstYmaxDecrBufferArr;
    if (coordinateStateMap.get(coordinateStateArray[2]) > 0) {

        for (let i = rows - 1, j = columns - 2; j >= 0; j--) {
            let corrdinates = Array(i, j);
            XmaxConstYmaxDecrRow.push(corrdinates);
        }
        // console.log(XmaxConstYmaxDecrRow);
        XmaxConstYmaxDecrMatrix.push(XmaxConstYmaxDecrRow);
        let k = rows - 1;
        XmaxConstYmaxDecrBufferArr = JSON.parse(JSON.stringify(XmaxConstYmaxDecrRow));
        for (let i = 1; i < coordinateStateMap.get(coordinateStateArray[2]); i++) {
            // console.log(coordinateStateMap.get(coordinateStateArray[2]));
            k--;
            XmaxConstYmaxDecrBufferArr.pop();
            XmaxConstYmaxDecrBufferArr.shift();
            for (let j = 0; j < XmaxConstYmaxDecrBufferArr.length; j++) {
                XmaxConstYmaxDecrBufferArr[j][0] = k;
            }
            // for (let currCord of XmaxConstYmaxDecrBufferArr) {
            XmaxConstYmaxDecrMatrix.push(XmaxConstYmaxDecrBufferArr);
            // }
            XmaxConstYmaxDecrBufferArr = JSON.parse(JSON.stringify(XmaxConstYmaxDecrBufferArr));
            // console.log(XmaxConstYmaxDecrMatrix);
        }
    }
    //////////////////////////////////////////////////////////////////////////////////// #3
    const XmaxDecrYminConstMatrix = [];
    const XmaxDecrYminConstRow = [];
    let XmaxDecrYminConstBufferArr;
    if (coordinateStateMap.get(coordinateStateArray[3]) > 0) {

        for (let i = rows - 2, j = 0; i >= 1; i--) {
            let corrdinates = Array(i, j);
            XmaxDecrYminConstRow.push(corrdinates);
        }
        // console.log(XmaxDecrYminConstRow);
        XmaxDecrYminConstMatrix.push(XmaxDecrYminConstRow);
        let k = 0;
        XmaxDecrYminConstBufferArr = JSON.parse(JSON.stringify(XmaxDecrYminConstRow));
        for (let i = 1; i < coordinateStateMap.get(coordinateStateArray[3]); i++) {
            // console.log(coordinateStateMap.get(coordinateStateArray[3]));
            k++;
            XmaxDecrYminConstBufferArr.pop();
            XmaxDecrYminConstBufferArr.shift();
            for (let j = 0; j < XmaxDecrYminConstBufferArr.length; j++) {
                XmaxDecrYminConstBufferArr[j][1] = k;
            }
            // for (let currCord of XmaxDecrYminConstBufferArr) {
            XmaxDecrYminConstMatrix.push(XmaxDecrYminConstBufferArr);
            // }
            XmaxDecrYminConstBufferArr = JSON.parse(JSON.stringify(XmaxDecrYminConstBufferArr));
            // console.log(XmaxDecrYminConstMatrix);
        }
    }
    // console.log(XminConstYminIncrMatrix);
    // console.log(XminIncrYmaxConstMatrix);
    // console.log(XmaxConstYmaxDecrMatrix);
    // console.log(XmaxDecrYminConstMatrix);
    const allCoordinatesMatrix = [];
    const maxCoordStateRepeats = Math.max(XminConstYminIncrMatrix.length, XminIncrYmaxConstMatrix.length, XmaxConstYmaxDecrMatrix.length, XmaxDecrYminConstMatrix.length);

    for (let i = 0; i < maxCoordStateRepeats; i++) {
        let currCoordRow = XminConstYminIncrMatrix[i].concat(XminIncrYmaxConstMatrix[i], XmaxConstYmaxDecrMatrix[i], XmaxDecrYminConstMatrix[i]);
        currCoordRow = JSON.parse(JSON.stringify(currCoordRow));
        currCoordRow = currCoordRow.filter(el => el !== undefined && el !== null);
        // console.log(currCoordRow);
        allCoordinatesMatrix.push(currCoordRow);
    }
    // console.log(allCoordinatesMatrix);
    for (let currCoordRowArr of allCoordinatesMatrix) {
        for (let [x, y] of currCoordRowArr) {
            // console.log(x, y);
            matrix[x][y] = cellFillCounter;
            cellFillCounter++;
        }
    }
    // console.log(matrix);
    for (const currMatrixRow of matrix) {
        console.log(currMatrixRow.join(' '));
    }
}

spiralMatrix(5, 5)
console.log('----------------');
spiralMatrix(3, 3)
console.log('----------------');
spiralMatrix(5, 5)