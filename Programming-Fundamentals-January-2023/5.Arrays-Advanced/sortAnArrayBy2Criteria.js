function sortAnArrayBy2Criteria(inputArray) {

    let compareAlphabet = (a, b) => (a.localeCompare(b));    

    let buffArray = [...inputArray];
    let sortedArray = [];
    let minLengthEl = (arr, arrLength) => {
        let minLength = Number.MAX_SAFE_INTEGER;
        
        for (let i = 0; i < arrLength; i++) {
            let currElLength = arr[i].length;
            if (currElLength < minLength) {
                minLength = currElLength
            }
        }
        return minLength;
    }
    
    while (buffArray.length > 0) {
        
        let buffArrayLength = buffArray.length;
        let minLength = minLengthEl(buffArray, buffArrayLength);
        buffArray = buffArray.filter(el => el.length === minLength);            
        buffArray.sort(compareAlphabet);
        for (currEl of buffArray){
            sortedArray.push(currEl);
        }
        buffArray = inputArray.filter(el => el.length > minLength);
    }
    // console.log(buffArray)
    console.log(sortedArray.join('\n'))
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
console.log('-----------')
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])