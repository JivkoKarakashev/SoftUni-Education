function minNumber(input){
    let index = 0;
    let command = input[index];
    index++;

    let minNumber = Number(command);

    while (command !== "Stop") {
        let nextNum = Number(command);
        if (nextNum < minNumber) {
            minNumber = nextNum;
        }
        command = input[index];
        index++

    }
    console.log(minNumber)
}

minNumber (["-1",
"-2",
"Stop"])




