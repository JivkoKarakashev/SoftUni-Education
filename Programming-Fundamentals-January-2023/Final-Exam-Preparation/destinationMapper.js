function destinationMapper(inputString) {

    const validPlacesPatern = /([=\/])(?<place>[A-Z]{1}[A-Za-z]{2,})\1/g;
    const validPlacesArr = [];
    let totalTravelPoints = 0;

    let validPlaceArr = validPlacesPatern.exec(inputString);
    // console.log(validPlaceArr);

    while (validPlaceArr) {
        let validPlaceStr = validPlaceArr.groups['place'];
        let travelPoints = validPlaceStr.length;
        totalTravelPoints += travelPoints;
        validPlacesArr.push(validPlaceStr);
        validPlaceArr = validPlacesPatern.exec(inputString);
    }
    console.log(`Destinations: ${validPlacesArr.join(', ')}`);
    console.log(`Travel Points: ${totalTravelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
console.log('----------------------------------');
destinationMapper("ThisIs some InvalidInput")