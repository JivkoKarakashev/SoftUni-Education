function softUniReception(inputArray){

    let hoursCount = 0;
    inputArray = inputArray.map(Number);
    // console.log(inputArray)
    let students = inputArray.pop();    
    let totalEficiency = inputArray.reduce((sum, current) => sum += current, 0);

    while (students !== 0){
        hoursCount++;
        if (hoursCount % 4 === 0){
            continue;
        }        
        students -= Math.min(students, totalEficiency);
    }
    console.log(`Time needed: ${hoursCount}h.`)
}

softUniReception(['5','6','4','20'])
console.log('----------------')
softUniReception(['1','2','3','45'])
console.log('----------------')
softUniReception(['3','2','5','40'])