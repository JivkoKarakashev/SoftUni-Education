function printDeckOfCards(cardsArray) {

    const faceSuitSplitRegEx = /^(?<f>[0-9]{1,2}|[A-Z]{1})(?<s>[A-Z]{1})$/;
    const resultArr = [];

    const validFacesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuitsObj = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    const cardValidation = (arr) => {
        for (let currCard of arr) {
            let cardArr = currCard.match(faceSuitSplitRegEx);
            let face = cardArr.groups['f'];
            let suit = cardArr.groups['s'];
            if (!validFacesArr.includes(face) || !validSuitsObj.hasOwnProperty(suit)) {
                return `Invalid card: ${currCard}`;
            } else {
                resultArr.push(face.concat(validSuitsObj[suit]));
            }
        }
    };
    let result = cardValidation(cardsArray);
    if (typeof result !== 'string') {
        console.log(resultArr.join(' '));
    } else {
        console.log(result);
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
console.log('-------------');
printDeckOfCards(['5S', '3D', 'QD', '1C'])