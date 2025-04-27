function passwordReset(inputArray) {

    const takeOdd = (pass) => {
        let newRawPass = '';
        let passLength = pass.length;
        for (let i = 1; i < passLength; i += 2) {
            newRawPass += pass[i];
        }
        console.log(newRawPass);
        return newRawPass;
    }
    const cut = (pass, index, length) => {
        index = Number(index);
        length = Number(length);
        let subStrCut = pass.substring(index, index + length);
        pass = pass.replace(subStrCut, '');
        console.log(pass);
        return pass;
    }
    const substitute = (pass, subStr, newSubStr) => {
        if (!pass.includes(subStr)) {
            console.log('Nothing to replace!');
            return pass;
        }
        let passArr = pass.split(subStr);
        pass = passArr.join(newSubStr);
        console.log(pass);
        return pass;
    }

    let password = inputArray.shift();

    let currLine = inputArray.shift();
    while (currLine !== 'Done') {
        let command, index, length, substring, newSubstring;
        if (currLine.includes('TakeOdd')) {
            command = currLine;
        } else if (currLine.includes('Cut')) {
            [command, index, length] = currLine.split(' ');
        } else if (currLine.includes('Substitute')) {
            [command, substring, newSubstring] = currLine.split(' ');
        }

        switch (command) {
            case 'TakeOdd': password = takeOdd(password); break;
            case 'Cut': password = cut(password, index, length); break;
            case 'Substitute': password = substitute(password, substring, newSubstring); break;
        }
        // console.log(password);
        currLine = inputArray.shift();
    }
    console.log(`Your password is: ${password}`);
}

passwordReset(
    [
        "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
        "TakeOdd",
        "Cut 15 3",
        "Substitute :: -",
        "Substitute | ^",
        "Done"
    ])
console.log('-----------------------------------');
passwordReset(
    [
        "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
        "TakeOdd",
        "Cut 18 2",
        "Substitute ! ***",
        "Substitute ? .!.",
        "Done"
    ])

