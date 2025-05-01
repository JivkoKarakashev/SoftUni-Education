function storeCatalogue(inputArray) {

    let storeCatalogueObject = {};

    const sortFunc = (obj) => {
        const objArr = Object.entries(obj);
        const sortPass1 = objArr.sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]));

        for (const prodGroup of sortPass1) {
            prodGroup[1] =  prodGroup[1].sort((prodA, prodB) => prodA[0].localeCompare(prodB[0]));
        }

        return sortPass1
    }

    for (const prodLine of inputArray) {
        // const currProdArr = [];
        let [product, price] = prodLine.split(' : ');
        price = Number(price);
        if (!storeCatalogueObject.hasOwnProperty([product[0]])) {
            storeCatalogueObject[product[0]] = [];            
        }
        const currProdArr = [product, price];
        storeCatalogueObject[product[0]].push(JSON.parse(JSON.stringify(currProdArr)));
    }
    // console.log(storeCatalogueObject);
    const sortedStoreCatalogue = sortFunc(storeCatalogueObject);
    // console.log(sortedStoreCatalogue);
    for (const prodGroup of sortedStoreCatalogue) {
        console.log(prodGroup[0]);
        for (const prod of prodGroup[1]) {
            console.log(`  ${prod[0]}: ${prod[1]}`);
        }
    }
}

storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ])
console.log('--------------------');
storeCatalogue(
    [
        'Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ])