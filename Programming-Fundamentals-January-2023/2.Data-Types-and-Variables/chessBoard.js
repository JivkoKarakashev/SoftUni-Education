function chessBoard(chessSize) {

    let divCounter = 0;
    console.log('<div class="chessboard">')
    for (let i = 0; i < chessSize; i++) {
        divCounter++;
        console.log('  <div>')
        for (let j = 0; j < chessSize; j++) {
            if (divCounter % 2 !== 0) {
                (j % 2 === 0)
                    ? console.log('    <span class="black"></span>')
                    : console.log('    <span class="white"></span>');
            } else {
                (j % 2 === 0)
                    ? console.log('    <span class="white"></span>')
                    : console.log('    <span class="black"></span>');
            }
        }
        console.log('  </div>')
    }
    console.log('</div>')
}

chessBoard(6)