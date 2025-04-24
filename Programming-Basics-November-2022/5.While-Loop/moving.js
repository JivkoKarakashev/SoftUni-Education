function moving(input){
    
    let index = 0;
    let freeSpaceWidth = input[index];          // i = 0
    index++;                                    // i = 1
    let freeSpaceLength = input[index];         // i = 1
    index++;                                    // i = 2
    let freeSpaceHight = input[index];          // i = 2
    index++;                                    // i = 3
    let command = input[index];                 // i = 3
    let freeSpaceArea = freeSpaceWidth * freeSpaceLength * freeSpaceHight;

    while (command !== "Done" && freeSpaceArea > 0){
        let boxes = Number(command);
        freeSpaceArea -= boxes;
        index++;                                // i = 4
        command = input[index];                 // i = 4
        if (index > input.lenth - 1)
        break;
    }
    // console.log(freeSpaceArea)
    if (freeSpaceArea >= 0){
        console.log(`${freeSpaceArea} Cubic meters left.`)
    }
    else{
        freeSpaceArea *= -1;
        console.log(`No more free space! You need ${freeSpaceArea} Cubic meters more.`)
    }
}

moving (["10", 
"10",
"2",
"199",
"100",
"100",
"100",
"100"])


