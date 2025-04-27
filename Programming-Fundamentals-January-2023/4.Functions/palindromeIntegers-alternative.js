function palindromeIntegers(inputArray) {

    let inputArrayLength = inputArray.length;

    for (let i = 0; i < inputArrayLength; i++) {

        let currNumAsString = String(inputArray[i]);
        let currNumReverseString = currNumAsString.split('').reverse('').join('');
        // let currNumReverseString = currNumReverseArray.join('');

        (currNumAsString === currNumReverseString)
            ? console.log('true')
            : console.log('false')
    }
}

palindromeIntegers([123,323,421,121])
// palindromeIntegers([32, 2, 232, 1010])