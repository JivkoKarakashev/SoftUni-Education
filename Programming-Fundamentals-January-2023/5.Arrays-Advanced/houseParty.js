function houseParty(inputArray) {

    let guestListArray = [];
    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {

        let currLine = inputArray[i].split(' ');
        // let currLineLength = currLine.length;
        // console.log(currLine)
        // console.log(currLineLength)
        let [name, ...command] = [...currLine];
        command = command.join(' ');
        // console.log(name, command);
        // console.log(typeof name, typeof command)
        switch (command) {
            case 'is going!':
                if (guestListArray.includes(name)) {
                    console.log(`${name} is already in the list!`);
                    continue;
                } else {
                    guestListArray.push(name);
                } break;
            case 'is not going!':
                if (guestListArray.includes(name)) {
                    let index = guestListArray.indexOf(name);
                    guestListArray.splice(index, 1);
                } else {
                    console.log(`${name} is not in the list!`)
                }
        }
    }
    console.log(guestListArray.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
console.log('-----------------')
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])