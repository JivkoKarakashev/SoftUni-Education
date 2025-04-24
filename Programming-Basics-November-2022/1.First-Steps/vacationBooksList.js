function vacationBooksList(input){
    let pages = Number(input[0]);
    let readPagesHour = Number(input[1]);
    let days = Number(input[2]);
    let readPagesDay = pages / readPagesHour / days;
    console.log(readPagesDay)
}

vacationBooksList(["212" , "20", "2"])