function meetings(inputArray){

    const meetingsList = {};
    inputArray.forEach(el => {
        let [day, name] = el.split(' ');
        if (meetingsList[day]){
            console.log(`Conflict on ${day}!`)
        } else {
            meetingsList[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (const key in meetingsList) {
        console.log(`${key} -> ${meetingsList[key]}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])