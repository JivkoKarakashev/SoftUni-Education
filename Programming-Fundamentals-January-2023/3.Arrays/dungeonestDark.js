function dungeonestDark(inputArray) {

    let inputArrToStr = String(inputArray);
    let roomsArr = inputArrToStr.split('|');

    let health = 100;
    let initCoins = 0;
    let fndCoinds = 0;    
    let roomCounter = 0;
    let itemArr = [];
    let itemPointsArr = [];

    for (let currRoom of roomsArr) {
        let currRoomArr = currRoom.split(' ');
        itemArr.push(currRoomArr[0]);
        itemPointsArr.push(currRoomArr[1]);
    }

    for (let i = 0; i < roomsArr.length; i++) {
        roomCounter++
        let currItem = itemArr[i];
        let currPoints = Number(itemPointsArr[i]);

        switch (currItem) {
            case 'potion':
                if (health + currPoints > 100) {
                    currPoints = 100 - health;
                }
                health += currPoints;
                console.log(`You healed for ${currPoints} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                fndCoinds = currPoints;
                initCoins += fndCoinds;
                console.log(`You found ${fndCoinds} coins.`);
                break;
            default:
                health -= currPoints;
                if (health > 0) {
                    console.log(`You slayed ${currItem}.`)
                } else {
                    console.log(`You died! Killed by ${currItem}.`)
                    console.log(`Best room: ${roomCounter}`)
                    return;
                }
                break;
        }
    }
    console.log(`You've made it!`)
    console.log(`Coins: ${initCoins}`)
    console.log(`Health: ${health}`)
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])