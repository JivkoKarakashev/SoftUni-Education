function matchPhoneNumber(inputArray){

    const strPattern = /\+359([ -])2\1[0-9]{3}\1[0-9]{4}\b/g;
    const validPhoneNummsArr = inputArray.shift().match(strPattern);
    console.log(validPhoneNummsArr.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])