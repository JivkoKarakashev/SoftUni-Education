function encryptingPassword(inputArray) {

    const encryptPass = (validPassArr) => {
        let gr1Str = validPassArr.groups['gr1'];
        let gr2Str = validPassArr.groups['gr2'];
        let gr3Str = validPassArr.groups['gr3'];
        let gr4Str = validPassArr.groups['gr4'];
        let ecryptPassStr = gr1Str.concat(gr2Str, gr3Str, gr4Str);
        console.log(`Password: ${ecryptPassStr}`);
    }

    const linesCount = Number(inputArray.shift());
    const validPasswordRedEx = /^(.+)>{1}(?<gr1>\d{3})\|(?<gr2>[a-z]{3})\|(?<gr3>[A-Z]{3})\|(?<gr4>[^<>]{3})<\1$/;

    for (let i = 0; i < linesCount; i++) {
        let currLine = inputArray.shift();
        if (validPasswordRedEx.test(currLine)) {
            let validPassGroupsArr = validPasswordRedEx.exec(currLine);
            encryptPass(validPassGroupsArr);            
        } else {
            console.log('Try another password!');
            continue;
        }
    }
}

encryptingPassword(
[
    "3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"
])
console.log('--------------------------');
encryptingPassword(
    [
        "5",
        "aa>111|mqu|BAU|mqu<aa",
        "()>111!aaa!AAA!^&*<()",
        "o>088|abc|AAA|***<o",
        "asd>asd|asd|ASD|asd<asd",
        "*>088|zzzz|ZzZ|123<*"
    ])
console.log('--------------------------');
encryptingPassword(
[
    "5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"
])
