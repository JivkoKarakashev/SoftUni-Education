function lowestPricesInCities(inputArray) {

    const resultMap = new Map;

    for (const currLine of inputArray) {
        let [town, product, price] = currLine.split(' | ');
        price = Number(price);
        if (!resultMap.has(product)) {
            resultMap.set(product, [price, town]);
        } else if (resultMap.get(product)[0] > price) {
            resultMap.set(product, [price, town]);
        }
        // console.log(resultMap.get(product));
    }
    for (const [prod, priceTownArr] of resultMap) {
        console.log(`${prod} -> ${priceTownArr[0]} (${priceTownArr[1]})`);
    }
}

lowestPricesInCities(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ])
console.log('--------------------------------');
lowestPricesInCities(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 2',
        'Sofia | Orange | 1',
        'Sofia | Peach | 1',
        'New York | Sample Product | 999',
        'New York | Burger | 10'
    ])