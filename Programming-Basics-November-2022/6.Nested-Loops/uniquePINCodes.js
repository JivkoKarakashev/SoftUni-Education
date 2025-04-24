function uniquePINCodes(input) {

    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let numC = Number(input[2]);
    
    for (let i = 1; i <= numA; i++) {
        let pinCode = "";

        if (i % 2 === 0) {
            // console.log(i)
            // pinCode += `${i} `;
            for (let j = 2; j <= numB; j++) {
                
                let isPrime = true;
                if (j >= 2) {
                    isPrime
                }
                for (let k = 2; k <= j - 1; k++) {
                    
                    if (j > k && j % k === 0) {
                        isPrime = false;
                    }                
                }
                if (isPrime) {
                    // console.log(j)
                    // pinCode += `${j} `;
                    for (let l = 1; l <= numC; l++){
                        
                        if (l % 2 === 0) {
                            // pinCode += `${l}`;
                            // console.log(l)
                            pinCode = `${i} ${j} ${l}`                                
                            console.log(pinCode)                               
                        }
                    }
                }
            }
        }
    }
}

uniquePINCodes (["8",
"2",
"8"])

