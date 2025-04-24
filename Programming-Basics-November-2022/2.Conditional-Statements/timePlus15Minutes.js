function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;
    let hoursTominutes = hours * 60;
    let sumOfMinutes = minutesPlus15 + hoursTominutes;
    if (sumOfMinutes / 1440 < 1) {
        if (sumOfMinutes % 60 < 9) {
            hours = Math.floor(sumOfMinutes / 60);
            minutes = sumOfMinutes % 60;
            console.log(`${hours}:0${minutes}`)
        }
        else {
            hours = Math.floor(sumOfMinutes / 60);
            minutes = sumOfMinutes % 60;
            console.log(`${hours}:${minutes}`)
        }
    }
    else if (sumOfMinutes / 1440 === 1) {
        hours = 0;
        minutes = sumOfMinutes % 60;
        console.log(`${hours}:0${minutes}`)
    }
    else if (sumOfMinutes / 1440 > 1) {
        if (sumOfMinutes % 1440 < 9) {
            hours = 0;
            minutes = sumOfMinutes % 60;
            console.log(`${hours}:0${minutes}`)
        }
        else {
            hours = 0;
            minutes = sumOfMinutes % 60;
            console.log(`${hours}:${minutes}`)
        }
    }
}
timePlus15Minutes(["23", "59"])