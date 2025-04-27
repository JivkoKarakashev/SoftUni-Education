function piccolo(inputArray) {

    const parkingObj = {};
    inputArray.forEach(el => {
        let [direction, carNumber] = el.split(', ');

        switch (direction) {
            case 'IN': parkingObj[carNumber] = carNumber; break;
            case 'OUT': delete parkingObj[carNumber]; break;
            default: ; break;
        }
    });
    // console.log(parkingObj);    
    let parkingArr = Object.entries(parkingObj);
    if (parkingArr.length > 0){
        let sortedParkingArr = parkingArr.sort((kvpA , kvpB) => kvpA[0].localeCompare(kvpB[0]));
        for (const carInGarage of sortedParkingArr) {
            let [, carNum] = [...carInGarage];
            console.log(carNum);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
console.log('--------')
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])