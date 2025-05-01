function roadRadar(speed, area) {

    speed = Number(speed);
    let speedLimit, difference, infractionStatus;

    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
        default: ; break;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
            infractionStatus = 'speeding';
        } else if (difference <= 40) {
            infractionStatus = 'excessive speeding';
        } else {
            infractionStatus = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${infractionStatus}`);
    }
}

roadRadar(40, 'city')
console.log('-----------------------------------------------');
roadRadar(21, 'residential')
console.log('-----------------------------------------------');
roadRadar(120, 'interstate')
console.log('-----------------------------------------------');
roadRadar(200, 'motorway')