function gladiatorInventory(inputArray) {

    let inventory = inputArray[0].split(' ');
    inputArray.shift();

    let buy = (arr, equip) => {
        if (!arr.includes(equip)) {           
            arr.push(equip);
        }
        return arr;
    }
    let trash = (arr, equip) => {
        if (arr.includes(equip)) {
            let idx = arr.indexOf(equip);
            arr.splice(idx, 1);
        }
        return arr;
    }
    let repair = (arr, equip) =>{
        if (arr.includes(equip)) {
            let idx = arr.indexOf(equip);
            let slice = arr.splice(idx, 1);
            arr.push(slice);
        }
        return arr;
    }
    let upgrade = (arr, equip, upg) =>{
        if (arr.includes(equip)) {
            let idx = arr.indexOf(equip)           ;
            arr.splice(idx + 1, 0, `${equip}:${upg}`);           
        }
        return arr;
    }

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++){
        let currLineArr = inputArray[i].split(' ');        
        let command = currLineArr [0];
        let equipment;
        currLineArr.shift();
        currLineArr = currLineArr[0].split('-');
        // console.log(currLineArr)
        if (command === 'Upgrade'){            
            [equipment, upg] = [...currLineArr];
            // console.log(command)
            // console.log(equipment)
            // console.log(upg)
        } else {
            [equipment] = [...currLineArr];
            // console.log(command)
            // console.log(equipment)            
        }
        switch (command){
            case 'Buy': inventory = buy(inventory, equipment); break;
            case 'Trash': inventory = trash(inventory, equipment); break;
            case 'Repair': inventory = repair(inventory, equipment); break;
            case 'Upgrade': inventory = upgrade(inventory, equipment, upg); break;
            default: ; break;
        }
    }
    console.log(inventory.join(' '))
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])
    console.log('------------------')
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])