function requiredReading(pages, pagesPerHour, days){

    let readingHoursNeeds = pages / pagesPerHour;
    let readingHoursPerDayNeeds = readingHoursNeeds / days;

    console.log(readingHoursPerDayNeeds)
}

requiredReading(432,
    15 ,
    4 
    )