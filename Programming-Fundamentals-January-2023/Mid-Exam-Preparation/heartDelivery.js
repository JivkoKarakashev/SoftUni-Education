function heartDelivery(inputArray){

    let housesArray = inputArray
    .shift()
    .split('@')
    .map(el => Number(el));
    let valentineHousesArray = [];
    let valentineHousesArrayLength = valentineHousesArray.length;

    let housesArrayLength = housesArray.length;
    let cupidPosition = 0;
    let index = 0;
    let command = inputArray[index];

    while(command !== 'Love!'){
        let commandArray = command.split(' ');
        let jumpLength = Number(commandArray[1]);
        let currentHouseValue;
        if (cupidPosition + jumpLength >= housesArrayLength){
            cupidPosition = 0;            
        } else {
            cupidPosition += jumpLength;
        }
        currentHouseValue = housesArray[cupidPosition];
        if (currentHouseValue === 0){
            console.log(`Place ${cupidPosition} already had Valentine's day.`)
        } else {
            currentHouseValue -= 2;
            housesArray[cupidPosition] = currentHouseValue;
            if (currentHouseValue === 0){
                console.log(`Place ${cupidPosition} has Valentine's day.`)
            }
        }
        
        index++
        command = inputArray[index];
    }
    valentineHousesArray = housesArray.filter(elValue => elValue === 0);
    valentineHousesArrayLength = valentineHousesArray.length;
    let notValentineHouses = housesArrayLength - valentineHousesArrayLength;
    console.log(`Cupid's last position was ${cupidPosition}.`)
    if (valentineHousesArrayLength === housesArrayLength){
        console.log('Mission was successful.')
    } else {
        console.log(`Cupid has failed ${notValentineHouses} places.`)
    }
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
console.log('-----------------------------')
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
