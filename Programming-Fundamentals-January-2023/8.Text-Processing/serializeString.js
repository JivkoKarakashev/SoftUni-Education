function serializeString(inputArray) {

    const str = inputArray[0];
    const strLength = str.length;
    const serializedStrObject = {};

    for (let i = 0; i < strLength; i++) {
        let currChar = str[i];
        if (!serializedStrObject.hasOwnProperty(currChar)) {
            serializedStrObject[currChar] = [];
        }
        serializedStrObject[currChar].push(i);
    }
    for (const kvpArr of Object.entries(serializedStrObject)) {
        console.log(`${kvpArr[0]}:${kvpArr[1].join('/')}`);
    }
}

serializeString(["abababa"])
console.log('---------------');
serializeString(["avjavamsdmcalsdm"])