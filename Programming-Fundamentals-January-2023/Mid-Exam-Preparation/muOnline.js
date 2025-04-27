function muOnline(input){

    let health = 100;
    let roomsCount = 0;
    let bitcoins = 0;
    let isAlive = true;
    let inputStrToArr = input.split('|');
    let inputStrToArrLength = inputStrToArr.length;

    let potion = (hp, potionValue) =>{
        let hpToMax = 100 - hp;
        let hpHealed = Math.min(hpToMax, potionValue);
        
        hp += hpHealed;
        console.log(`You healed for ${hpHealed} hp.`);
        console.log(`Current health: ${hp} hp.`);
        return hp;
    }
    let chest = (btcns, chestValue) =>{
        btcns += chestValue;
        console.log(`You found ${chestValue} bitcoins.`)
        return btcns;
    }
    let defaultCase = (hp, cmnd, attackValue, room) =>{
        hp -= attackValue;
        if (hp <= 0){
            isAlive = false;
            console.log(`You died! Killed by ${cmnd}.`);
            console.log(`Best room: ${room}`);
        } else {
            console.log(`You slayed ${cmnd}.`);
        }
        return hp;
    } 
    
    for (let i = 0; i < inputStrToArrLength; i++){
        roomsCount++;
        let currentElement = inputStrToArr[i];
        let currElementToArr = currentElement.split(' ');
        let [command, value] = [...currElementToArr];
        value = Number(value);
        
        switch(command){
            case 'potion': health = potion(health, value); break;
            case 'chest': bitcoins = chest(bitcoins, value); break;
            default: health = defaultCase(health, command, value, roomsCount); break;
        }
        if (!isAlive){
            break;
        }
    }
    if (isAlive){
        console.log('You\'ve made it!')
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
console.log('------------------------')
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")