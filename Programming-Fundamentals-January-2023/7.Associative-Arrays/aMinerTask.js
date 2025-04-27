function aMinerTask(inputArray) {

    const resourceMineListObj = {};
    const inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i += 2) {
        let resource = inputArray[i];
        let quantity = inputArray[i + 1];

        if (!resourceMineListObj.hasOwnProperty(resource)) {
            resourceMineListObj[resource] = Number(quantity);
        } else {
            resourceMineListObj[resource] += Number(quantity);
        }
    }
    for (let resource in resourceMineListObj) {
        console.log(`${resource} -> ${resourceMineListObj[resource]}`);
    }
}

aMinerTask(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ])
console.log('-----------------------');
aMinerTask(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ])