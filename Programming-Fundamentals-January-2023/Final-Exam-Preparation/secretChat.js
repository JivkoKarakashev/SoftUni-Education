function secretChat(inputArray){

    let concealedMessageArr = inputArray.shift().split('');
    let index = 0;
    let currLine = inputArray[index];
    while (inputArray[index] !== 'Reveal') {
        let command, idx, subStr, replacement;        
        if (currLine.includes('InsertSpace')) {
            [command, idx] = currLine.split(':|:');
            idx = Number(idx);
            concealedMessageArr.splice(idx, 0, ' ');
            console.log(concealedMessageArr.join(''));
        } else if (currLine.includes('Reverse')) {
            [command, subStr] = currLine.split(':|:');
            // console.log(command);
            let concealedMessageStr = concealedMessageArr.join('');
            if (concealedMessageStr.includes(subStr)) {
                let subStrIdx = concealedMessageStr.indexOf(subStr);
                let subStrLength = subStr.length;
                let reversedSubStrArr = concealedMessageArr.splice(subStrIdx, subStrLength).reverse();
                concealedMessageArr = concealedMessageArr.concat(reversedSubStrArr);
                console.log(concealedMessageArr.join(''));
            } else {
                console.log('error');
            }
        } else if (currLine.includes('ChangeAll')){
            [command, subStr, replacement] = currLine.split(':|:');
            // console.log(command);
            let concealedMessageStr = concealedMessageArr.join('');
            while (concealedMessageStr.includes(subStr)) {
                concealedMessageStr = concealedMessageStr.replace(subStr, replacement);                
            }            
            console.log(concealedMessageStr);
            concealedMessageArr = concealedMessageStr.split('');
        }
        index++;
        currLine = inputArray[index];
    }
    if (currLine === 'Reveal') {
        let revealedMessageStr = concealedMessageArr.join('');
        console.log(`You have a new text message: ${revealedMessageStr}`);
    }
}

secretChat(
[
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
])
console.log('-----------------');
secretChat(
[
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])