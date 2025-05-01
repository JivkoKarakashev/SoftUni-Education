function calculator() {

    // const selectA = document.querySelector('input#num1');
    // const selectB = document.querySelector('input#num2');
    // const result = document.querySelector('input#result');
    // const sumButtonElement = document.querySelector('button#sumButton');
    // const subtractButtonElement = document.querySelector('button#subtractButton');
    
    const init = (select1, select2, resultSelect) => {
        select1 = document.querySelector('input#num1');
        select2 = document.querySelector('input#num2');
        resultSelect = document.querySelector('input#result');
        const initObj = {
            select1,
            select2,
            resultSelect,
        };
        return initObj;
    };
    const add = () => {
        const obj = init();
        return obj.resultSelect.value = Number(obj.select1.value) + Number(obj.select2.value);
    };
    const subtract = () => {
        const obj = init();
        return obj.resultSelect.value = Number(obj.select1.value) - Number(obj.select2.value);
    };

    const calculate = {
        init,
        add,
        subtract,
    };

    // const sumButtoenEventHandler = () => {
    //     calculate.add();
    // };
    // const subtractButtonEventHandler = () => {
    //     calculate.subtract();
    // };

    // sumButtonElement.addEventListener('click', sumButtoenEventHandler);
    // subtractButtonElement.addEventListener('click', subtractButtonEventHandler);

    return calculate;
}




