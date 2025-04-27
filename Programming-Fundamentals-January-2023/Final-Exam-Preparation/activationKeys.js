function activationKeys(inputArray) {

    const slice = (key, startIdx, endIdx) => {
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        let slicedSubString = key.substring(startIdx , endIdx);
        let newRawKey = key.replace(slicedSubString, '');
        console.log(newRawKey);
        return newRawKey;
    }
    const flip = (key, caseSense, startIdx, endIdx) => {
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        let flippedSubString = key.substring(startIdx, endIdx);
        let newRawKeyArr = key.split(flippedSubString);
        if (caseSense === 'Lower') {
            flippedSubString = flippedSubString.toLowerCase();
        } else if (caseSense === 'Upper') {
            flippedSubString = flippedSubString.toUpperCase();
        }
        let newRawKey = newRawKeyArr.join(flippedSubString);
        console.log(newRawKey);
        return newRawKey;
    }
    const contains = (key, subStr) => {
        if (!key.includes(subStr)) {
            console.log('Substring not found!');
            return;
        }
        console.log(`${key} contains ${subStr}`);
    }
    
    let rawKey = inputArray.shift();
    let currLine = inputArray.shift();

    while (currLine !== 'Generate') {
        let command, subString, caseSense, startIndex, endIndex;
        if (currLine.includes('Slice')) {
            [command, startIndex, endIndex] = currLine.split('>>>');
        } else if (currLine.includes('Flip')) {
            [command, caseSense, startIndex, endIndex] = currLine.split('>>>');
        } else if (currLine.includes('Contains')) {
            [command, subString] = currLine.split('>>>');
        }

        switch (command) {
            case 'Slice': rawKey = slice(rawKey, startIndex, endIndex); break;
            case 'Flip': rawKey = flip(rawKey, caseSense, startIndex, endIndex); break;
            case 'Contains': contains(rawKey, subString); break;
        }
        // console.log(rawKey);            
        currLine = inputArray.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}

activationKeys(
[   
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
])
console.log('---------------------------------');
activationKeys(
[
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
])
