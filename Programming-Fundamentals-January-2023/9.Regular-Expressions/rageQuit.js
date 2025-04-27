function rageQuit(inputString){

    const regEx = /((?<str>\D+)(?<pntCnt>\d+))+?/g;
    let stringsListArr = [];
    const uniqueSymbolsArr = [];

    let stringsArray = regEx.exec(inputString);
    while (stringsArray) {
        let currString = stringsArray.groups.str;
        let currPntCount = Number(stringsArray.groups.pntCnt);
        // console.log(currString);
        if (currPntCount > 0){
            let currStrUpCase = currString.toUpperCase();
            let currStrRepeat = currStrUpCase.repeat(currPntCount);
            stringsListArr = stringsListArr.concat(currStrRepeat);
            // console.log(currStrRepeat);
            let currStrToArr = currStrUpCase.split('');
            for (let currChar of currStrToArr) {
                if (!uniqueSymbolsArr.includes(currChar)) {
                    uniqueSymbolsArr.push(currChar);
                }
            }
        }
        stringsArray = regEx.exec(inputString);
    }
    let uniqueSymbolsArrLength = uniqueSymbolsArr.length;
    console.log(`Unique symbols used: ${uniqueSymbolsArrLength}`);
    console.log(stringsListArr.join(''));
}

rageQuit('a3')
console.log('-------------------');
rageQuit('aSd2&5s@1')
console.log('-------------------');
rageQuit('P"qCmo.-0')