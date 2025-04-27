function emojiDetector(inputArray) {

    const coolness = (emoji) => {
        let emojiTrimedArr = [];
        (emoji.includes('::'))
           ? emojiTrimedArr = emoji.split('::')
           : emojiTrimedArr = emoji.split('**');
        
        let emojTrimedStr = emojiTrimedArr[1];
        let emojiArr = emojTrimedStr.split('');
        let coolness = emojiArr.reduce((acc, char) => acc += char.charCodeAt(0) ,0);
        return coolness;
    }
    
    const emojiPatternRegEx = /(:{2}|\*{2})[A-Z]{1}[a-z]{2,}\1/g;
    const tresholdPatternRegEx = /\d/g;

    const coolTresholdArr = inputArray[0].match(tresholdPatternRegEx);
    const validEmojisArray = inputArray[0].match(emojiPatternRegEx);

    const coolTreshold = coolTresholdArr.reduce((acc, dig) => acc *= Number(dig));
    const validEmojisCount = validEmojisArray.length;

    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${validEmojisCount} emojis found in the text. The cool ones are:`);
    if (validEmojisCount !== 0) {
        for (let emoji of validEmojisArray) {
            let emojiCoolnes = coolness(emoji);
            // console.log(emojiCoolnes);
            if (emojiCoolnes > coolTreshold) {
                console.log(emoji);
            }
        }        
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log('---------------------------------------------');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
console.log('---------------------------------------------');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
