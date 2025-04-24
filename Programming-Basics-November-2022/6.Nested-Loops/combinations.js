function combinations(input){

    let maxNum = Number(input[0]);    
    let combinations = 0;
    
    for(let x = 0; x <= maxNum; x++){
        for(let y = 0; y <= maxNum; y++){
            for(let z = 0; z <= maxNum; z++){
                let sum = x + y + z;
                if(sum === maxNum){
                    combinations++;                    
                }
            }
        }
    }
    console.log(combinations)
}

combinations (["5"])