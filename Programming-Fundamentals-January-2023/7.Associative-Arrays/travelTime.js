function travelTime(inputArray) {

    const travelListObj = {};

    for (let currLine of inputArray) {
        let [country, ...townCostPairArr] = currLine.split(' > ');
        if (!travelListObj.hasOwnProperty(country)) {
            travelListObj[country] = [];
            travelListObj[country].push(townCostPairArr);
            // console.log(travelListObj);
        }
        if (travelListObj[country][0][0] === townCostPairArr[0]) {
            if (Number(townCostPairArr[1]) < travelListObj[country][0][1]) {
                travelListObj[country][0][1] = Number(townCostPairArr[1]);
            }
        } else {
            travelListObj[country].push(townCostPairArr);
        }
    }
    // console.log(travelListObj);
    for (let country in travelListObj) {
        if (travelListObj[country].length > 1){
            travelListObj[country].sort((costA, costB) => Number(costA[1]) - Number(costB[1]));
        }
    }
    // console.log(travelListObj);
    const sortedTravelListObj = {};
    const travelListArr = Object.entries(travelListObj);
    // console.log(travelListArr);
    for (let ctryLine of travelListArr) {
        let [country, townCostPair] = [ctryLine[0], ctryLine[1]];
        for (let townCost of townCostPair) {
            let [town, cost] = [townCost[0], townCost[1]]
            // console.log(country, town, cost);
            if (!sortedTravelListObj.hasOwnProperty(country)){
                sortedTravelListObj[country] = [];
            }
            sortedTravelListObj[country].push(town, cost);
        }
    }
    // console.log(sortedTravelListObj);
    const sortedTravelListArr = Object.entries(sortedTravelListObj);
    sortedTravelListArr.sort((ctrA, ctrB) => ctrA[0].localeCompare(ctrB[0]));
    // console.log(sortedTravelListArr);
    const outputTravelListObj = {};
    for (let ctryLine of sortedTravelListArr) {
        let [country, townCostPair] = [ctryLine[0], ctryLine[1]];
        let [town, cost] = [townCostPair[0], townCostPair[1]];
        if (!outputTravelListObj.hasOwnProperty(country)){
            let countryTownCostArr = [];
            countryTownCostArr.push(country, '->',town, '->',cost);
            outputTravelListObj[country] = [];
            outputTravelListObj[country].push(countryTownCostArr);
        }
        let townCostPairLength = townCostPair.length;
        if (townCostPairLength > 2){
            for (let i = 2; i < townCostPairLength; i += 2) {
                let town = townCostPair[i];
                let cost = townCostPair[i + 1];
                // console.log(country, town, cost);
                let townCostPairArr = [];
                townCostPairArr.push(town, '->', cost);
                outputTravelListObj[country].push(townCostPairArr);
            }
        }
    }
    // console.log(outputTravelListObj);
    const outputTravelListArr = Object.entries(outputTravelListObj);
    for (const printLineArr of outputTravelListArr) {
        
        if (printLineArr[1].length > 1){
            let lineArrConcat = '';
            for (let currLine of printLineArr[1]) {
                lineArrConcat += (`${currLine.join(' ')} `);
            }
            console.log(lineArrConcat)
        } else {
            console.log(printLineArr[1][0].join(' '));
        }
    }    
}

travelTime(
[
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])
console.log('---------------------------');
travelTime(
[
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])