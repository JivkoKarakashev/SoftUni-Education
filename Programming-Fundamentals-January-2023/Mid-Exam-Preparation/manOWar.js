function manOWar(inputArray) {

    let pirateShipArray = inputArray[0]
        .split('>')
        .map(Number);
    inputArray.shift();
    let battleShipArray = inputArray[0]
        .split('>')
        .map(Number);
    inputArray.shift();
    let maxHealth = Number(inputArray[0]);
    inputArray.shift();

    let inputArrayLength = inputArray.length;
    let isBattleShipSunken = false;
    let isPirateShipSunken = false;

    let fire = (btlShpArr, idx, dmg) => {
        let btlShpArrLength = btlShpArr.length;
        if (idx < 0 || idx >= btlShpArrLength) {
            return btlShpArr;
        } else {
            btlShpArr[idx] -= dmg;
        }
        if (btlShpArr[idx] <= 0) {
            isBattleShipSunken = true;
            console.log('You won! The enemy ship has sunken.');
            return btlShpArr;
        }
        return btlShpArr;
    }
    let defend = (pirateShpArr, strIdx, endIdx, dmg) => {
        let pirateShpArrLength = pirateShpArr.length;
        if (strIdx < 0
            || strIdx >= pirateShpArrLength
            || endIdx < 0
            || endIdx >= pirateShpArrLength) {
            return pirateShpArr;
        } else {
            for (let i = strIdx; i <= endIdx; i++){
                pirateShpArr[i] -= dmg;                
                if (pirateShpArr[i] <= 0) {
                    isPirateShipSunken = true;
                    console.log('You lost! The pirate ship has sunken.');
                    return pirateShpArr;
                }
            }
        }
        return pirateShpArr;
    }
    let repair = (pirateShpArr, idx, hp, maxHp) =>{
        let pirateShpArrLength = pirateShpArr.length;
        if (idx < 0 || idx >= pirateShpArrLength) {
            return pirateShpArr;
        } else {
            if (pirateShpArr[idx] + hp > maxHp){
                hp = maxHp - pirateShpArr[idx];
            }
            pirateShpArr[idx] += hp;
        }
        return pirateShpArr;
    }
    let status = (pirateShpArr, maxHp) =>{
        let sectionsForRepair = pirateShpArr.filter(el => el < maxHp * 0.2);
        let sectionsCount = sectionsForRepair.length;
        console.log(`${sectionsCount} sections need repair.`)
    }
    let retire = (pirateShpArr, btlShpArr) =>{
        let sumPirate = pirateShpArr.reduce((sum, current) => sum += current, 0);
        let sumBattle = btlShpArr.reduce((sum, current) => sum += current, 0);
        console.log(`Pirate ship status: ${sumPirate}\nWarship status: ${sumBattle}`)
    }

    for (let i = 0; i < inputArrayLength; i++) {
        let currentLineArray = inputArray[i].split(' ');
        let command = currentLineArray[0];
        let index;
        let startIndex;
        let endIndex;
        let damage;
        let health;
        // let currentLineArrayLength = currentLineArray.length;
        if (isPirateShipSunken || isBattleShipSunken){
            return;
        }
        if (currentLineArray.includes('Fire')) {
            [, index, damage] = [...currentLineArray];
            index = Number(index);
            damage = Number(damage);
        } else if (currentLineArray.includes('Defend')) {
            [, startIndex, endIndex, damage] = [...currentLineArray];
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            damage = Number(damage);
        } else if (currentLineArray.includes('Repair')) {
            [, index, health] = [...currentLineArray];
            index = Number(index);
            health = Number(health);
        }

        switch (command) {
            case 'Fire': battleShipArray = fire(battleShipArray, index, damage); break;
            case 'Defend': pirateShipArray = defend(pirateShipArray, startIndex, endIndex, damage); break;
            case 'Repair': pirateShipArray = repair(pirateShipArray, index, health, maxHealth); break;
            case 'Status': status(pirateShipArray, maxHealth); break;
            case 'Retire': retire(pirateShipArray, battleShipArray); break;
        }        
    }
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
console.log('----------------------------------')
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])