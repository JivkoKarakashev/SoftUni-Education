function townsToJSON(inputArray) {

    const townObjConstructor = (headArr,townDataArr) => {
        const resultTownObj = {};
        for (let i = 0; i < 3; i++) {
            resultTownObj[headArr[i]] = townDataArr[i];            
        }
        return resultTownObj;
    }

    const inputArrayLength = inputArray.length;
    const tableDataArr = [];
    let tableHeadingsArr = inputArray[0].split('|').filter(el => el);
    tableHeadingsArr = tableHeadingsArr.map(el => el.trim());        
    
    // console.log(tableHeadingsArr);
    for (let i = 1; i < inputArrayLength; i++) {
        let currRowTableStr = inputArray[i];
        let currRowTableArr = currRowTableStr.split('|').filter(el => el);
        currRowTableArr = currRowTableArr.map(el => el.trim());
        // console.log(currRowTableArr);        
        let [town, latit, longit] = currRowTableArr;
        latit = Number(Number(latit).toFixed(2));
        longit = Number(Number(longit).toFixed(2));
        currRowTableArr = Array(town, latit, longit);
        tableDataArr.push(townObjConstructor(tableHeadingsArr, currRowTableArr));
    }
    console.log(JSON.stringify(tableDataArr));
}

townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ])
console.log('--------------------------');
townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ])
console.log('--------------------------');
townsToJSON(
    [
        '|Town|Latitude|Longitude|',
        '|Burgas Burgas|30.50|20.40|'
    ])