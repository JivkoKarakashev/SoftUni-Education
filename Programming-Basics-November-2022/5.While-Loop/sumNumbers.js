function sumNumbers(input){

    let index = 0;
    let sum = 0;
    let initNum = Number(input[index]);
    index++;
    let nextNum = Number(input[index]);
    index++;
    sum += nextNum;
       
    while (sum < initNum){
        nextNum = Number(input[index]);
        index++;
        sum += nextNum;
    }
    console.log(sum)

}

sumNumbers (["100",
"10",
"20",
"30",
"40"])



