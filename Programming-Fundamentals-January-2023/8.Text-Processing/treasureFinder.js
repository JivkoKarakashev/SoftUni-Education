function treasureFinder(inputArray) {

    const decryptChar = (char, key) => {
        return String.fromCharCode(char.charCodeAt(0) - key);
    }

    let index = 0;
    const keySequenceArr = inputArray[index].split(' ').map(x => Number(x));
    index++;
    const keySequenceArrLength = keySequenceArr.length;
    let decryptedMessageArr = [];

    while (inputArray[index] !== 'find') {
        let currMessage = inputArray[index];
        let currMessageLength = currMessage.length;
        for (let i = 0; i < keySequenceArrLength; i++) {
            let currKey = keySequenceArr[i];
            for (let j = i; j < currMessageLength; j += keySequenceArrLength) {
                let currCharr = currMessage[j];
                let currDecryptedChar = decryptChar(currCharr, currKey);
                decryptedMessageArr[j] = currDecryptedChar;
            }
        }

        const decryptedMessageStr = decryptedMessageArr.join('');

        let treasureType = decryptedMessageStr.substring(
            decryptedMessageStr.indexOf('&') + 1,
            decryptedMessageStr.lastIndexOf('&')
        );

        let coodrdinates = decryptedMessageStr.substring(
            decryptedMessageStr.indexOf('<') + 1,
            decryptedMessageStr.lastIndexOf('>')
        );
        console.log(`Found ${treasureType} at ${coodrdinates}`);
        decryptedMessageArr = [];
        index++;
    }
}

treasureFinder(
    ["1 2 1 3",
        "ikegfp'jpne)bv=41P83X@",
        "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
        "find"
    ])
console.log('--------------------');
treasureFinder(
    ["1 4 2 5 3 2 1",
        `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
        "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
        "'stj)>34W68Z@",
        "find"
    ])