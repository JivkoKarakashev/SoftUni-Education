function pointsValidation(coordinates){

    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];
    let a0 = 0;
    let b0 = 0;
    let distance;
    
    let modifyArray = (arr, coord1, coord11, coord2, coord22) => {
        arr.splice(0, 4, coord1, coord11, coord2, coord22);
    }

    let distanceCalculation = (a1, b1, a2, b2) => Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));

    let bufferArray = [...coordinates];
    let x1y1Tox2y2Arr = [...coordinates];
    modifyArray(bufferArray, x1, y1, a0, b0);
    let x1y1To00 = [...bufferArray];
    bufferArray = [...coordinates];
    modifyArray(bufferArray, x2, y2, a0, b0);
    let x2y2To00 = [...bufferArray];
    // console.log(x1y1Tox2y2Arr)
    // console.log(x1y1To00)
    // console.log(x2y2To00)
    let allCoordinatesArr = [];
    allCoordinatesArr.push(x1y1To00);
    allCoordinatesArr.push(x2y2To00);
    allCoordinatesArr.push(x1y1Tox2y2Arr);
    let allCoordinatesArrLength = allCoordinatesArr.length;
    // console.log(newArray);
    for (let i = 0; i < allCoordinatesArrLength; i++){
        // console.log(newArray[i]);
        distance = distanceCalculation(allCoordinatesArr[i][0], allCoordinatesArr[i][1], allCoordinatesArr[i][2], allCoordinatesArr[i][3]);
        // console.log(distance);
        if (Number.isInteger(distance)){
            console.log(`{${allCoordinatesArr[i][0]}, ${allCoordinatesArr[i][1]}} to {${allCoordinatesArr[i][2]}, ${allCoordinatesArr[i][3]}} is valid`)
        } else {
            console.log(`{${allCoordinatesArr[i][0]}, ${allCoordinatesArr[i][1]}} to {${allCoordinatesArr[i][2]}, ${allCoordinatesArr[i][3]}} is invalid`)      
        }
    }        
}
// pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])