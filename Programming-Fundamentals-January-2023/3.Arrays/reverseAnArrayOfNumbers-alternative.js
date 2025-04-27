function reverseAnArrayOfNumbers(n, inputArray) {

    let reverseArray = [];
    let currentElemet = '';
    let output = '';

    for (let j = n - 1; j >= 0; j--) {
        if (j !== 0) {
            currentElemet = (`${inputArray[j]} `);
        } else {
            currentElemet = (`${inputArray[j]}`);
        }
        // console.log(currentElemet);
        reverseArray[n - 1 - j] = currentElemet;
    }
    // console.log(reverseArray);
    for (let i = 0; i < n; i++) {
        output += reverseArray[i];
    }
    console.log(output);
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])