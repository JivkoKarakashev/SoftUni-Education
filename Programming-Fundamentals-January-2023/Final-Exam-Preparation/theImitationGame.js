function theImitationGame(inputArray){

    const changeAll = (encryptMsg, subStr, replment) => {
        while (encryptMsg.includes(subStr)) {
            encryptMsg = encryptMsg.replace(subStr, replment);
        }
        return encryptMsg;
    }
    const insert = (encryptMsg, idx, instValue) => {
        idx = Number(idx);
        let encryptMsgArr = encryptMsg.split('');
        encryptMsgArr.splice(idx, 0, instValue);
        encryptMsg = encryptMsgArr.join('');
        return encryptMsg;
    }
    const move = (encryptMsg, lettsCount) => {
        lettsCount = Number(lettsCount);
        let subStr1 = encryptMsg.substring(0, lettsCount);
        let subStr2 = encryptMsg.substring(lettsCount);
        encryptMsg = subStr2.concat(subStr1);
        return encryptMsg;
    }
    
    let encryptedMessage = inputArray.shift();
    let currLine = inputArray.shift();

    while (currLine !== 'Decode') {

        let command, lettersCount, index, insertValue, subString, subStrReplacement;
        if (currLine.includes('Move')) {
            [command, lettersCount] = currLine.split('|');
        } else if (currLine.includes('Insert')) {
            [command, index, insertValue] = currLine.split('|');
        } else if (currLine.includes('ChangeAll')) {
            [command, subString, subStrReplacement] = currLine.split('|');
        }

        switch(command){
            case 'ChangeAll': encryptedMessage = changeAll(encryptedMessage, subString, subStrReplacement); break;
            case 'Insert': encryptedMessage = insert(encryptedMessage, index, insertValue); break;
            case 'Move': encryptedMessage = move(encryptedMessage, lettersCount); break;
        }
        // console.log(encryptedMessage);
        currLine = inputArray.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}

theImitationGame(
[
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])
console.log('---------------------');
theImitationGame(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode',
    ])