function maxNumber(input) {

    let index = 0;
    let command = input[index];
    index++;

    let maxNum = Number(command);

    while (command !== "Stop") {
        let nextNum = Number(command);
        if (nextNum >= maxNum) {
            maxNum = nextNum;
        }
        command = input[index];
        index++

    }
    console.log(maxNum)
}

maxNumber (["45",
"-20",
"7",
"99",
"Stop"])




