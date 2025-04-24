function cake(input){

    let index = 0;
    let cakeWidth = input[index];           // i = 0
    index++;                                // i = 1
    let cakeLength = input[index];          // i = 1
    index++;                                // i = 2
    let command = input[index];             // i = 2    
    let cakeBalance = 0;
    let cakePieces = cakeWidth * cakeLength;

    while (command !== "STOP" && cakePieces > 0){

        let piecesTaken = Number(command);
        cakePieces -= piecesTaken;        
        index++;                            // i = 3
        command = input[index];             // i = 3
        if (index > input.length - 1)
        break;
    }
    // console.log(cakePieces)
    if (cakePieces >= 0){
        console.log(`${cakePieces} pieces are left.`)
    }
    else{
        cakePieces *= -1;
        console.log(`No more cake left! You need ${cakePieces} pieces more.`)
    }
}

cake (["10",
"10",
"STOP",
"STOP"
])


