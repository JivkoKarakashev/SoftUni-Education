function substring(text, startIdx, count){
    
    let slicedWord = text.slice(startIdx, startIdx + count);
    console.log(slicedWord);
}

substring('ASentence', 1, 8)