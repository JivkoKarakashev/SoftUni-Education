function secretDoorLock(input) {

    let firstDigit = Number(input[0]);
    let secondDigit = Number(input[1]);
    let thirdDigit = Number(input[2]);    

    for (let fD = 1; fD <= firstDigit; fD++) {
        if (fD % 2 !== 0) {
            continue;
        }
        // console.log(fD)
        for (let sD = 2; sD <= secondDigit; sD++) {
            let isPrime = true;
            if (sD >= 2) {
                isPrime
            }
            for (let k = 2; k <= sD - 1; k++) {

                if (sD > k && sD % k === 0) {
                    isPrime = false;
                }
            }
            if (isPrime){
                // console.log(`${fD} ${sD}`)
                for (let tD = 1; tD <= thirdDigit; tD++){
                    if (tD % 2 !== 0) {
                        continue;
                    }
                    console.log(`${fD} ${sD} ${tD}`)
                }
            }
        }
    }
}

secretDoorLock
    (["8",
        "2",
        "8"])
