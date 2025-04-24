function graduation(input) {

    let index = 0;
    let group = 1;
    let lowGradeCount = 0
    let name = input[0];
    index++;                                // i = 1
    let currGrade = Number(input[index]);   // i = 1    
    let avgGrade = 0;


    while (group !== 12) {
        // console.log(currGrade)
         if (currGrade < 4) {
            lowGradeCount++;

            if (lowGradeCount > 1) {
                console.log(`${name} has been excluded at ${group} grade`)
                // console.log(currGrade)
                break;
            }
            continue;

        }
        if (currGrade >= 4) {
            avgGrade += currGrade;
            group++;
        }
        index++;                            // i = 2
        currGrade = Number(input[index]);   // i = 2        
    }
    if (group === 12) {
        avgGrade += currGrade;
        console.log(`${name} graduated. Average grade: ${(avgGrade / group).toFixed(2)}`)
    }    
}

graduation (["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])








































