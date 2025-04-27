function computerStore(input) {

    let index = 0;
    let price = 0;
    let totalNetPrice = 0;
    let priceWithTaxes = 0;
    let taxes = 0;
    let currentCommand = input[index];

    while (currentCommand !== 'special' && currentCommand !== 'regular') {
        price = Number(currentCommand);
        if (price < 0) {
            console.log('Invalid price!')
            index++;
            currentCommand = input[index];
            continue;
        }
        totalNetPrice += price;
        taxes += price * 0.2;
        index++;
        currentCommand = input[index];
    }

    priceWithTaxes = totalNetPrice + taxes;
    if (currentCommand === 'special') {
        priceWithTaxes *= 0.9;
    }
    if (priceWithTaxes === 0) {
        console.log('Invalid order!')
    } else {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalNetPrice.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${priceWithTaxes.toFixed(2)}$`)
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'])
console.log('-----------------------------------------')
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])    
console.log('-----------------------------------------')
computerStore([
    'regular'
    ])       