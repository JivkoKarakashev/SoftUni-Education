function areaOfFigures(input) {
    //figure type = square, rectangle, circle или triangle
    let figType = input[0];
    let a = Number(input[1]);
    let area = 0;

    if (figType === "square") {
        area = a * a;
    }
    else if (figType === "rectangle") {
        let b = Number(input[2]);
        area = a * b;
    }
    else if (figType === "circle") {
        // let area = Math.PI * r * r;
        area = Math.PI * Math.pow(a,2);
    }
    else if (figType === "triangle") {
        let ha = Number(input[2]);
        area = a * ha / 2;
    }
    console.log(area.toFixed(3));
}

areaOfFigures (["circle", "6"])