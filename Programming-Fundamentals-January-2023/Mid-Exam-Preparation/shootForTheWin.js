function shootForTheWin(inputArray) {

    let targetsArray = inputArray
        .shift()
        .split(' ')
        .map(x => Number(x));

    let shotsCount = 0;
    let targetsArrayLength = targetsArray.length;
    let index = 0;
    let command = inputArray[index];
    while (command !== 'End') {
        let idx = Number(command);
        if (idx < 0 || idx >= targetsArrayLength) {
            index++;
            command = inputArray[index];
            continue;
        } else {
            if (targetsArray[idx] === -1) {
                index++;
                command = inputArray[index];
                continue;
            } else {
                shotsCount++;
                let targetValue = targetsArray[idx];
                targetsArray[idx] = -1;
                for (let i = 0; i < targetsArrayLength; i++) {
                    if (targetsArray[i] > targetValue && targetsArray[i] !== -1) {
                        targetsArray[i] -= targetValue;
                    } else if (targetsArray[i] <= targetValue && targetsArray[i] !== -1) {
                        targetsArray[i] += targetValue;
                    }
                }
            }
        }
        index++;
        command = inputArray[index];
    }
    console.log(`Shot targets: ${shotsCount} -> ${targetsArray.join(' ')}`)
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
console.log('---------------------------------')
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])