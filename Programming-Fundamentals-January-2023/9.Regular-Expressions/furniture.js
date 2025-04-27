function furniture(inputArray){

    const validLine = />>(?<furName>[A-Z]+([a-z]+)?)<<(?<furPrice>[0-9]+[.]?([0-9]+)?)!(?<furQuantity>[0-9]+)\b/g;
    let currLine = inputArray.shift();
    let validFurnArr = [...currLine.matchAll(validLine)];
    let totalSpend = 0;
    
    console.log('Bought furniture:');
    
    while (currLine !== 'Purchase'){
        if (validFurnArr.length !== 0){            
            let furName = validFurnArr[0][1];
            let furPrice = Number(validFurnArr[0][3]);
            let furQuantity = Number(validFurnArr[0][5]);
            totalSpend += (furQuantity * furPrice);
            console.log(furName);
        }
        currLine = inputArray.shift();
        validFurnArr = [...currLine.matchAll(validLine)];
        // console.log(currLine);
    }
    console.log(`Total money spend: ${totalSpend.toFixed(2)}`);
}

furniture(
[   '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])
console.log('-----------------');
furniture(
    ['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
])