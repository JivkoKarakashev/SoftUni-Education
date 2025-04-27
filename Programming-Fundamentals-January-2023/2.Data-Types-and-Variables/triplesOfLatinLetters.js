function triplesOfLatinLetters(num){

    let number = Number(num);
    let stringFromLetters = "";
    
    for (let i = 0; i < number; i++){
        let firstLetter = String.fromCharCode(97 + i);
        for (let j = 0; j < number; j++){
            let secondLetter = String.fromCharCode(97 + j);
            for (let k = 0; k < number; k++){
                let thirdLetter = String.fromCharCode(97 + k);
                stringFromLetters = firstLetter + secondLetter + thirdLetter;
                console.log(stringFromLetters)
            }
        }
    }
}

triplesOfLatinLetters('2')