function pieceOfPie(flavorsArray, tgtFlav1, tgtFlav2) {

    const filterStartIdx = flavorsArray.indexOf(tgtFlav1);
    const filterEndIdx = flavorsArray.indexOf(tgtFlav2);
    const filterdFlavorsArr = flavorsArray.slice(filterStartIdx, filterEndIdx + 1);

    return filterdFlavorsArr;
}

pieceOfPie(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)
console.log('----------------------------------');
pieceOfPie(
    [
        'Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
)