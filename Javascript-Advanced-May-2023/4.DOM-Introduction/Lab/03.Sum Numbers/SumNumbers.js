function calc() {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    const result = num1 + num2;
    document.querySelector('#sum').value = result;
}
