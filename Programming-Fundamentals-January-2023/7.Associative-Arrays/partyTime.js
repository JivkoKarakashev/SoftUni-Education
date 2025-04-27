function partyTime(inputArray) {

    const reservatonListArr = [];
    const guestsComingListArr = [];
    const vipGuestsListArr = [];

    let isPartyTime = false;
    for (let currGuest of inputArray) {
        if (currGuest === 'PARTY') {
            isPartyTime = true;
            continue;
        }
        if (!isPartyTime) {
            (currGuest.charCodeAt(0) >= 48 && currGuest.charCodeAt(0) <= 57)
                ? vipGuestsListArr.push(currGuest)
                : reservatonListArr.push(currGuest);
        } else {
            guestsComingListArr.push(currGuest);
        }
    }
    
    guestsComingListArr.forEach(guest => {
        if (reservatonListArr.includes(guest)){
            let idx = reservatonListArr.indexOf(guest);
            reservatonListArr.splice(idx, 1);
        } else if (vipGuestsListArr.includes(guest)){
            let idx = vipGuestsListArr.indexOf(guest);
            vipGuestsListArr.splice(idx, 1);
        }
    })

    let vipGuestsListArrLength = vipGuestsListArr.length;
    let reservatonListArrLength = reservatonListArr.length;
    let notShownGuestsNum = vipGuestsListArrLength + reservatonListArrLength;
    console.log(notShownGuestsNum);
    if (vipGuestsListArrLength !== 0){
        vipGuestsListArr.forEach(vipGuest => {
            console.log(vipGuest);
        })
    }
    if (reservatonListArrLength !== 0){
        reservatonListArr.forEach(regularGuest => {
            console.log(regularGuest);
        })
    }
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
console.log('-------');
partyTime([
    '9AA',
    '7BB',
    '9AA',
    'PARTY',
    '9AA',
    '9AA',
])
console.log('-------');
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])