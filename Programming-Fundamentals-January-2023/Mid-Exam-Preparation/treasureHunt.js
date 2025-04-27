function treasureHunt(inputArray) {

    let chestStateArray = inputArray
        .shift()
        .split('|');
    let index = 0;
    let sumItemsLength = 0;
    let avgTreasureGain = 0;
    let currentLineArray = inputArray[index].split(' ');
    let command = currentLineArray[index];
    
    let loot = (chestStateArr,itemsArr) =>{
        let itemsArrLength = itemsArr.length;
        for (let i = 0; i < itemsArrLength; i++){
            let currItem = itemsArr[i];
            if(chestStateArr.includes(currItem)){
                continue;
            } else {
                chestStateArr.unshift(currItem);
            }
        }
        return chestStateArr;
    }
    let drop = (chestStateArr, idx) =>{
        let chestStateArrLength = chestStateArr.length;
        if (idx < 0 || idx >= chestStateArrLength){
            return chestStateArr;
        } else {
            let droppedItem = chestStateArr.splice(idx, 1);
            droppedItem = droppedItem.join('');
            chestStateArr.push(droppedItem);
        }
        return chestStateArr;
    }
    let steal = (chestStateArr, count) =>{
        let chestStateArrLength = chestStateArr.length;
        if (count > chestStateArrLength){
            console.log(chestStateArr.join(', '))
            chestStateArr = [];
            return chestStateArr;
        } else {
            let index = chestStateArrLength - count;
            let stolenItems = chestStateArr.splice(index);
            console.log(stolenItems.join(', '))
        }
        return chestStateArr;
    }

    while (command !== 'Yohoho!'){
        let itemsArray;
        let idx;
        let stealCount;
        if (currentLineArray.includes('Loot')){
            [, ...itemsArray] = [...currentLineArray];            
        } else if (currentLineArray.includes('Drop')){
            [, idx] = [...currentLineArray];
            idx = Number(idx);            
        } else if (currentLineArray.includes('Steal')){
            [, stealCount] = [...currentLineArray];
            stealCount = Number(stealCount);            
        }

        switch(command){
            case 'Loot': chestStateArray = loot(chestStateArray, itemsArray); break;
            case 'Drop': chestStateArray = drop(chestStateArray, idx); break;
            case 'Steal': chestStateArray = steal(chestStateArray, stealCount); break;
            default: ; break;
        }
        index++;
        currentLineArray = inputArray[index].split(' ');
        command = currentLineArray[0];
        // console.log(chestStateArray);
    }
    chestStateArrLength = chestStateArray.length;    
    if (chestStateArrLength === 0){
        console.log('Failed treasure hunt.')
    } else {        
        sumItemsLength = chestStateArray.reduce((sumLengths, currEl) => sumLengths += currEl.length, 0);
        avgTreasureGain = (sumItemsLength / (chestStateArrLength));        
        console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
console.log('--------------------------------------------')
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])