function previousDay(year, month, date) {

    let event = new Date;

    if (month == 12 && date != 31) {
        event.setFullYear(year, month - 1, date);
        console.log(`${event.getFullYear()}-${event.getMonth() + 1}-${event.getDate() - 1}`);
    } else if (month != 12 && date == 1) {
        event.setFullYear(year, month - 1, 0);
        console.log(`${event.getFullYear()}-${event.getMonth() + 1}-${event.getDate()}`);
    } else if (month == 1 && date == 1) {
        event.setFullYear(year, month - 1, 0);
        console.log(`${event.getFullYear() - 1}-${event.getMonth() + 1}-${event.getDate()}`);
    } else {
        event.setFullYear(year, month - 1, date);
        console.log(`${event.getFullYear()}-${event.getMonth() + 1}-${event.getDate() - 1}`);
    }
}

previousDay(2016, 12, 31)
console.log('---------');
previousDay(2015, 5, 31)
console.log('---------');
previousDay(2012, 3, 15)
console.log('---------');
previousDay(2012, 2, 1)
console.log('---------');
previousDay(2012, 1, 1)