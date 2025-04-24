function specialNumbers(input){

    let num = Number(input[0]);
    let specialNumstoPrint = "";

    for (let i = 1111; i <= 9999; i++){
        let currNumtoStr = "" + i;
        let isSpecial = true;
        let index = 0;
        for (let j = 0; j <= 3; j++){
            let currDigit = Number(currNumtoStr[index]);    // i = 0
            if(num % currDigit !== 0){
                isSpecial = false;                
                break;                
            }
            index++;                                        // i = 1
            currDigit = Number(currNumtoStr[index]);        // i = 1
        }
        if (isSpecial){
            specialNumstoPrint += `${currNumtoStr} `;
        }
    }
    console.log(specialNumstoPrint)
}

specialNumbers (["16"])