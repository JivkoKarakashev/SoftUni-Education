function matchDates(inputArray){

    const strPattern = /(?<day>[0-9]{2})([.\-\/])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>[0-9]{4})/g;
    const validDateStr = inputArray.shift();
    let validDateArr = strPattern.exec(validDateStr);
    // console.log(validDateArr);

    while (validDateArr) {
        
        let day = validDateArr.groups['day'];
        let month = validDateArr.groups['month'];
        let year = validDateArr.groups['year'];;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        validDateArr = strPattern.exec(validDateStr);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
console.log('-------------------------------');
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])