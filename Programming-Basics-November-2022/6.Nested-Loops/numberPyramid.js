function numberPyramid(input) {

    let isBigger = false;
    let n = Number(input[0]);
    let currNum = 1;

    for (let row = 1; row <= n; row++) {  // row = 1        
        let printCurrLine = "";
        for (let columns = 1; columns <= row; columns++) {  // columns = 1
            if (currNum > n) {
                isBigger = true;
                console.log(printCurrLine)                
                break;
            }
            printCurrLine += `${currNum} `;                 // currNum = 1
            currNum++;                                      // currNum = 2
        }
        if(isBigger){
            break;
        }
        console.log(printCurrLine)
    }
}

numberPyramid (["15"])