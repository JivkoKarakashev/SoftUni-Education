function addAndSubtract(firstNum, secondNum, thirdNum){

    function sumOfTwo(firstNum, secondNum){
        return firstNum + secondNum;
    }

    let sum = sumOfTwo(firstNum, secondNum);

    function substractOfTwo(numA, numB){
        return numA - numB;
    }
    let substract = substractOfTwo(sum,thirdNum);
    // console.log(substract);
    return substract;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));