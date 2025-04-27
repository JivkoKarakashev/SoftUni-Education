function decryptingCommands(inputArray) {

const replace = (message, currChar, newChar) => {
    if (message.includes(currChar)) {
        let newMessage = message.split(currChar).join(newChar);
        console.log(newMessage);
        return newMessage;
    }
    return message;
}
const make = (message, caseSense) => {
    let newMessage = '';
    
    if (caseSense === ('Upper')) {
        newMessage = message.toUpperCase();
    } else if (caseSense === ('Lower')){
        newMessage = message.toLowerCase();
    }
    console.log(newMessage);
    return newMessage;
}
const check = (message, subStr) => {
    if (message.includes(subStr)) {
        console.log(`Message contains ${subStr}`);
    }
    console.log(`Message doesn't contain ${subStr}`);
}
const sum = (message, startIdx, endIdx) => {
    startIdx = Number(startIdx);
    endIdx = Number(endIdx);
    let messageLength = message.length;
    if (startIdx < 0 || endIdx < 0 || startIdx >= messageLength || endIdx >= messageLength) {
        console.log('Invalid indices!');
        return;
    }
    let subString = message.substring(startIdx, endIdx + 1);
    let subStringtoArray = subString.split('');
    let sumAscii = subStringtoArray.reduce((acc, currChar) => acc += currChar.charCodeAt(0), 0);
    console.log(sumAscii);
}
const cut = (message, startIdx, endIdx) => {
    startIdx = Number(startIdx);
    endIdx = Number(endIdx);
    let messageLength = message.length;
    if (startIdx < 0 || endIdx < 0 || startIdx >= messageLength || endIdx >= messageLength) {
        console.log('Invalid indices!');
        return;
    }
    let subString = message.substring(startIdx, endIdx + 1);
    while (message.includes(subString)) {
        message = message.replace(subString, '');        
    }
    console.log(message);
    return message;
}
    
    let message = inputArray.shift();
    
    let currLine = inputArray.shift();
    while (currLine !== 'Finish') {
        let command, currChar, newChar, caseSense, subStr, startIdx, endIdx;
        if (currLine.includes('Replace')) {
            [command, currChar, newChar] = currLine.split(' ');
        } else if (currLine.includes('Make')) {
            [command, caseSense] = currLine.split(' ');
        } else if (currLine.includes('Check')) {
            [command, subStr] = currLine.split(' ');
        } else if (currLine.includes('Sum')) {
            [command, startIdx, endIdx] = currLine.split(' ');
        } else if (currLine.includes('Cut')) {
            [command, startIdx, endIdx] = currLine.split(' ');
        }
        
        switch (command) {
            case 'Replace': message = replace(message, currChar, newChar); break;
            case 'Make': message = make(message, caseSense); break;
            case 'Check': check(message, subStr); break;
            case 'Sum': sum(message, startIdx, endIdx); break;
            case 'Cut': cut(message, startIdx, endIdx); break;
        }
        // console.log(message);
        currLine = inputArray.shift();
    }
}

decryptingCommands(
[
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
])
console.log('--------------------------');
decryptingCommands(
[
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
])
