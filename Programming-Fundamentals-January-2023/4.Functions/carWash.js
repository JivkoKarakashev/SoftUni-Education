function carWash(inputArray) {
    
    let cleanValue = 0;
    let inputArrayLength = inputArray.length;
    
    let soap = (value) => value += 10;   
    let water = (value) => value += (value * 0.2);
    let vacuum = (value) => value += (value * 0.25);
    let mud = (value) => value -= (value * 0.1);

    for (let i = 0; i < inputArrayLength; i++) {
        let currCommand = inputArray[i];

        if (currCommand.includes('soap')) {            
            cleanValue = soap(cleanValue);            
        } else if (currCommand.includes('water')) {            
            cleanValue = water(cleanValue);
        } else if (currCommand.includes('vacuum cleaner')) {
            cleanValue = vacuum(cleanValue);
        } else if (currCommand.includes('mud')) {            
            cleanValue = mud(cleanValue);
        }
    }
    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
// carWash([ "__",   "__soap", "  water  ", "mud", "mud", "water", "___mud", "vacuum cleaner","vac"])