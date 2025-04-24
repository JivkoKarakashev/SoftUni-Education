function multiplTable(){

    for(let multipl1 = 1; multipl1 <= 10; multipl1++){
        for(let multipl2 = 1; multipl2 <= 10; multipl2++){
            let product = multipl1 * multipl2;
            console.log(`${multipl1} * ${multipl2} = ${product}`)
        }
    }
}

multiplTable()