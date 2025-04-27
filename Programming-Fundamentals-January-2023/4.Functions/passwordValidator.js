function passwordValidator(input) {

    let inputTOString = String(input);
    let inputTOStringLength = inputTOString.length;
    let digitsCounter = 0;
    let invalidChar = false;
    let invalidLength = false;

    if (inputTOStringLength < 6 || inputTOStringLength > 10) {
        invalidLength = true;
        console.log('Password must be between 6 and 10 characters');
    }

    for (let i = 0; i < inputTOStringLength; i++) {

        let currChar = inputTOString[i];
        if (currChar.charCodeAt(0) >= 48 && currChar.charCodeAt(0) <= 57) {
            digitsCounter++;
        }

        if (currChar.charCodeAt(0) >= 48 && currChar.charCodeAt(0) <= 57) {
        } else if (currChar.charCodeAt(0) >= 65 && currChar.charCodeAt(0) <= 90) {
        } else if (currChar.charCodeAt(0) >= 97 && currChar.charCodeAt(0) <= 122) {
        } else {
            invalidChar = true;
        }
    }

    if (!invalidLength && digitsCounter >= 2 && !invalidChar) {
        console.log('Password is valid');
    } else {
        if (invalidChar){
            console.log('Password must consist only of letters and digits');
        }
        if (digitsCounter < 2){
            console.log('Password must have at least 2 digits');
        }
    }
}

// passwordValidator('logIn')
// passwordValidator('MyPass123')
passwordValidator('Pa$s$s')