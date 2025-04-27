function spiceMustFlow(startYield) {

    let notProfitable = false;
    let daysCounter = 0;
    let spiceStored = 0;
    
    if (startYield >= 100){
        daysCounter = 1;
        spiceStored = startYield - 26;
        startYield -= 10;
    } 
    if (startYield < 100){
        notProfitable = true;
    }

    while (startYield >= 100) {

        daysCounter++;
        spiceStored += startYield;
        if (spiceStored < 26) {
            spiceStored -= spiceStored;
        }
        spiceStored -= 26;
        startYield -= 10;
        if (startYield < 100) {
            notProfitable = true;
            break;
        }
    }
    if (notProfitable) {
        (spiceStored < 26)
            ? spiceStored -= spiceStored
            : spiceStored -= 26;
    }
    console.log(daysCounter)
    console.log(spiceStored)
}

spiceMustFlow(450)