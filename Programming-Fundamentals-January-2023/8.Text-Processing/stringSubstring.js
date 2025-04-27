function stringSubstring(word, text) {
    let textArray = text.split(' ').map(w => w.toLowerCase());
    textArray.includes(word)
        ? console.log(word)
        : console.log(`${word} not found!`);
}

stringSubstring(
    'javascript',
    'JavaScript is the best programming language')
console.log('----------');
stringSubstring(
    'python',
'JavaScript is the best programming language')