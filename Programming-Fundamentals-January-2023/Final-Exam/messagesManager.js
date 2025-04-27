function messagesManager(inputArray) {

    const add = (usersLstMap, user, sent, received) => {
        sent = Number(sent);
        received = Number(received);
        if (usersLstMap.has(user)) {
            return;
        }
        usersLstMap.set(user, []);
        usersLstMap.get(user).push(sent, received);
    }
    const empty = (usersLstMap, user) => {
        if (usersLstMap.has(user) && user !== 'All') {
            usersLstMap.delete(user);
        } else if (user === 'All') {
            usersLstMap = new Map;
        }
        return usersLstMap;
    }
    const message = (usersLstMap, sendUser, receivUser, messCap) => {
        if (usersLstMap.has(sendUser) && usersLstMap.has(receivUser)) {
            usersLstMap.get(sendUser)[0] += 1;
            usersLstMap.get(receivUser)[1] += 1;
            let sendUserCapacity = usersLstMap.get(sendUser).reduce((acc, msgCount) => acc += msgCount, 0);
            let receivUserCapacity = usersLstMap.get(receivUser).reduce((acc, msgCount) => acc += msgCount, 0);
            if (sendUserCapacity === messCap) {
                usersLstMap.delete(sendUser);
                console.log(`${sendUser} reached the capacity!`);
            }
            if (receivUserCapacity === messCap) {
                usersLstMap.delete(receivUser);
                console.log(`${receivUser} reached the capacity!`);
            }
        }
    }

    const messaegsCapacity = Number(inputArray.shift());
    let usersListMap = new Map;

    let currLine = inputArray.shift();
    while (currLine !== 'Statistics') {
        let command, user, sent, received, sendUser, receivUser;
        if (currLine.includes('Add')) {
            [command, user, sent, received] = currLine.split('=');
        } else if (currLine.includes('Empty')) {
            [command, user] = currLine.split('=');
        } else if (currLine.includes('Message')) {
            [command, sendUser, receivUser] = currLine.split('=');
        }

        switch (command) {
            case 'Add': add(usersListMap, user, sent, received); break;
            case 'Empty': usersListMap = empty(usersListMap, user); break;
            case 'Message': message(usersListMap, sendUser, receivUser, messaegsCapacity); break;
        }
        currLine = inputArray.shift();
    }
    // console.log(usersListMap);

    const usersListArr = [...usersListMap];
    const usersCount = usersListArr.length;

    if (usersCount !== 0) {
        console.log(`Users count: ${usersCount}`)
        for (let user of usersListArr) {
            let msgsCounter = user[1].reduce((acc, count) => acc += count, 0);
            console.log(`${user[0]} - ${msgsCounter}`);
        }
    }
}

messagesManager(
    [
        "10",
        "Add=Berg=9=0",
        "Add=Kevin=0=0",
        "Message=Berg=Kevin",
        "Add=Mark=5=4",
        "Statistics"
    ])
console.log('-------------------');
messagesManager(
    [
        "20",
        "Add=Mark=3=9",
        "Add=Berry=5=5",
        "Add=Clark=4=0",
        "Empty=Berry",
        "Add=Blake=9=3",
        "Add=Michael=3=9",
        "Add=Amy=9=9",
        "Message=Blake=Amy",
        "Message=Michael=Amy",
        "Statistics"
    ])
console.log('-------------------');
messagesManager(
    [
        "12",
        "Add=Bonnie=3=5",
        "Add=Johny=4=4",
        "Empty=All",
        "Add=Bonnie=3=3",
        "Statistics"
    ])
// console.log('-------------------');
// messagesManager(
//     [
//         "12",
//         "Statistics",
//     ])