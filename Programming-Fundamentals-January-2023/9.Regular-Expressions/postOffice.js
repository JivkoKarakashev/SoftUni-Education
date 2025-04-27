function postOffice(inputString) {

    // inputString = inputString.join('');
    const threePartsArray = inputString.split('|');
    const [firstPart, secondPart, thirdPart] = [...threePartsArray];
    const capLettersMap = new Map;

    const capLettRegEx = /([#$%*&]{1})(?<capLett>[A-Z]+)\1/;
    const wrdStartLettAndLgthRegEx = /(?<ascii>\d{2}):(?<lgth>\d{2})/g;

    const isValidCapitalLetter = (asciiCode, capLettArr) => {
        if (capLettArr.includes(String.fromCharCode(asciiCode))) {
            return String.fromCharCode(asciiCode);
        }
        return false;
    }
    let startLettersArr = capLettRegEx.exec(firstPart);
    startLettersArr = startLettersArr.groups.capLett.split('');
    for (let currCapLett of startLettersArr) {
        capLettersMap.set(currCapLett, 0);
    }
    // console.log(capLettersMap);
    let currWrdStartLettAndLgthArr = wrdStartLettAndLgthRegEx.exec(secondPart);
    while (currWrdStartLettAndLgthArr) {
        // console.log(currWrdStartLettAndLgthArr);
        let currStartLettAscii = Number(currWrdStartLettAndLgthArr.groups.ascii);
        let currWrdLght = Number(currWrdStartLettAndLgthArr.groups.lgth) + 1;

        if (isValidCapitalLetter(currStartLettAscii, startLettersArr)) {
            let currStartLett = isValidCapitalLetter(currStartLettAscii, startLettersArr);
            // console.log(currStartLett);
            if (capLettersMap.has(currStartLett)) {
                capLettersMap.set(currStartLett, currWrdLght);
            }
        }
        currWrdStartLettAndLgthArr = wrdStartLettAndLgthRegEx.exec(secondPart)
        // console.log(capLettersMap);
    }
    const thirdPartWordsArr = thirdPart.split(' ');

    for (let letter of startLettersArr) {
        for (let currWord of thirdPartWordsArr) {
            if (letter === currWord[0] && currWord.length === capLettersMap.get(letter)) {
                console.log(currWord);
            }
        }
    }
}

postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos')
console.log('------------');
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')