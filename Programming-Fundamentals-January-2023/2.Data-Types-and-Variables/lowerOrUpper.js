function lowerOrUpper(char){

    let charCode = char.charCodeAt();
    let isUpperCase = charCode >= 65 && charCode <= 90 
        ? "upper-case"
        : "lower-case";
    console.log(isUpperCase)
}

lowerOrUpper('f')