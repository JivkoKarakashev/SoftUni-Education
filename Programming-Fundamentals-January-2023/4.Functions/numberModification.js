function numberModification(number){

    let sum = 0;
    let average = 0;

    let arrayOfDigits = (num) => num.toString().split('');
    
    let sumOfDigits = (arr) => {
        sum = 0;
        for (currDigit of arr){
            sum += Number(currDigit);
        }
        return sum;
    }
    
    let avgSumOfDigits = (sum, arrLength) =>{
        average = 0;
        average = sum / arrLength;
        return average;
    }
    
    let arrModify = (arr, num) => arr.push(num);
    
    arrayOfDigits = arrayOfDigits(number);    
    let digitsArray = [...arrayOfDigits]
    sum = sumOfDigits(arrayOfDigits);
    average = avgSumOfDigits(sum, arrayOfDigits.length);
    // console.log(average)
    
    while (average <= 5){

        arrModify(digitsArray, '9');
        sum = sumOfDigits(digitsArray);
        average = avgSumOfDigits(sum, digitsArray.length);
        // console.log(average);
    }
    console.log(digitsArray.join(''));
}

numberModification(101)
numberModification(5835)