function furniture(inputArray) {

    const validLine = />>(?<furName>[A-Z]+([a-z]+)?)<<(?<furPrice>[0-9]+[.]?([0-9]+)?)!(?<furQuantity>[0-9]+)\b/g;
    const joinedArray = inputArray.join(', ');
    let validFurnArr = validLine.exec(joinedArray);
    let totalSpend = 0;

    console.log('Bought furniture:');

    while (validFurnArr) {
        let furName = validFurnArr.groups['furName'];
        let furPrice = Number(validFurnArr.groups['furPrice']);
        let furQuantity = Number(validFurnArr.groups['furQuantity']);
        totalSpend += (furQuantity * furPrice);
        console.log(furName);
        validFurnArr = validLine.exec(joinedArray);
        // console.log(validFurnArr);
    }
    console.log(`Total money spend: ${totalSpend.toFixed(2)}`);
}

furniture(
    [
        '>>Sofa<<312.23!3',
        '>>TV<<300!5',
        '>Invalid<<!5',
        'Purchase'
    ])
console.log('-----------------');
furniture(
    [
        '>>Laptop<<312.2323!3',
        '>>TV<<300.21314!5',
        '>Invalid<<!5',
        '>>TV<<300.21314!20',
        '>>Invalid<!5',
        '>>TV<<30.21314!5',
        '>>Invalid<<!!5',
        'Purchase'
    ])