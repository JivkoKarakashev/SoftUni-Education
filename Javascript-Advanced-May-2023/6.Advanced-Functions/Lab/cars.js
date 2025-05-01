function cars(inputArray) {

    const carListCollection = {};

    function inheritsFunc(parentObj) {
        const returnedTarget = Object.assign(target, source);
    }

    const carsFuncObj = {
        create(name) {
            carListCollection[name] = new Object();
        },
        set(name, key, value) {
            carListCollection[name][key] = value;
        },
        print(name) {
            const objArr = Object.entries(carListCollection[name]);
            let output = '';
            objArr.forEach(element => {
                let [key, value] = [...element];
                output += `${key}:${value},`;
            });
            console.log(output);
        }
    };


    for (const currLine of inputArray) {
        let command, name, inherits, parent, key, value;
        if (currLine.includes('create') || currLine.includes('print')) {
            [command, name] = currLine.split(' ');
            carsFuncObj[command](name);            
        } else if (currLine.includes('inherits')) {
            [command, name, inherits, parent] = currLine.split(' ');
            carsFuncObj[command](name);
        } else if (currLine.includes('set')) {
            [command, name, key, value] = currLine.split(' ');
            carsFuncObj[command](name, key, value);
        }
    }
}

cars(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2'])