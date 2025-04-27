function softUniBarIncome(inputArray){

    const validOrder = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<quantity>[0-9]+)\|[^|$%.]*?(?<price>\d+([.][\d]+)?)\$/g;
    let index = 0;
    let currValidLIneArr = [...inputArray[index].matchAll(validOrder)];
    let totalIncome = 0;
    // console.log(currValidLIneArr);
    while (inputArray[index] !== 'end of shift') {
        if (currValidLIneArr.length !== 0){
            let name = currValidLIneArr[0][1];
            let product = currValidLIneArr[0][2];
            let quantity = Number(currValidLIneArr[0][3]);
            let price = Number(currValidLIneArr[0][4]);
            let totalPrice = quantity * price;
            totalIncome += totalPrice;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        index++;
        currValidLIneArr = [...inputArray[index].matchAll(validOrder)];
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(
[   
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
console.log('--------------------');
softUniBarIncome(
[   
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])
console.log('--------------------');
softUniBarIncome(
[   
    '%Valid%<Valid>valid|10|valid1.66666$',
    'end of shift'
])