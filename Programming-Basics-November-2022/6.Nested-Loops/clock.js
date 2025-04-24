function clock(){

    for(let hour = 0; hour < 24; hour++){
        for(minute = 0; minute < 60; minute++){
            console.log(`${hour}:${minute}`)
        }
    }
}

clock()