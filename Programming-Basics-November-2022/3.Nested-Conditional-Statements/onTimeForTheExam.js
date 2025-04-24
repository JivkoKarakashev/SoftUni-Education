function onTimeForTheExam(input){

    let examHours = Number(input[0]);
    let examMins = Number(input[1]);
    let arrHours = Number(input[2]);
    let arrMins = Number(input[3]);
    let examHourToMins = examHours * 60;
    let arrHourToMins = arrHours * 60;
    let balance = examHourToMins + examMins - arrHourToMins - arrMins;

    if (balance <= -60){
        balance *= -1;
        console.log(`Late`)
        if (balance % 60 <=9 ){
            console.log(`${Math.floor(balance/ 60)}:0${balance % 60} hours after the start`)
        }
        else{
            console.log(`${Math.floor(balance/ 60)}:${balance % 60} hours after the start`)
        }
    }
    else if (balance > -60 && balance < -9){
        balance *= -1;
        console.log(`Late`)        
        console.log(`${balance} minutes after the start`)
    }
    else if (balance >= -9 && balance < 0){
        balance *= -1;
        console.log(`Late`)        
        console.log(`${balance} minutes after the start`)
        
    }
    else if (balance === 0 && balance < 1){
        console.log(`On time`)        
        // console.log(`0${balance} minutes after the start`)
        
    }
    else if (balance >= 1 && balance <= 9){
        console.log(`On time`)        
        console.log(`${balance} minutes before the start`)
        
    }
    else if (balance > 9 && balance <= 30){
        console.log(`On time`)        
        console.log(`${balance} minutes before the start`)
    }
    else if (balance > 30 && balance < 60){
        console.log(`Early`)        
        console.log(`${balance} minutes before the start`)
    }
    else if (balance >= 60){
        console.log(`Early`)
        if (balance % 60 <= 9){
            console.log(`${Math.floor(balance/ 60)}:0${balance % 60} hours before the start`)
        }
        else{
            console.log(`${Math.floor(balance/ 60)}:${balance % 60} hours before the start`)
        }
    }

}

onTimeForTheExam (["14",
"00",
"14",
"09"])











