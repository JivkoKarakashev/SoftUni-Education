function equalSums(inputArray) {

    let leftSum = 0;
    let rightSum = 0;
    let suchIndexExists = false;

    for (let i = 0; i <= inputArray.length - 1; i++) {
        if (i > 0) {
            for (let j = i - 1; j >= 0; j--) {
                let currElement = Number(inputArray[j]);
                leftSum += currElement;
            }
        }
        if (i < inputArray.length - 1) {

            for (let k = i + 1; k <= inputArray.length - 1; k++) {
                let currElement = Number(inputArray[k]);
                rightSum += currElement;
            }
        }

        if (leftSum === rightSum) {
            console.log(i);
            suchIndexExists = true;
        }
        leftSum = 0;
        rightSum = 0;
        // suchIndexExists = false;
    }
    if (!suchIndexExists){
        console.log('no')
    }
}

equalSums([1, 2, 3])