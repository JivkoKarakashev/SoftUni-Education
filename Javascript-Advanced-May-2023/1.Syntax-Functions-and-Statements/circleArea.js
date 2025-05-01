function circleArea(input) {

    if (typeof input === 'number') {
        let circArea = Math.PI * Math.pow(input, 2);
        console.log(circArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

circleArea(5)
console.log('-------------------------------');
circleArea('name')