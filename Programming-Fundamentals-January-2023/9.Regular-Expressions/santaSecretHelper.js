function santaSecretHelper(inputArray){

    const decryptLine = (cmd, key) => {
        let cmdArr = cmd.split('');
        let cmdArrLength = cmdArr.length;
        for (let i = 0; i < cmdArrLength; i++) {
            let encryptedCharAscii = cmdArr[i].charCodeAt(0);
            let decryptedChar = String.fromCharCode(encryptedCharAscii - key);
            cmdArr[i] = decryptedChar;
        }
        let decryptedLine = cmdArr.join('');
        return decryptedLine;
    }

    const decryptKey = Number(inputArray.shift());
    const validMessageRegEx = /(?<name>@[A-Za-z]+)[^@\-!:>]+(?<behav>![GN]{1}!)/;
    let index = 0;
    let command = inputArray[index];
    while (command !== 'end') {
        let decryptedLine = decryptLine(command, decryptKey);
        // console.log(decryptedLine);
        let validMessageArr = decryptedLine.match(validMessageRegEx);
        // console.log(validMessageArr);
        if (validMessageArr) {
            if (validMessageArr[1] !== undefined && validMessageArr[2] !== undefined) {
                let childName = validMessageArr[1].replace('@','');
                let childBehav = validMessageArr[2]
                while (childBehav.includes('!')) {
                    childBehav = childBehav.replace('!','');            
                }
                if (childBehav === 'G') {                
                    console.log(childName);
                }
            }        
        }
        index++;
        command = inputArray[index];            
    }
}

santaSecretHelper(
[
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
])
console.log('----------');
santaSecretHelper(
[
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
])
console.log('----------');
santaSecretHelper(
[   '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
])