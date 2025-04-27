function dayOfWeek(weekDay){

    let weekDaysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = weekDay - 1;

    if (weekDay >= 1 && weekDay <=7){
        console.log(weekDaysArray[index]);
    } else {
        console.log('Invalid day!')
    }
}

dayOfWeek(1)