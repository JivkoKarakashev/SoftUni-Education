function ticTacToe(inputArray) {

    const checkWinner = (arr, x, y, isPlayer) => {

        let isWinner = false;

        const rowCheck = () => {
            if (arr[x][0] === isPlayer && arr[x][1] === isPlayer && arr[x][2] === isPlayer) {
                return true;
            }
            return false;
        };
        const columnCheck = () => {
            if (arr[0][y] === isPlayer && arr[1][y] === isPlayer && arr[2][y] === isPlayer) {
                return true;
            }
            return false;
        };
        const mainDiagonalCheck = () => {
            if (arr[0][0] === isPlayer && arr[1][1] === isPlayer && arr[2][2] === isPlayer) {
                return true;
            }
            return false;
        };
        const secondDiagonalCheck = () => {
            if (arr[0][2] === isPlayer && arr[1][1] === isPlayer && arr[2][0] === isPlayer) {
                return true;
            }
            return false;
        };
        isWinner = rowCheck();
        if (!isWinner) {
            isWinner = columnCheck();            
        }
        if (x === y
            || (x === 0 && y === 2)
            || (x === 2 && y === 0)) {
            if (!isWinner) {
               isWinner =  mainDiagonalCheck();
               if (!isWinner) {
                isWinner = secondDiagonalCheck();
               }
            }
        }
        return isWinner;
    };
    const hasFreeField = (initDashboardArr) => initDashboardArr.some((currRow) => currRow.some(field => field === false));

    const initailDashboardStateArr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    const playersTurnsCount = inputArray.length;
    let isPlayer = 'X';

    for (let i = 0; i < playersTurnsCount; i++) {
        let [coordX, coordY] = inputArray[i].split(' ').map(Number);

        if (!hasFreeField(initailDashboardStateArr)) {
            console.log('The game ended! Nobody wins :(');
            for (let currRow of initailDashboardStateArr) {
                console.log(currRow.join('\t'));
            }
            return;
        } else if (initailDashboardStateArr[coordX][coordY] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        } else if (isPlayer === 'X') {
            initailDashboardStateArr[coordX][coordY] = 'X';
            let isWinner = checkWinner(initailDashboardStateArr, coordX, coordY, isPlayer);
            if (isWinner) {
                console.log(`Player ${isPlayer} wins!`);
                for (let currRow of initailDashboardStateArr) {
                    console.log(currRow.join('\t'));
                }
                return;
            }
            isPlayer = 'O';
        } else if (isPlayer === 'O') {
            initailDashboardStateArr[coordX][coordY] = 'O';
            let isWinner = checkWinner(initailDashboardStateArr, coordX, coordY, isPlayer);
            if (isWinner) {
                console.log(`Player ${isPlayer} wins!`);
                for (let currRow of initailDashboardStateArr) {
                    console.log(currRow.join('\t'));
                }
                return;
            }
            isPlayer = 'X';
        }
    }
}

// ticTacToe(
//     [
//         "0 1",
//         "0 0",
//         "0 2",
//         "2 0",
//         "1 0",
//         "1 1",
//         "1 2",
//         "2 2",
//         "2 1",
//         "0 0"
//     ])
// console.log('-----------------');
// ticTacToe(
//     [
//         "0 0",
//         "0 0",
//         "1 1",
//         "0 1",
//         "1 2",
//         "0 2",
//         "2 2",
//         "1 2",
//         "2 2",
//         "2 1"
//     ])
// console.log('-----------------');
ticTacToe(
    [
        "0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"
    ])