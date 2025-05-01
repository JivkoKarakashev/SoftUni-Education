function daysInAMonth(month, year) {

    let event = new Date();
    event.setFullYear(year, month, 0);
    const daysCount = event.getDate();
    
    console.log(daysCount);
}

daysInAMonth(1, 2012)
console.log('--');
daysInAMonth(2, 2021)