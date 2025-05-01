function listProcessor(inputArray) {

    const innerCollection = [];

    const obj = {
        add(str) { innerCollection.push(str) },
        remove(str) { 
            let idx = innerCollection.indexOf(str);
            while (idx >= 0) {
                innerCollection.splice(idx, 1);
                idx = innerCollection.indexOf(str);
            }
         },
        print() {console.log(innerCollection.join(',')) },
    }

    for (const currLine of inputArray) {
        let command, str;
        if (currLine !== 'print') {
            [command, str] = currLine.split(' ');
            obj[command](str);
        } else {
            obj[currLine]();
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
console.log('------------------');
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])