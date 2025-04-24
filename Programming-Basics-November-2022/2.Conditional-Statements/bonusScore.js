function bonusScore(input){
    let entryScore = Number(input[0]);
    let bonusScore = 0;
    
    if(entryScore <= 100){
        bonusScore = 5;
    }
    else if(entryScore < 1000){
        bonusScore = entryScore * 20 / 100;
    }
    else{
        bonusScore = entryScore * 10 / 100;
    }
    if(entryScore % 2 === 0){
        bonusScore += 1;
    }
    else if(entryScore % 10 === 5){
        bonusScore += 2;
    }

    let totalScore = entryScore + bonusScore;
    console.log(bonusScore);
    console.log(totalScore);
}

bonusScore (["20"])