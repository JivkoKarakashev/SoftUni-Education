function trekkingMania(input){

    let groupNums = Number(input[0]);    
    let participants = 0;
    let musGroup = 0;
    let monBlGroup = 0;
    let kilimGroup = 0;
    let k2Group = 0;
    let everGroup = 0;

    for (let i = 1; i < input.length; i++){
        let groupSize = Number(input[i]);
        if (groupSize <= 5){
            musGroup += groupSize;
        }
        else if (groupSize > 5 && groupSize <= 12){
            monBlGroup += groupSize;
        }
        else if (groupSize > 12 && groupSize <= 25){
            kilimGroup += groupSize;
        }
        else if (groupSize > 25 && groupSize <= 40){
            k2Group += groupSize;
        }
        else if (groupSize > 40){
            everGroup += groupSize;
        }
        participants += groupSize;
        // console.log(groupSize)
    }
    // console.log(participants)
    console.log(`${(musGroup / participants * 100).toFixed(2)}%`)
    console.log(`${(monBlGroup / participants * 100).toFixed(2)}%`)
    console.log(`${(kilimGroup / participants * 100).toFixed(2)}%`)
    console.log(`${(k2Group / participants * 100).toFixed(2)}%`)
    console.log(`${(everGroup / participants * 100).toFixed(2)}%`)
}

trekkingMania (["5",
"25",
"41",
"31",
"250",
"6"])

