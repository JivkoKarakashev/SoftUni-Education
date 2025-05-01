function sortArrayBy2Criteria(inputArray) {

    const sortArrBy2Criteria = (arr) => {
        arr.sort((strA, strB) => {
            if (strA.length === strB.length) {
                return strA.localeCompare(strB);
            } else {
                return strA.length - strB.length;
            }
        })
        return arr;
    }

    const resultArray = sortArrBy2Criteria(inputArray);

    for (const currEl of resultArray) {
        console.log(currEl);
    }
}

sortArrayBy2Criteria(
    [
        'alpha',
        'beta',
        'gamma'
    ])
console.log('----------');
sortArrayBy2Criteria(
    [
        'Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George'
    ])
console.log('----------');
sortArrayBy2Criteria(
    [
        'test',
        'Deny',
        'omen',
        'Default'
    ])