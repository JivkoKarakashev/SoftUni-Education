function inventory(inputArray){

    let inventoryArray = inputArray
    .shift()
    .split(', ');

    let collect = (arr, itm) =>{
        if (arr.includes(itm)){
            return arr;
        } else {
            arr.push(itm);
        }
        return arr;
    }
    let drop = (arr, itm) =>{
        if (arr.includes(itm)){
            let itmIdx = arr.indexOf(itm);
            arr.splice(itmIdx, 1);
        }
        return arr;
    }
    let combineItems = (arr, itm, newItm) =>{
        if (arr.includes(itm)){
            let itmIdx = arr.indexOf(itm);
            let arrLength = arr.length;
            if (itmIdx === arrLength - 1){
                arr.push(newItm);
            } else {
                arr.splice(itmIdx + 1, 0, newItm);
            }
        }
        return arr;
    }
    let renew = (arr, itm) =>{
        if (arr.includes(itm)){
            let itmIdx = arr.indexOf(itm);
            let renewedItm = arr.splice(itmIdx, 1);
            arr.push(renewedItm);
        }
        return arr;
    }

    let index = 0;
    // if (inputArray[index].includes('Craft!')){
    //     console.log(`${inventoryArray.join(', ')}`);
    //     return;
    // }
    
    let currentLineArray = inputArray[index].split(' - ');
    
    while (currentLineArray !== 'Craft!'){
        let command;
        let item;
        let items;
        let newItem;
        if (currentLineArray.includes('Combine Items')){
            [command, items] = [...currentLineArray];
            let itemsArray = items.split(':');
            [item, newItem] = [...itemsArray];
        } else {
            [command, item] = [...currentLineArray];
        }

        switch(command){
            case 'Collect': collect(inventoryArray, item); break;
            case 'Drop': drop(inventoryArray, item); break;
            case 'Combine Items': combineItems(inventoryArray, item, newItem); break;
            case 'Renew': renew(inventoryArray, item); break;
            default: ; break;
        }

        index++;
        if (inputArray[index].includes('Craft!')){
            break;
        }
        currentLineArray = inputArray[index].split(' - ');
    }
    console.log(inventoryArray.join(', '))
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])
console.log('-----------------')
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])