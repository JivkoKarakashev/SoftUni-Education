function signCheck(numA, numB, numC) {

    let array = [];
    let arrLength = arrayOfNums(numA, numB, numC);
    let counter = negativesCounter(arrLength);
    let signResult = resultSighCheck(counter);
    // console.log(signResult)
    return signResult;

    function arrayOfNums(numA, numB, numC) {
        // let array = [];
        array.push(numA, numB, numC)
        return array.length;
    }

    function negativesCounter(arrLength) {

        let counter = 0;

        for (let i = 0; i < arrLength; i++) {
            let currNum = array[i];
            if (currNum < 0) {

                counter++;
            }
        }
        return counter;
    }

    function resultSighCheck(counter) {

        let isNegative = false;

        if (counter % 2 !== 0) {
            isNegative = true;
        }
        if (!isNegative) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    }
}

signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)