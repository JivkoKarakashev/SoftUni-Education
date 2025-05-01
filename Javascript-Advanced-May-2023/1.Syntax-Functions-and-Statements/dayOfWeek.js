function dayOfWeek(weekDayStr) {

    let printNumber;

    switch(weekDayStr){

        case 'Monday': printNumber = 1; break;
        case 'Tuesday': printNumber = 2; break;
        case 'Wednesday': printNumber = 3; break;
        case 'Thursday': printNumber = 4; break;
        case 'Friday': printNumber = 5; break;
        case 'Saturday': printNumber = 6; break;
        case 'Sunday': printNumber = 7; break;
        default: printNumber = 'error'; break;
    }
    console.log(printNumber);
}

dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('Invalid')