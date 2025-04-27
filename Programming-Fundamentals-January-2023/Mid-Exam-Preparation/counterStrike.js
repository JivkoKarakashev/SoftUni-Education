function counterStrike(inputArray){

    let energy = inputArray
    .shift();
    energy = Number(energy);
    let wonBattles = 0;
    let isOutOfEnergy = false;
    let index = 0;
    let command = inputArray[index];

    while (command !== 'End of battle'){

        let distance = Number(command);
        if (energy < distance){
            isOutOfEnergy = true;
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`)
            break;
        } else {
            wonBattles++;
            energy -= distance;
            if (wonBattles % 3 == 0){
                energy += wonBattles;
            }
        }
        index++;
        command = inputArray[index];
    }
    if (!isOutOfEnergy){
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
    }
}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
console.log('-------------------------------------------------')
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])