function oscars(input) {

    let actor = String(input[0]);
    let score = Number(input[1]);    
    let memsNum = Number(input[2]);    

    for (let i = 3; i < input.length; i += 2) {
        let memName = String(input[i]);
        // console.log(memName)      
        score = score + (Number(input[i + 1])) * memName.length / 2;
        // console.log(score)
        if (score > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${score.toFixed(1)}!`)
            return;
        }
    }
    let balance = 1250.5 - score;
    console.log(`Sorry, ${actor} you need ${balance.toFixed(1)} more!`)

}

oscars (["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])