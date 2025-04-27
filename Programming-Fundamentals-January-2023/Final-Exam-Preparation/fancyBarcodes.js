function fancyBarcodes(inputArray) {

    const barcodesCount = Number(inputArray.shift());
    const validBarcodeRegEx = /@#+(?<barcode>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})@#+/;
    const digitRegEx = /[0-9]/g;

    for (let i = 0; i < barcodesCount; i++) {
        let currLine = inputArray[i];
        if (!validBarcodeRegEx.test(currLine)) {
            console.log('Invalid barcode');
            continue;
        }
        let currProdGroup = '00';
        if (digitRegEx.test(currLine)) {
            currProdGroup = '';
            let currDigitsArr = currLine.match(digitRegEx);
            currProdGroup = currDigitsArr.reduce((acc, currDig) => acc += currDig, '');
        }
        console.log(`Product group: ${currProdGroup}`);
    }
}

fancyBarcodes(
    [
        "3",
        "@#FreshFisH@#",
        "@###Brea0D@###",
        "@##Che4s6E@##"
    ])
console.log('---------------');
fancyBarcodes(
    [
        "6",
        "@###Val1d1teM@###",
        "@#ValidIteM@#",
        "##InvaliDiteM##",
        "@InvalidIteM@",
        "@#Invalid_IteM@#",
        "@#ValiditeM@#"
    ])
