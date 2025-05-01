function addAndRemoveElements(commandsArray) {

    let initialNum = 1;
    const outputArray = [];

    for (let currCommand of commandsArray) {
        if (currCommand === 'add') {
            outputArray.push(initialNum);
        } else if (currCommand === 'remove') {
            let outputArrayLength = outputArray.length;
            if (outputArrayLength !== 0) {
                outputArray.pop();
            }
        }
        initialNum++;
    }

    if (outputArray.length !== 0) {
        for (let currElement of outputArray) {
            console.log(currElement);
        }
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(
    [
        'add',
        'add',
        'add',
        'add'
    ])
console.log('----');
addAndRemoveElements(
    [
        'add',
        'add',
        'remove',
        'add',
        'add'
    ])
console.log('----');
addAndRemoveElements(
    [
        'remove',
        'remove',
        'remove'
    ])