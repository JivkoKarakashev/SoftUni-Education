function melrahShake(inputArray) {

    let strShk = inputArray[0];
    let strPtn = inputArray[1];
    let strShkLgh = strShk.length;
    let strPtnLgh = strPtn.length;

    // let newPatern = new RegExp(`${strPtn}`, 'g');
    // let occurCount = (strShk.match(newPatern) || []).length;
    // console.log(strPtnLgh);
    // console.log(occurCount);

    while (strPtnLgh > 0) {
        let startIdx = strShk.indexOf(strPtn);
        let endIdx = strShk.lastIndexOf(strPtn);
        if (startIdx >= 0 && endIdx >= 0 && startIdx !== endIdx) {            
            if (startIdx !== 0 && endIdx === strShkLgh - strPtnLgh) {
                let fstSlice = strShk.slice(0, startIdx);
                let secSlice = strShk.slice(startIdx + strPtnLgh, endIdx);
                strShk = fstSlice.concat(secSlice);
            } else if (startIdx === 0 && endIdx === strShkLgh - strPtnLgh) {
                strShk = strShk.slice(startIdx + strPtnLgh, endIdx);
            } else if (startIdx === 0 && endIdx !== strShkLgh - strPtnLgh) {
                let fstSlice = strShk.slice(startIdx + strPtnLgh, endIdx);
                let secSlice = strShk.slice(endIdx + strPtnLgh, strShkLgh);
                strShk = fstSlice.concat(secSlice);
            } else if (startIdx !== 0 && endIdx !== strShkLgh - strPtnLgh) {
                let fstSlice = strShk.slice(0, startIdx);
                let secSlice = strShk.slice(startIdx + strPtnLgh, endIdx);
                let thdSlice = strShk.slice(endIdx + strPtnLgh, strShkLgh)
                strShk = fstSlice.concat(secSlice, thdSlice);
            }
            strShkLgh = strShk.length;
            console.log('Shaked it.');
            // console.log(strShk)
            let rmvIdx = Math.floor(strPtnLgh / 2);
            strPtn = strPtn.replace(strPtn[rmvIdx], '');
            strPtnLgh = strPtn.length;
        } else {
            break;
        }
        // console.log(strPtn);
        // newPatern = new RegExp(`${strPtn}`, 'g');
        // occurCount = (strShk.match(newPatern) || []).length;
    }
    console.log('No shake.');
    console.log(strShk);
}

melrahShake(
    [
        'astalavista baby',
        'sta'
    ])
console.log('-------------');
melrahShake(
    [
        '##mtm!!mm.mm*mtm.#',
        'mtm'
    ])
// console.log('-------------');
// melrahShake(
//     [
//         'astalavistaw',
//         'sta'
//     ])