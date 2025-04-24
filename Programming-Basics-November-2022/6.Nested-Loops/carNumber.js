function carNumber(input) {

    let startNum = Number(input[0]);
    let startNumtoStr = String(startNum);
    let endNum = Number(input[1]);
    let endNumtoStr = String(endNum);
    let startFourDigitNumtoStr = startNumtoStr + startNumtoStr + startNumtoStr + startNumtoStr;
    let startFourDigitNum = Number(startFourDigitNumtoStr);
    let endFourDigitNumtoStr = endNumtoStr + endNumtoStr + endNumtoStr + endNumtoStr;
    let endFourDigitNum = Number(endFourDigitNumtoStr);
    let specialCarNumstoPrint = "";

    for (let i = startFourDigitNum; i <= endFourDigitNum; i++) {

        let currFourDigitNumtoStr = String(i);
        let isSpecial = true;
        for (let j = 0; j <= Number(currFourDigitNumtoStr.length - 1); j++) {
            let currDigit = Number(currFourDigitNumtoStr[j]);
            if (currDigit < startNum || currDigit > endNum) {
                isSpecial = false;
                break;
            }            
        }
        if (isSpecial) {
            if (currFourDigitNumtoStr[0] !== "0" && currFourDigitNumtoStr[1] !== "0" && currFourDigitNumtoStr[2] !== "0" && currFourDigitNumtoStr[3] !== "0") {
                if (Number(currFourDigitNumtoStr[0]) % 2 === 0 && Number(currFourDigitNumtoStr[3]) % 2 !== 0 || Number(currFourDigitNumtoStr[0]) % 2 !== 0 && Number(currFourDigitNumtoStr[3]) % 2 === 0) {
                    if (Number(currFourDigitNumtoStr[0]) > Number(currFourDigitNumtoStr[3])) {
                        if ((Number(currFourDigitNumtoStr[1]) + Number(currFourDigitNumtoStr[2])) % 2 === 0) {
                            specialCarNumstoPrint += `${currFourDigitNumtoStr} `
                        }
                    }
                }
            }
        }
    }
    console.log(specialCarNumstoPrint)
}

carNumber(["2", "3"])