function solve() {

    const checkButtonElement = document.querySelector('button:nth-child(1)');
    const clearButtonElement = document.querySelector('button:nth-child(2)');
    const wholeTableElement = document.querySelector('div#exercise table');
    const checkResultTextElement = document.querySelector('div#check p');
    // console.log(tableElement);
    let isSolved = true;
    
    const checkButtonEventHandler = () => {
        const tableElement = Array.from(document.querySelector('tbody').children);
        const tableElementLength = tableElement.length;
        
        for (let i = 0; i < tableElementLength; i++){
            let sudomuNums = [1, 2, 3];
            for (let j = 0; j < tableElementLength; j++){                
                let currEl = Number(tableElement[i].children[j].children[0].value);
                if (sudomuNums.includes(currEl)) {
                    let currElIdx = sudomuNums.indexOf(currEl);
                    sudomuNums.splice(currElIdx, 1);
                }
            }
            // console.log(sudomuNums);
            if (sudomuNums.length !== 0) {
                isSolved = false;
                break;
            }
         }

         for (let i = 0; i < tableElementLength; i++){
            let sudomuNums = [1, 2, 3];
            for (let j = 0; j < tableElementLength; j++){                
                let currEl = Number(tableElement[j].children[i].children[0].value);
                // console.log(currEl);
                if (sudomuNums.includes(currEl)) {
                    let currElIdx = sudomuNums.indexOf(currEl);
                    sudomuNums.splice(currElIdx, 1);
                }
            }
            // console.log(sudomuNums);
            if (sudomuNums.length !== 0) {
                isSolved = false;
                break;
            }
         }

        if (isSolved) {
            wholeTableElement.style.border = '2px solid green';
            checkResultTextElement.style.color = "green";
            checkResultTextElement.textContent = 'You solve it! Congratulations!';
            // alert('You solve it! Congratulations!');
        } else {
            wholeTableElement.style.border = '2px solid red';
            checkResultTextElement.style.color = "red";
            checkResultTextElement.textContent = 'NOP! You are not done yet...';
            // alert('NOP! You are not done yet...');
        }
        // isSolved = true;
    };

    const clearButtonEventHandler = () => {
        const tableElement = Array.from(document.querySelector('tbody').children);
        for (let row of tableElement) {
            // console.log(tableElement);
            for (let cell of row.children) {
                // console.log(cell);
                cell.children[0].value = '';
            }
            wholeTableElement.style.border = '';
            checkResultTextElement.textContent = '';
            // checkResultTextElement.style.color = '';
            // checkResultTextElement.parentElement.removeChild(checkResultTextElement);
        }
        // isSolved = true;
    };
    checkButtonElement.addEventListener('click', checkButtonEventHandler);
    clearButtonElement.addEventListener('click', clearButtonEventHandler);
}