function examPreparation(input){

    let index = 0;    
    let poorGradesNum = input[index];       // i = 0
    index++;                                // i = 1
    let problemsCount = 0;
    let poorGradesCount = 0;
    let currScore = 0;
    let totalScore = 0;
    let currProblem = input[index];         // i = 1
    while (currProblem !== "Enough"){
        index++;                            // i = 2
        problemsCount++;                    // prbCnt = 1
        currScore = Number(input[index]);   // i = 2
        totalScore += currScore;
        index++;                            // i = 3
        currProblem = input[index];         // i = 3
        if (currScore <= 4){
            poorGradesCount++;
            if (poorGradesCount == poorGradesNum){
                console.log(`You need a break, ${poorGradesCount} poor grades.`)
                return;
            }
        }
    }
    currProblem = input[index - 2];
    console.log(`Average score: ${(totalScore / problemsCount).toFixed(2)}`)
    console.log(`Number of problems: ${problemsCount}`)
    console.log(`Last problem: ${currProblem}`)
}

examPreparation (["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])



