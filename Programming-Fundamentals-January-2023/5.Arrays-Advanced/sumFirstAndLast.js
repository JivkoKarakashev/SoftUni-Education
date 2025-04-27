function sumFirstAndLast(numbersArray) {

    let firstElement = numbersArray.map(Number).shift();
    let lastElement = numbersArray.map(Number).pop();
    let sum = firstElement + lastElement;

    console.log(sum)
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])