function triangleArea(sideA, sideB, sideC){

    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(semiPerimeter*(semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC))

    console.log(area)
}

triangleArea(3,
    5.5,
    4)