function worldSwimmingRecord(input){
    let recordTime = Number(input[0]); //seconds
    let distance = Number(input[1]); //meters
    let speed = 1 / Number(input[2]); //m/sec
    let timeDelay = Math.floor(distance / 15) * 12.5; //sec
    let swimTime = distance / speed + timeDelay;

    // console.log(speed)
    // console.log(timeDelay)
    // console.log(swimTime)

    if(swimTime < recordTime){
        console.log(`Yes, he succeeded! The new world record is ${swimTime.toFixed(2)} seconds.`)
    }
    else{
        let needTime = swimTime - recordTime;
        console.log(`No, he failed! He was ${needTime.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord (["10464",
"1500",
"20"])

