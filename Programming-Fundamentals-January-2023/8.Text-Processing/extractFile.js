function extractFile(inputString) {

    const inputArray = inputString.split('\\');
    let inputArrayLength = inputArray.length;
    let file = inputArray[inputArrayLength - 1];
    let fileArray = file.split('.');
    let fileArrayLength = fileArray.length;
    let fileName = '';
    for (let i = 0; i < fileArrayLength - 1; i++) {
        let currFragment = fileArray[i];
        (i === fileArrayLength - 2)
        ? fileName += `${currFragment}`
        : fileName += `${currFragment}.`;
    }
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileArray[fileArrayLength - 1]}`);
}

extractFile('C:\\Internal\\training-internal\\Template.try.bak.pptx')