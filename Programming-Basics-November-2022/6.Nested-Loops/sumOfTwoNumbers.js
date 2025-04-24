function sumOfTwoNumbers(input){

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let sum = 0;
    let combination = 0;
    let isFound = false;

    for(let i = startNum; i <= endNum; i++){
        for(let k = startNum; k <= endNum; k++){
            sum = i + k;
            combination++;
            if(sum === magicNum){
                isFound = true;
                console.log(`Combination N:${combination} (${i} + ${k} = ${magicNum})`)
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${combination} combinations - neither equals ${magicNum}`)
    }
}

sumOfTwoNumbers (["88", 
"888", 
"2000"])







