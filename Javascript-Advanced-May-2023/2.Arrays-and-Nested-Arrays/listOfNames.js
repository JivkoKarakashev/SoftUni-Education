function listOfNames(inputArray) {

    const listOfNamesObj = {};
    let counter = 1;

    const sortedListOfNamesArray = inputArray.sort((a, b) => a.localeCompare(b));

    for (const currName of sortedListOfNamesArray) {
        listOfNamesObj[counter] = currName;
        counter++;
    }

    for (const currName of Object.keys(listOfNamesObj)) {
        console.log(`${currName}.${listOfNamesObj[currName]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])