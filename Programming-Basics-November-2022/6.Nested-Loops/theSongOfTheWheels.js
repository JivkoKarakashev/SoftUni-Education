function theSongOfTheWheels(input) {

    let checkNum = Number(input[0]);
    let passtoPrint = "";
    let passCounter = 0;
    let songWheelPass = "";
    let isFound = false;
    let passVerified = false;

    for (let firstDigit = 1; firstDigit <= 9; firstDigit++) {
        for (let secondDigit = 1; secondDigit <= 9; secondDigit++) {
            for (let thirdDigit = 1; thirdDigit <= 9; thirdDigit++) {
                for (let fourthDigit = 1; fourthDigit <= 9; fourthDigit++) {
                    if (firstDigit < secondDigit && thirdDigit > fourthDigit && firstDigit * secondDigit + thirdDigit * fourthDigit === checkNum) {
                        passVerified = true;
                        passCounter++;
                        passtoPrint += (`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit} `)
                        if (passCounter === 4) {
                            isFound = true;
                            songWheelPass = (`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`);
                        }
                    }
                }
            }
        }
    }
    if (passVerified && isFound) {
        console.log(passtoPrint)
        console.log(`Password: ${songWheelPass}`)
    }
    else if (passVerified && !isFound) {
        console.log(passtoPrint)
        console.log(`No!`)
    }
    else {
        console.log(`No!`)
    }
}

theSongOfTheWheels(["55"])