function loadingBar(inputNum){

    let loadingBar = [];
    let loadingBarIndexes = inputNum / 10;
    let loadingBarLength = loadingBar.length = 10;
    
    loadingBar.fill('%', 0, loadingBarIndexes);
    loadingBar.fill('.', loadingBarIndexes);
    // console.log(loadingBar)
    if (inputNum === 100){
        console.log(`${inputNum}% Complete!`);
        console.log(`[${loadingBar.join('')}]`);
    } else {
        console.log(`${inputNum}% [${loadingBar.join('')}]`);
        console.log('Still loading...');
    }
}

loadingBar(30)
console.log('----------------');
loadingBar(50)
console.log('----------------');
loadingBar(100)