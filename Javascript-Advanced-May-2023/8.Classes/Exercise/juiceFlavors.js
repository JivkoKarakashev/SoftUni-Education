function juiceFlavors(inpuArray) {

    const bottlesMap = new Map();
    const juicesObj = {};

    for (const currLine of inpuArray) {
        let [juice, quantity] = currLine.split(' => ');
        quantity = Number(quantity);
        if (!juicesObj.hasOwnProperty(juice)) {
            juicesObj[juice] = 0;
        }
        juicesObj[juice] += quantity;
        if (juicesObj[juice] >= 1000) {
           if (!bottlesMap.has(juice)) {
             bottlesMap.set(juice, Math.trunc(juicesObj[juice] / 1000));
           } else {
            let newQtty = bottlesMap.get(juice) + Math.trunc(juicesObj[juice] / 1000);
            bottlesMap.set(juice, newQtty);
            
           }
           juicesObj[juice] = juicesObj[juice] % 1000;
        }
    }
    // console.log(juicesObj);
    for (const kvp of bottlesMap) {
        console.log(`${kvp[0]} => ${kvp[1]}`);
    }
}

juiceFlavors(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ])