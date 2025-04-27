function loadingBar(inputNum){

    let loadingBarLength = 10;
    let loaddingBarProgress = inputNum / 10;
    let percentCount = '%'.repeat(loaddingBarProgress);
    let dotCount = '.'.repeat(loadingBarLength - loaddingBarProgress);
    
    if (inputNum === 100){
        console.log(`${inputNum}% Complete!`);
        console.log(`[${percentCount}${dotCount}]`);
    } else {
        console.log(`${inputNum}% [${percentCount}${dotCount}]`);
        console.log('Still loading...');
    }
}

loadingBar(30)
console.log('----------------');
loadingBar(50)
console.log('----------------');
loadingBar(100)