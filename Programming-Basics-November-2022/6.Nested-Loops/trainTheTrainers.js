function trainTheTrainers(input){

    let index = 0;
    let juryMems = Number(input[index]);    // i = 0
    index++;                                // i = 1
    let currInput = input[index];           // i = 1
    let allPresAvgGrade = 0;
    let gradesCounter = 0;
    while (currInput !== "Finish"){
        index++;                            // i = 2
        let currPresName = currInput;
        let currPresGrade = 0;
        let currPresAvgGrade = 0;
        for(let i = 0; i < juryMems; i++){
            gradesCounter++;
            currPresGrade += Number(input[index]);  // i = 2
            index++;                                // i = 3            
        }
        currPresAvgGrade = currPresGrade / juryMems;
        console.log(`${currPresName} - ${currPresAvgGrade.toFixed(2)}.`)        
        currInput = input[index];                   // i = 3
        allPresAvgGrade += currPresGrade;
    }
    console.log(`Student's final assessment is ${(allPresAvgGrade / gradesCounter).toFixed(2)}.`)
}

trainTheTrainers (["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])




