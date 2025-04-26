function reverseString(currentInput){
    let currentString = String(currentInput);
    let reverse = "";
    for (let i = currentString.length - 1; i >= 0; i--){
        let char = currentString[i];
        reverse += (char);
    }
    console.log(reverse)
}

reverseString("Hello")