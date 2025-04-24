function walking(input) {

    let index = 0;
    let stepsGoal = 10000;
    let command = input[index];                 // i = 0
    let stepsTaken = 0;
    let stepsBalance = 0;

    while (index <= input.length - 1) {
        if (command !== "Going home") {
            stepsTaken = Number(command);           // i = 0
            stepsBalance += stepsTaken;
            index++;                                // i = 1
            command = input[index];                 // i = 1
        }
        if (command === "Going home") {
            index ++;                               // i = 1
            stepsTaken = Number(input[index]);      // i = 1
            stepsBalance += stepsTaken;
            // console.log(stepsBalance)
            if (stepsBalance >= stepsGoal){
                stepsBalance = stepsBalance - stepsGoal;
                console.log(`Goal reached! Good job!`)
                console.log(`${stepsBalance} steps over the goal!`)
            }
            else if (stepsBalance < stepsGoal){
                stepsBalance = stepsGoal - stepsBalance; 
                console.log(`${stepsBalance} more steps to reach goal.`)
            }
            return;
        }
    }
    // console.log(stepsBalance)
    if (stepsBalance >= stepsGoal){
        stepsBalance = stepsBalance - stepsGoal;
        console.log(`Goal reached! Good job!`)
        console.log(`${stepsBalance} steps over the goal!`)
    }
    else if (stepsBalance < stepsGoal){
        stepsBalance = stepsGoal - stepsBalance; 
        console.log(`${stepsBalance} more steps to reach goal.`)
    }
}

walking (["125",
"250",
"4000",
"30",
"2678",
"4682"])















