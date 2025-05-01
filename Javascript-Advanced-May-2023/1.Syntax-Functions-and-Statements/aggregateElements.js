function aggregateElements(inputArray) {

    const sum = (arr) => arr.reduce((acc, currEl) => acc += currEl);
    const sumInvert = (arr) =>{
        const arrInvert = arr.map(el => 1 / el);
        return sum(arrInvert);
    }
    const concat = (arr) => arr.join('');

    console.log(sum(inputArray));
    console.log(sumInvert(inputArray));
    console.log(concat(inputArray));
}

aggregateElements([1, 2, 3])
console.log('-------');
aggregateElements([2, 4, 8, 16])