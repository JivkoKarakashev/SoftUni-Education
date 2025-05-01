function lastKNumbersSequence(n, k) {

    let numberSequnceArr = [1];

    for (let i = 1; i < n; i++) {

        let index = 0;

        if (i >= k) {
            index = i - k;
        }

        let sum = 0;
        let previousNumSequnce = numberSequnceArr.slice(index);

        for (let currNum of previousNumSequnce) {
            sum += currNum;
        }
        numberSequnceArr.push(sum);
    }

    return numberSequnceArr;
}

lastKNumbersSequence(6, 3)
console.log('-----------------');
lastKNumbersSequence(8, 2)