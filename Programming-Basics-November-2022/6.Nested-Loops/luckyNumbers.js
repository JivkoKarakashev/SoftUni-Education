function luckyNumbers(input) {

    let num = Number(input[0]);
    let luckyNumstoPrint = "";

    for (let i = 1111; i <= 9999; i++) {
        let luckyNum = "";
        let s = String(i);
        let firstDigit = s[0];
        let secondDigit = s[1];
        let thirdDigit = s[2];
        let fourthDigit = s[3];
        if (firstDigit !== "0" && secondDigit !== "0" && thirdDigit !== "0" && fourthDigit !== "0") {
            let sumFirstTwoDigits = Number(firstDigit) + Number(secondDigit);
            let sumSecondTwoDigits = Number(thirdDigit) + Number(fourthDigit);

            if (sumFirstTwoDigits === sumSecondTwoDigits && num % sumFirstTwoDigits === 0) {
                luckyNum = s;
                luckyNumstoPrint += `${s} `
            }
        }
    }
    console.log(luckyNumstoPrint)
}

luckyNumbers(["24"])
