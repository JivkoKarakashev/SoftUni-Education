function deserializeString(inputArray){

    const charsArray = [];
    let index = 0;
    
    while(inputArray[index] !== 'end'){
        let [currChar, indices] = inputArray[index].split(':');
        const indicesArray = indices.split('/');
        for (let currIdx of indicesArray) {
            charsArray[currIdx] = currChar;
        }
        index++;
    }
    console.log(charsArray.join(''));
}

deserializeString(
[
    'a:0/2/4/6',
    'b:1/3/5',
    'end'
])
console.log(`--------------------`);
deserializeString(
[   'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
])