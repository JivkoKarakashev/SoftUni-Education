function tennisRanklist(input){

    let tournaments = Number(input[0]);
    let startPts = Number(input[1]);
    let trnmPts = 0;
    let winRate =0;

    for (let i = 2; i < input.length; i++){
        let trnmPos = String(input[i]);              
        // console.log(trnmPos)
        switch(trnmPos){
            case "W": trnmPts += 2000; winRate++;  break;
            case "F": trnmPts += 1200; break;
            case "SF": trnmPts += 720; break;
            default: trnmPts += 0; break;
        }
        // console.log(initPts)        
    }
    // console.log(trnmPts)
    console.log(`Final points: ${startPts + trnmPts}`)
    console.log(`Average points: ${Math.floor(trnmPts / tournaments)}`)
    console.log(`${(winRate / tournaments * 100).toFixed(2)}%`)
}

tennisRanklist (["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


