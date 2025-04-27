function starEnigma(inputArray) {

    const attackTypeText = (plArr) => {
        if (plArr[0] === 'A') {
            return 'Attacked';
        } else if (plArr[0] === 'D') {
            return 'Destroyed';
        }
    }
    const sortPlanets = (plArr) => {
        plArr.sort((attTypeA, attTypeB) => attTypeA[0].localeCompare(attTypeB[0]));
        for (let currPlanet of plArr) {
            currPlanet[1].sort((planetA, planetB) => planetA.localeCompare(planetB));
        }
        return plArr;
    }
    const decryptMessage = (msg, keyCount) => {
        let decryptedMsg = '';
        let msgCharsArr = msg.split('');
        for (let currChar of msgCharsArr) {
            let decryptedChar = String.fromCharCode(currChar.charCodeAt(0) - keyCount);
            decryptedMsg += decryptedChar;
        }
        return decryptedMsg;
    }

    const keyChars = /[star]/gi;
    const msgValifation = /@(?<pl>[A-Za-z]+)[^@\-!:>]*?:(?<pop>[\d]+)[^@\-!:>]*?!(?<attType>[AD])![^@\-!:>]*?->(?<sold>[\d]+)/g;
    const messagesCount = Number(inputArray.shift());
    const planetsObj = {
        'A': [],
        'D': [],
    };
    for (let i = 0; i < messagesCount; i++) {
        let decryptedMessage = inputArray[i];
        if (keyChars.test(inputArray[i])){
            let keyCharsCount = [...inputArray[i].match(keyChars)].length;
            decryptedMessage = decryptMessage(inputArray[i], keyCharsCount);
            // console.log(decryptedMessage);
            // console.log(decryptedMessageArray);
        }
        let decryptedMessageArray = [...decryptedMessage.matchAll(msgValifation)];
        if (decryptedMessageArray.length !== 0) {
            let [, planet, , attackType,] = [...decryptedMessageArray[0]];
            // console.log(planet);            
            planetsObj[attackType].push(planet);
        }
    }
    let sortedPlanetsArray = sortPlanets(Object.entries(planetsObj));
    // console.log(sortedPlanetsArray);
    for (let currAttType of sortedPlanetsArray) {
        let attackedCount = currAttType[1].length;
        console.log(`${attackTypeText(currAttType)} planets: ${attackedCount}`);
        if (attackedCount !== 0) {
            for (let currPlanet of currAttType[1]) {
                console.log(`-> ${currPlanet}`);
            }
        }
    }
}

starEnigma(
    [
        '2',
        'STCDoghudd4=63333$D$0A53333',
        'EHfsytsnhf?8555&I&2C9555SR'
    ])
console.log('----------------------');
starEnigma(
    [
        '3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        'GQhrr|A977777(H(TTTT',
        'EHfsytsnhf?8555&I&2C9555SR'
    ])
console.log('----------------------');
starEnigma(
    [
        '3',
        "pp$##@Coruscant:2000000000!D!->5000",
        '@Jakku:200000!A!MMMM',
        '@Cantonica:3000!D!->4000NM'
    ])