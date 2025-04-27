function rightPlace(strA, char, strB){

    // let index = 0;
    // let currCahr = strA[index];
    // while (currCahr != "_"){
    //     if (currCahr === "_"){
    //         break;
    //     }
    //     index++;
    //     currCahr = strA[index];
    // }
    
    // let isMatched = char === strB[index]
    //     ? "Matched"
    //     : "Not Matched";

    let newStrA = strA.replace("_", char);
    let isMatched = newStrA === strB
        ? "Matched"
        : "Not Matched";

    console.log(isMatched)
}

rightPlace('Str_ng', 'i', 'String')