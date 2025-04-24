function hotelRoom(input){

    let month = input[0];
    let days = Number(input[1]);
    let stdAccomm = 0;
    let apAccomm = 0;

    if (month === "May" || month === "October"){
        apAccomm = days * 65;
        stdAccomm = days * 50;
        if (days > 7 && days <= 14){
            stdAccomm -= stdAccomm * 5 / 100;           
        }
        else if (days > 14){
            apAccomm -= apAccomm * 10 / 100;
            stdAccomm -= stdAccomm * 30 / 100;            
        }
    }
    else if (month === "June" || month === "September"){
        apAccomm = days * 68.7;
        stdAccomm = days * 75.2;
        if (days > 14){            
            apAccomm -= apAccomm * 10 / 100;
            stdAccomm -= stdAccomm * 20 / 100;            
        }
    }
    else if (month === "July" || month === "August"){
        apAccomm = days * 77;
        stdAccomm = days *76;
        if (days > 14){
            apAccomm -= apAccomm * 10 / 100;            
        }
    }
    console.log(`Apartment: ${apAccomm.toFixed(2)} lv.`)
    console.log(`Studio: ${stdAccomm.toFixed(2)} lv.`)
    
}

hotelRoom (["August",
"20"])











