function race(inputArray) {

    const orderText = (idx) => {
        if (idx === 0){
            return '1st'
        } else if (idx === 1){
            return '2nd'
        }
        return '3rd'
    }
    const charIsLetter = (char) => {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
            || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
                return true;
        }
        return false;
    }
    const charIsDigit = (char) => {
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                return true;
        }
        return false;
    }

    let index = 0;
    const qualifChartObj = {};
    const participantsArr = inputArray.shift().split(', ');
    // console.log(participantsArr);
    while (inputArray[index] !== 'end of race') {
        let currLineCharsArr = inputArray[index].split('');
        let participName = '';
        let participDistance = 0;
        // console.log(currLineCharsArr);
        for (let currChar of currLineCharsArr) {
            if (charIsLetter(currChar)){
                participName += currChar;
            } else if (charIsDigit(currChar)){
                participDistance += Number(currChar);
            }
        }
        // console.log(participName);
        if (participantsArr.includes(participName)){
            if (!qualifChartObj.hasOwnProperty(participName)){
                qualifChartObj[participName] = 0;
            }
            qualifChartObj[participName] += participDistance;
        }
        index++;
    }
    // console.log(qualifChartObj);
    const sortedQualifChartArr = Object.entries(qualifChartObj).sort((participA, participB) => participB[1] - participA[1]);
    for (let i = 0; i < 3; i++) {
        let currParticip = sortedQualifChartArr[i][0];
        let text = orderText(i);
        console.log(`${text} place: ${currParticip}`);
    }
}

race(
    [
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@ ',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ])
console.log('-----------------');
race(
[   'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
])