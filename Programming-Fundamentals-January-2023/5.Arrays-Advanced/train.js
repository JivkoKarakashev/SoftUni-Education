function train(input) {

    let trainWagonsArray = input
        .shift()
        .split(' ')
        .map(Number);
    // console.log(trainWagonsArray)
    let maxWagonCapacity = input
        .shift()
        .split(' ')
        .map(Number);
    // console.log(maxWagonCapacity)

    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {

        let currLine = input[i].split(' ');
        let currLineLength = currLine.length;
        if (currLineLength === 1) {
            let [passengers] = [...currLine];
            passengers = Number(passengers);
            trainWagonsArray = wagonFill(trainWagonsArray, passengers, maxWagonCapacity);
        } else {
            let [, wagonNum] = [...currLine];
            wagonNum = Number(wagonNum);
            trainWagonsArray.push(wagonNum);
        }
    }

    function wagonFill(wagonsArr, passengers, wagonCapacity){
        
            for (let i = 0; i < wagonsArr.length; i++){
                if (passengers === 0){                    
                    break;
                }
                let currWagon = wagonsArr[i];
                let differnce = wagonCapacity - currWagon;
                if (differnce >= passengers){
                    currWagon += passengers;
                    passengers -= passengers;
                } else {
                    continue;
                }
                wagonsArr[i] = currWagon;
            }        
        return wagonsArr;
    }
    // trainWagonsArray = [...wagonsArr];
    console.log(trainWagonsArray.join(' '))        
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
console.log('--------------')
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])