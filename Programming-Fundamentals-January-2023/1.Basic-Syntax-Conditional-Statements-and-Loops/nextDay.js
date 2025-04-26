function nextDay(year, month, day) {

    let tomorrow = new Date([year, month, day]);
    tomorrow.setDate(tomorrow.getDate() + 1);
    let mo = '' + (tomorrow.getMonth() + 1);
    let da = '' + tomorrow.getDate();
    let ye = 0;
    if (year < 1900) {
        // year = 0;
        ye = 1900 + year;
    } else {
        ye = tomorrow.getFullYear();
    }

    console.log(`${ye}-${mo}-${da}`);
}

nextDay(2020, 3, 24)
nextDay(2016, 12, 31)
nextDay(1901, 1, 1)