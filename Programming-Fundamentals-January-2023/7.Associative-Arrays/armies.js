function armies(inputArray) {

    const leadersSort = (armListArr) => {
       return armListArr.sort((leadA, leadB) => leadB[1][1] - leadA[1][1]);       
    }
    const armiesSort = (armListArr) => {
        for (let currLeader of armListArr) {
            return currLeader[1][0].sort((armyA, armyB) => armyB[1] - armyA[1]);
        }
    }
    
    const armiesListObj = {};

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let leaderName, armyLine, armyName, armyCount;

        if (inputArray[i].includes('arrives')) {
            [leaderName,] = inputArray[i].split(' arrives');
            armiesListObj[leaderName] = [];
        } else if (inputArray[i].includes(': ')) {
            [leaderName, armyLine] = inputArray[i].split(': ');
            [armyName, armyCount] = armyLine.split(', ');
            armyCount = Number(armyCount);
            if (armiesListObj.hasOwnProperty(leaderName)){
                armiesListObj[leaderName].push(armyName, armyCount);
            }
        } else if (inputArray[i].includes(' + ')) {
            [armyName, armyCount] = inputArray[i].split(' + ');
            armyCount = Number(armyCount);
            for (let currLeader in armiesListObj) {
                if (armiesListObj[currLeader].includes(armyName)) {
                    let armyIdx = armiesListObj[currLeader].indexOf(armyName);
                    armiesListObj[currLeader][armyIdx + 1] += armyCount;
                }
            }
        } else if (inputArray[i].includes('defeated')) {
            [leaderName,] = inputArray[i].split(' defeated');
            if (armiesListObj.hasOwnProperty(leaderName)){
                delete armiesListObj[leaderName];
            }
        }
    }
    // console.log(armiesListObj);
    const armiesListArr = Object.entries(armiesListObj);
    // console.log(armiesListArr);
    for (let currLeaderLineArr of armiesListArr) {
        // console.log(currLeaderLineArr);
        let totalArmyCount = 0;
        let armiesArr = [];
        let armiesCount = currLeaderLineArr[1].length;
        for (let i = 0; i < armiesCount; i += 2) {
            let army = currLeaderLineArr[1].shift();
            let count = currLeaderLineArr[1].shift();
            let armyCountPairArr = Array.of(army, count);
            armiesArr.push(armyCountPairArr);
            totalArmyCount += count;
            // console.log(currLeaderLineArr);
        }
        currLeaderLineArr[1].push(armiesArr);
        currLeaderLineArr[1].push(totalArmyCount);
    }
    leadersSort(armiesListArr);
    armiesSort(armiesListArr);
    // console.log(armiesListArr);
    for (let currLeader of armiesListArr) {
        console.log(`${currLeader[0]}: ${currLeader[1][1]}`);
        for (let currArmy of currLeader[1][0]) {
            // console.log(currArmy);
            console.log(`>>> ${currArmy.join(' - ')}`);
        }
    }
}

armies(
    [
        'Rick Burr arrives', 
        'Fergus: Wexamp, 30245',
        'Rick Burr: Juard, 50000',
        'Findlay arrives',
        'Findlay: Britox, 34540',
        'Wexamp + 6000',
        'Juard + 1350',
        'Britox + 4500',
        'Porter arrives',
        'Porter: Legion, 55000',
        'Legion + 302',
        'Rick Burr defeated',
        'Porter: Retix, 3205'
    ])
console.log('--------------------------');
armies(
[   'Rick Burr arrives', 
    'Findlay arrives', 
    'Rick Burr: Juard, 1500', 
    'Wexamp arrives', 
    'Findlay: Wexamp, 34540', 
    'Wexamp + 340', 
    'Wexamp: Britox, 1155', 
    'Wexamp: Juard, 43423'
])