function argumentInfo() {

    const argsArr = Array.from(arguments);
    const argsListMap = new Map();
    for (const arg of argsArr) {
        if (!argsListMap.has(typeof arg)) {
            argsListMap.set(typeof arg, 0);
        }
        console.log(`${typeof arg}: ${arg}`);
        let newValue = argsListMap.get(typeof arg) + 1;
        argsListMap.set(typeof arg, newValue);
    }
    let sortedArr = Array.from(argsListMap.entries()).sort((objA, objB) => objB[1] - objA[1]);
    // console.log(sortedArr);
    sortedArr.forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); })
// console.log('----------------------------------------');
argumentInfo('cat', 42, function () { console.log('Hello world!'); }, function () { console.log('Hello world!'); }, 'dog', 52)