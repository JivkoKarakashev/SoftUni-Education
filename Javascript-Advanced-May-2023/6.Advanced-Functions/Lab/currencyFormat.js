function createFormatter(separator, symbol, symbolFirst, func) {
    return (value) => func(separator, symbol, symbolFirst, value);
    // return currencyFormatter.bind(this, separator, symbol, symbolFirst);
}

function currencyFormatter (separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2, 2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    };
    
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));