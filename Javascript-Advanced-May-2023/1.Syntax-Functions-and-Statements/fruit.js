function fruit(product, weight, price) {

    const kgWeight = weight / 1000;
    const totalPrice = kgWeight * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${product}.`);
}

fruit('orange', 2500, 1.80)
console.log('--------------------');
fruit('apple', 1563, 2.35)