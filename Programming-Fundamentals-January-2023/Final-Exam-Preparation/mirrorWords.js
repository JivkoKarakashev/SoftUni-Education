function mirrorWords(inputString){

    const hiddenWordsRegEx = /([@#])(?<wrd1>[A-Za-z]{3,})\1\1(?<wrd2>[A-Za-z]{3,})\1/g;
    // let wordsPairArray = [];
    let wordsPairCount = 0;
    let mirrorWordsArray = [];
    let currWordsPair = hiddenWordsRegEx.exec(inputString);
    // console.log(currWordsPair);
    while (currWordsPair) {
        wordsPairCount++;
        let word1 = currWordsPair.groups.wrd1;
        let word2 = currWordsPair.groups.wrd2;
        let word2Reverse = word2.split('').reverse().join('');
        // console.log(word2Reverse);

        if (word1 === word2Reverse) {
            let wordsPair = `${word1} <=> ${word2}`;
            mirrorWordsArray.push(wordsPair);
            // console.log(wordsPair);
        }        
        // console.log(word1);

        currWordsPair = hiddenWordsRegEx.exec(inputString);
    }
    // console.log(wordsPairCount);
    // console.log(mirrorWordsArray);
    if (wordsPairCount === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${wordsPairCount} word pairs found!`);
        if (mirrorWordsArray.length === 0) {
            console.log('No mirror words!');
        }
        else {
            console.log('The mirror words are:');
            console.log(mirrorWordsArray.join(', '));
        }
    }
}

mirrorWords('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r')
console.log('-----------------------------------');
mirrorWords('#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@')
console.log('-----------------------------------');
mirrorWords('#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#')