function friendListMaintenance(inputArray) {

    let friendsListArray = inputArray.shift().split(', ');
    // console.log(friendsListArray)
    let index = 0;
    let commandArray = inputArray[index].split(' ');
    let command = commandArray[index];
    let blacklistedCounter = 0;
    let errlostsCounter = 0;

    let blacklist = (arr, name, blackCounter) => {
        if (arr.includes(name)) {
            blackCounter++;
            let nameIndex = arr.indexOf(name);
            console.log(`${name} was blacklisted.`)
            arr[nameIndex] = 'Blacklisted';
            return blackCounter;
        }
        console.log(`${name} was not found.`);
        return blackCounter;
    }
    let error = (arr, idx, lostCounter) => {
        let arrLength = arr.length;
        let name = arr[idx];
        if (idx >= 0 && idx < arrLength && name !== 'Blacklisted' && name !== 'Lost') {
            lostCounter++;
            console.log(`${name} was lost due to an error.`);
            arr[idx] = 'Lost';
            return lostCounter;
        }
        return lostCounter;
    }
    let change = (arr, idx, newName) => {
        let oldName = arr[idx];
        let arrLength = arr.length;
        if (idx >= 0 && idx < arrLength) {
            console.log(`${oldName} changed his username to ${newName}.`);
            arr[idx] = newName;
            return arr;
        }
        return arr;
    }

    while (command !== 'Report') {
        let name;
        let idx;
        let newName;
        if (command === 'Blacklist') {
            name = commandArray[1];
            // console.log(name);
        } else if (command === 'Error') {
            idx = Number(commandArray[1]);
        } else if (command === 'Change') {
            idx = Number(commandArray[1]);
            newName = commandArray[2];
            // console.log(newName);
        }

        switch (command) {
            case 'Blacklist': blacklistedCounter = blacklist(friendsListArray, name, blacklistedCounter); break;
            case 'Error': errlostsCounter = error(friendsListArray, idx, errlostsCounter); break;
            case 'Change': change(friendsListArray, idx, newName); break;
            default: ; break;
        }

        index++;
        commandArray = inputArray[index].split(' ');
        command = commandArray[0];
        // console.log(command)
    }
    if (command === 'Report') {
        console.log(`Blacklisted names: ${blacklistedCounter}`);
        console.log(`Lost names: ${errlostsCounter}`);
        console.log(friendsListArray.join(' '));
    }
}

friendListMaintenance(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])
console.log('-----------------------------')
friendListMaintenance(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
console.log('-----------------------------')
friendListMaintenance(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])