function storage(inputArray) {

    // const storageListObj = {};

    // inputArray.forEach(el => {
    //     let [item, quantity] = el.split(' ');
    //     quantity = Number(quantity);
    //     if (storageListObj.hasOwnProperty(item)){
    //         quantity += Number(storageListObj[item]);
    //     }
    //     storageListObj[item] = quantity;
    // });

    // for (const key in storageListObj) {
    //     console.log(`${key} -> ${storageListObj[key]}`)
    // }

    /////////////////////
    //solve using Map()//
    /////////////////////

    let storageListMap = new Map();

    inputArray.forEach(el => {
        let [item, quantity] = el.split(' ');
        quantity = Number(quantity);
        if (storageListMap.has(item)){
            quantity += storageListMap.get(item);
        }
        storageListMap.set(item, quantity);
    });
    // console.log(storageListMap);

    for (const entries of storageListMap.entries()) {
        console.log(`${entries[0]} -> ${entries[1]}`)
    }
}



storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])