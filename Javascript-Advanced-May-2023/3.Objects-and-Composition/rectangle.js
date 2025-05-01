function rectangle(width, height, color) {

    const firstLetter = color[0];
    const firstLetterUp = color[0].toUpperCase();
    color = color.replace(firstLetter, firstLetterUp);

    const rectangleObj = {
        width,
        height,
        color,
    };

    rectangleObj.calcArea = () => {
        return rectangleObj['width'] * rectangleObj['height'];
    }
    
    return rectangleObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
