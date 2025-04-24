function projectsCreation (input){
    let archName = input[0];
    let projNumbers = Number(input[1]);
    let workHours = projNumbers * 3;
    console.log(`The architect ${archName} will need ${workHours} hours to complete ${projNumbers} project/s.`)
}

projectsCreation(["George", "4"])