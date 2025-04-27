function plantDiscovery(inputArray) {

    const rate = (plntsLstMap, plant, rating) => {
        if (!plntsLstMap.has(plant)) {
            console.log('error');
            return;
        }
        rating = Number(rating);
        plntsLstMap.get(plant).push(rating);
    }
    const update = (plntsLstMap, plant, newRarity) => {
        if (!plntsLstMap.has(plant)) {
            console.log('error');
            return;
        }
        newRarity = Number(newRarity);
        plntsLstMap.get(plant).splice(0, 1, newRarity);
    }
    const reset = (plntsLstMap, plant) => {
        if (!plntsLstMap.has(plant)) {
            console.log('error');
            return;
        }
        let plantRatingsCount = plntsLstMap.get(plant).length;
        plntsLstMap.get(plant).splice(1, plantRatingsCount - 1);
    }
    
    const plantsCount = Number(inputArray.shift());
    const plantsListMap = new Map;
    
    for (let i = 0; i < plantsCount; i++) {
        let currPlantLine = inputArray.shift();
        let [plant, rarity] = currPlantLine.split('<->');
        rarity = Number(rarity);
        if (!plantsListMap.has(plant)) {
            plantsListMap.set(plant, []);
        }
        plantsListMap.get(plant).splice(0, 1, rarity);
    }
    // console.log(plantsListMap);

    let currLine = inputArray.shift();
    while (currLine !== 'Exhibition') {
        let command, plantAndRating, plantAndNewRarity, plant, rating, newRarity;
        if (currLine.includes('Rate')) {
            [command, plantAndRating] = currLine.split(': ');
            [plant, rating] = plantAndRating.split(' - ');
        } else if(currLine.includes('Update')) {
            [command, plantAndNewRarity] = currLine.split(': ');
            [plant, newRarity] = plantAndNewRarity.split(' - ');
        } else if(currLine.includes('Reset')) {
            [command, plant] = currLine.split(': ');
        }

        switch (command) {
            case 'Rate': rate(plantsListMap, plant, rating); break;
            case 'Update': update(plantsListMap, plant, newRarity); break;
            case 'Reset': reset(plantsListMap, plant); break;
        }
        currLine = inputArray.shift();
    }
    // console.log(plantsListMap);
    const plantsListArr = plantsListMap.entries();
    console.log(plantsListArr);
    console.log('Plants for the exhibition:');
    for (let plant of plantsListArr) {
        let plantsRatingsCount = plant[1].length - 1;
        let sumRatings = 0;
        let avgRating = 0;
        if (plantsRatingsCount !== 0) {
            for (let i = 1; i <= plantsRatingsCount; i++) {
                 sumRatings += plant[1][i];            
            }
            avgRating = sumRatings / plantsRatingsCount;            
        }
        console.log(`- ${plant[0]}; Rarity: ${plant[1][0]}; Rating: ${avgRating.toFixed(2)}`);
    }
}

plantDiscovery(
[
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
])
console.log('---------------------------------------');
plantDiscovery(
[
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
])
console.log('---------------------------------------');
plantDiscovery(
[
    "3",
    "Candelabra<->10",
    "Oahu<->10",
    "Oahu<->0",
    "Rate: Cndelabra - 6",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
])
