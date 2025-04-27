function pirates(inpuArray) {

    const prosper = (cityTgtCollObj, city, gold) => {
        gold = Number(gold);
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
            return;
        }
        cityTgtCollObj[city][2] += gold;
        console.log(`${gold} gold added to the city treasury. ${city} now has ${cityTgtCollObj[city][2]} gold.`);
    }
    const plunder = (cityTgtCollObj, city, population, gold) => {
        population = Number(population);
        gold = Number(gold);
        cityTargetCollectionObj[city][1] -= population;
        cityTargetCollectionObj[city][2] -= gold;
        console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
        if (cityTgtCollObj[city][1] === 0 ||cityTgtCollObj[city][2] === 0) {
            delete cityTargetCollectionObj[city];
            console.log(`${city} has been wiped off the map!`);
        }
    }
    
    let currLine = inpuArray.shift();
    const cityTargetCollectionObj = {};

    while (currLine !== 'Sail') {
        let [city, population, gold] = currLine.split('||');
        population = Number(population);
        gold = Number(gold);
        if (!cityTargetCollectionObj.hasOwnProperty(city)) {
            cityTargetCollectionObj[city] = [];
            cityTargetCollectionObj[city].push(city, population, gold);
        } else {
            cityTargetCollectionObj[city][1] += population;
            cityTargetCollectionObj[city][2] += gold;
        }
        currLine = inpuArray.shift();
    }
    // console.log(cityTargetCollectionObj);
    currLine = inpuArray.shift();

    while (currLine !== 'End') {

        let command ,city, population, gold;
        if (currLine.includes('Prosper')) {            
            [command ,city, gold] = currLine.split('=>');
        } else if (currLine.includes('Plunder')) {
            [command, city, population, gold] = currLine.split('=>');
        }

        switch (command){
            case 'Prosper': prosper(cityTargetCollectionObj, city, gold); break;
            case 'Plunder': plunder(cityTargetCollectionObj, city, population, gold); break;
        }        
        currLine = inpuArray.shift();
    }
    // console.log(cityTargetCollectionObj);
    const cityTargetCollectionArr = Object.entries(cityTargetCollectionObj);
    // console.log(cityTargetCollectionArr);
    const wealthySettlements = cityTargetCollectionArr.length;
    if (wealthySettlements !== 0) {
        console.log(`Ahoy, Captain! There are ${wealthySettlements} wealthy settlements to go to:`);
        for (let currTown of cityTargetCollectionArr) {
            console.log(`${currTown[1][0]} -> Population: ${currTown[1][1]} citizens, Gold: ${currTown[1][2]} kg`);
        }        
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates(
[
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
])
console.log('-------------------------------');
pirates(
[
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
])
