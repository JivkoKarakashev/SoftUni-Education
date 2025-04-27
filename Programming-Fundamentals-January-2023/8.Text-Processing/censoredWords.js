function censoredWords(sentence, word){

    let censoredSentence = sentence;
    while (censoredSentence.includes(word)){
        censoredSentence = censoredSentence.replace(word, '*'.repeat(word.length));
    }
    console.log(censoredSentence);
}

censoredWords('A small sentence with some words', 'small')
console.log('-------------------------------------');
censoredWords('Find the hidden word', 'hidden')