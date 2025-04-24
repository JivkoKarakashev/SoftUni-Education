function equalSumsEvenOddPosition(input) {

    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let buff = "";
    
    for (let currNum = numA; currNum <= numB; currNum++) {
        let evenCharsSum = 0;
        let oddCharsSum = 0;
        for (let i = 0; i <= 5; i++) {
            let evenChar = "";
            let oddChar = "";
            let currNumtoChar = "" + currNum;
            let currChar = currNumtoChar[i];
            if (i % 2 === 0) {
                evenChar += currChar;
                evenCharsSum += Number(evenChar)
            }
            else {
                oddChar += currChar;
                oddCharsSum += Number(oddChar)
            }
        }
        if (evenCharsSum === oddCharsSum) {
            buff += `${currNum} `;
        }
        // console.log(evenCharsSum)
        // console.log(oddCharsSum)
        
        // console.log(currChar)            
        // console.log(currNum)
        // console.log(nextNum)
    }
    console.log(buff)    
}

equalSumsEvenOddPosition (["123456",
"124000"])












