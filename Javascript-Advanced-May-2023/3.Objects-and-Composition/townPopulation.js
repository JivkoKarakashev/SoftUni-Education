function townPopulation(inputArray) {

    const townpopulatinListObj = {};

    for (const currLine of inputArray) {

        let [townName, townPopulation] = currLine.split(' <-> ');
        townPopulation = Number(townPopulation);

        if (!townpopulatinListObj.hasOwnProperty(townName)) {
            townpopulatinListObj[townName] = 0;
        }
        townpopulatinListObj[townName] += townPopulation;
    }
    
    for (let currTownDataArray of Object.entries(townpopulatinListObj)) {
        console.log(currTownDataArray.join(' : '));
    }
}

townPopulation(
    [
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ])
console.log('----------------------');
townPopulation(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ])