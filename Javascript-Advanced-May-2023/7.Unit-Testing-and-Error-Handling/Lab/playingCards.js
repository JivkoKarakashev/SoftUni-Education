function playingCards(face, suit) {

    const validFacesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuitsObj = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    if (!validFacesArr.includes(face)) {
        throw new Error('Error');
    }   

    function addMethod(obj) {
        obj.toString = () => `${obj.face}${validSuitsObj[obj.suit]}`;
    }
    const cardObj = {
        face,
        suit,
    };
    addMethod(cardObj);
    return cardObj;
}


console.log(playingCards('A', 'S').toString());
console.log('-----');
console.log(playingCards('10', 'H').toString());
console.log('-----');
console.log(playingCards('1', 'C').toString());
// console.log('-----');
// console.log(playingCards(1, 'S').toString());