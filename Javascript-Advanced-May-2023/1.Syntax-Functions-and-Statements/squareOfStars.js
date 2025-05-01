function squareOfStars(squareSize) {

    if (!squareSize) {
        squareSize = 5;
    }
    for (let i = 0; i < squareSize; i++) {
        console.log('* '.repeat(squareSize - 1) + '*');
    }
}

squareOfStars(1)
console.log('-----------------');
squareOfStars(2)
console.log('-----------------');
squareOfStars(5)
console.log('-----------------');
squareOfStars(7)
console.log('-----------------');
squareOfStars()