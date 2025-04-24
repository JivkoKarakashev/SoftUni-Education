function lunchBreak(input){
    
    let seriesTitle = input[0];
    let epLength = Number(input[1]); //mins
    let brTime = Number(input[2]) ; //mins
    let lunchTime = brTime/8;
    let restTime = brTime/4;
    let timeLeft = brTime - lunchTime - restTime;
    // console.log(`${brTime}-${lunchTime}-${restTime}-${epLength}`)
    // console.log(timeLeft)
    
    if(timeLeft >= epLength){
        timeLeft = Math.ceil(brTime - lunchTime - restTime - epLength);
        console.log(`You have enough time to watch ${seriesTitle} and left with ${timeLeft} minutes free time.`)
    }
    else {
        timeLeft = Math.ceil(-(brTime - lunchTime - restTime -epLength))
        console.log(`You don't have enough time to watch ${seriesTitle}, you need ${timeLeft} more minutes.`)
    }    
}

lunchBreak (["Teen Wolf",
"48",
"60"])






