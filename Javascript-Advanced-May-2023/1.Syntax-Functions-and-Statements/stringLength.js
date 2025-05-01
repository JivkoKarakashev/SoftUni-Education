function stringLength(strA, strB, strC) {

    const concatResult = strA.concat(strB, strC);
    const concatResultLength = concatResult.length;
    const avgLgth = concatResultLength / 3;

    console.log(concatResultLength);
    console.log(Math.floor(avgLgth));
}

stringLength('chocolate', 'ice cream', 'cake')
console.log('--');
stringLength('pasta', '5', '22.3')