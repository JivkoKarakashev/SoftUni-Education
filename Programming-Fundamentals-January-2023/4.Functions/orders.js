function orders(product, quantity) {
    
    console.log(printValue());

    function printValue(){
        
        let result = orderCalculate(product, quantity);
        return result.toFixed(2);
    }    

    function orderCalculate(product, quantity) {

        let price = 0;
        let totalPrice = 0;
        switch (product) {
            case 'coffee': price = 1.5; break;
            case 'water': price = 1; break;
            case 'coke': price = 1.4; break;
            case 'snacks': price = 2; break;
            default: ; break;
        }
        return totalPrice = (quantity * price);
    }
}

orders("water", 5);
orders("coffee", 2);