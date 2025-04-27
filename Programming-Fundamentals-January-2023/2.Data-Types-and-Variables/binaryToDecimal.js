function binaryToDecimal(input) {
    let inputToStr = input.toString();
    let decimal = 0;
    let binary = "";
    if (inputToStr.length < 8) {
        binary = input.toString(8);
        decimal = parseInt(binary, 2);
    } else {
        
        decimal = parseInt(inputToStr, 2);   
    }
    // console.log(inputToStr)
    // console.log(binary)    
    console.log(decimal)
}

binaryToDecimal(00001001)