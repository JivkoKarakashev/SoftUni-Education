function nxnMatrix(input){

    let inputToNumber = Number(input);
    let inputToString = String(input);
        
    for (let i = 0; i < inputToNumber; i++){

        let rowArray = [];
        for (j = 0; j < inputToNumber; j++){
            rowArray.push(inputToString);
        }
        console.log(rowArray.join(' '));
    }
}

nxnMatrix(7)