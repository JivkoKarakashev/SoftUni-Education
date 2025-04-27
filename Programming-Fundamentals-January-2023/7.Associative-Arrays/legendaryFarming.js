function legendaryFarming(input){
    
    let legendaryCrafted = false;
    const legendaryCraft = (keyMatObj, legendItmObj, mat, matQty) => {
        keyMatObj[mat] += matQty;
        if (keyMatObj[mat] >= 250){
            legendaryCrafted = true;
            keyMatObj[mat] -= 250;
            console.log(`${legendItmObj[mat]} obtained!`);
        }
        return keyMatObj;
    }
    const junkFarm = (junkMatObj, mat, matQty) => {
        if (!junkMatObj.hasOwnProperty(mat)){
            junkMatObj[mat] = 0;
        }
        junkMatObj[mat] += matQty;
        return junkMatObj;
    }
    const sortKeyMatsFunction = (matsArr) => {
        matsArr.sort((matA, matB) => {
        if (matA[1] === matB[1]){
            return matA[0].localeCompare(matB[0]);
        } else {
            return matB[1] - matA[1];
        }});
    }
    const sortJunkMatsFunction = (matsArr) => {
        matsArr.sort((matA, matB) => { return matA[0].localeCompare(matB[0])});        
    }

    const legendaryItemObj = {
        ['shards'] : 'Shadowmourne',
        ['fragments'] : 'Valanyr',
        ['motes'] : 'Dragonwrath',
    };
    const keyMaterialsObj = {
        ['shards'] : 0,
        ['fragments'] : 0,
        ['motes'] : 0,
    };
    const junkMaterialsObj = {};

    let inputArray = input.split(' ');
    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i += 2) {
        if (legendaryCrafted){            
            break;
        }
        let currMaterialQuantity = Number(inputArray[i]);
        let currMaterialLowCase = inputArray[i + 1].toLowerCase();
        switch(currMaterialLowCase){
            case 'shards':
            case 'fragments':
            case 'motes': legendaryCraft(keyMaterialsObj, legendaryItemObj,currMaterialLowCase, currMaterialQuantity); break;
            default: junkFarm(junkMaterialsObj, currMaterialLowCase, currMaterialQuantity); break;
        }
    }
    if (legendaryCrafted){
        let keyMaterialsArr = Object.entries(keyMaterialsObj);
        sortKeyMatsFunction(keyMaterialsArr);
        let junkMaterialsArr = Object.entries(junkMaterialsObj);
        sortJunkMatsFunction(junkMaterialsArr);
        for (let currMatLine of keyMaterialsArr) {
            console.log(`${currMatLine[0]}: ${currMatLine[1]}`);
        }
        for (let currMatLine of junkMaterialsArr) {
            console.log(`${currMatLine[0]}: ${currMatLine[1]}`);
        }
    }
    // console.log(keyMaterialsObj);    
    // console.log(junkMaterialsObj);    
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
console.log('-----------------');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
console.log('-----------------');
legendaryFarming('249 ShArDs 249 fragments 251 motes')