function arrayManipulations(input) {

    let numsArray = input
        .shift()
        .split(' ')
        .map(Number);
    // console.log(numsArray)
    // console.log(input)
    let commandsLength = input.length;
    for (let i = 0; i < commandsLength; i++) {
        let currLine = input[i].split(' ');
        let currLineArrLength = currLine.length;
        if (currLineArrLength == 2) {
            [command, el] = [...currLine];
            el = Number(el);
        } else {
            [command, el, index] = [...currLine];
            el = Number(el);
            index = Number(index);
        }
        // console.log(command, el)
        // console.log(typeof command, typeof el)
        switch (command){
            case 'Add': add(el); break;
            case 'Remove': remove(el); break;
            case 'RemoveAt': removeAt(el) ;break;
            case 'Insert': insert(el, index) ;break;
            default: ; break;
        }
    }

    function add(el){
        numsArray.push(el);
    }

    function remove(num){
        numsArray = numsArray.filter((el) => (el !== num));        
    }

    function removeAt(ind){
        numsArray.splice(ind, 1);
    }

    function insert(el, ind){
        numsArray.splice(ind, 0, el);
    }

    console.log(numsArray.join(' '))
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])
console.log('--------------')
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])