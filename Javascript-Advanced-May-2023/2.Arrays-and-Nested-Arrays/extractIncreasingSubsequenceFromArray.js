function extractIncreasingSubsequenceFromArray(inputArray) {

    const reducedArray = [];

    inputArray.reduce((acc, curEl, curIdx) => {

        if (curIdx === 0 || curEl >= acc) {
            acc = curEl;
            reducedArray.push(curEl);
            return acc;
        } else {
            return acc;
        }
    }, 0);

    return reducedArray;
}

extractIncreasingSubsequenceFromArray(
    [
        1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24
    ])
console.log('--------------');
extractIncreasingSubsequenceFromArray(
    [
        1,
        2,
        3,
        4
    ])
console.log('--------------');
extractIncreasingSubsequenceFromArray(
    [
        20,
        3,
        2,
        15,
        6,
        1
    ])