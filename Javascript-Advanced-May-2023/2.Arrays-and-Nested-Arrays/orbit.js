function orbit(coordinatesArray) {

    const [columns, rows, x, y] = [...coordinatesArray];
    const matrix = [...Array(rows)].map(() => [...Array(columns)].fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i === x && j === y) {
                matrix[i][j] = 1;
            } else {
                let distanceX = Math.abs(i - x);
                let distanceY = Math.abs(j - y);
                matrix[i][j] = Math.max(distanceX, distanceY) + 1;
            }
        }        
    }
    
    for (let currRowArr of matrix) {
        console.log(currRowArr.join(' '));
    }
}

orbit([4, 4, 0, 0])
console.log('---------');
orbit([5, 5, 2, 2])
console.log('---------');
orbit([3, 3, 2, 2])