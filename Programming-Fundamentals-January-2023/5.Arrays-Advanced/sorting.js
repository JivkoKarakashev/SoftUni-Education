function sorting(inputArray){

    let sortedArray = [];
    inputArray.sort((a, b) => b - a);
    // console.log(inputArray)
    let inputArrayLength = inputArray.length;
    let iterations = 0;
    let isLastElement = false;

    if (inputArrayLength % 2 === 0){
        iterations = inputArrayLength / 2;
    } else {
        isLastElement = true;
        iterations = Math.ceil(inputArrayLength / 2);
    }
    for (let i = 0; i < iterations; i++){
        if ((i + 1) === iterations && isLastElement){
            let last = inputArray.pop();
            sortedArray.push(last);
            break;
        } else {
            let biggest = inputArray.shift();
            let smallest = inputArray.pop();
            sortedArray.push(biggest, smallest);
        }
        // console.log(inputArray)
        // console.log(sortedArray)
    }
    console.log(sortedArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
console.log('---------------------------')
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])