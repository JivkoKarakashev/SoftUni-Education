function cardGame(inputArray) {

    const scoresTableMap = new Map();

    inputArray.forEach(currPersonDraw => {
        let [name, cardsDraw] = currPersonDraw.split(': ');
        let cardsDrawArr = cardsDraw.split(', ');
        let uniqueCharsArr = [...new Set(cardsDrawArr)];
        if (scoresTableMap.has(name)) {
            let currCards = scoresTableMap.get(name);
            let newCards = currCards.concat(uniqueCharsArr);
            uniqueCharsArr = [...new Set(newCards)];        
        }
        scoresTableMap.set(name, uniqueCharsArr);
    })

    for (let [name, cards] of scoresTableMap) {
        let personTotalScore = 0;
        for (let currCard of cards) {
            let power, type;
            (currCard.length > 2)
                ? [power, type] = [currCard[0] + currCard[1], currCard[2]]
                : [power, type] = currCard.split('');
            switch (power) {
                case 'J': power = 11; break;
                case 'Q': power = 12; break;
                case 'K': power = 13; break;
                case 'A': power = 14; break;
                default: power = power; break;
            }
            power = Number(power);
            let multriplier = 1;
            switch (type) {
                case 'S': multriplier = 4; break;
                case 'H': multriplier = 3; break;
                case 'D': multriplier = 2; break;
                default: ; break;
            }
            let currCardValue = power * multriplier;
            personTotalScore += currCardValue;
        }
        console.log(`${name}: ${personTotalScore}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
console.log('----------------');
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])