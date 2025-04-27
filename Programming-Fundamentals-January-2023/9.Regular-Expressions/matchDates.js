function matchDates(inputArray){

    const strPattern = /(?<day>[0-9]{2})([.\-\/])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>[0-9]{4})/g;
    const validDateStr = inputArray.shift();
    const validDateArr = [...validDateStr.matchAll(strPattern)];
    // console.log(validDateArr);

    for (let currDate of validDateArr) {
        let day = currDate[1];
        let month = currDate[3];
        let year = currDate[4];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
console.log('-------------------------------');
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])