function attachEventsListeners() {
    const selectedInputElement = document.querySelector('select#inputUnits');
    const selectedOutputElement = document.querySelector('select#outputUnits')
    const convertButtElement = document.querySelector('input#convert');
    const inputFieldElement = document.querySelector('input#inputDistance');
    const ouputFieldElement = document.querySelector('input#outputDistance');
    // console.log(inputFieldElement);
    // console.log(ouputFieldElement);
    const conversionRateObj = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    };
    const convertButtEventHandler = () => {
        const inputUnits = conversionRateObj[selectedInputElement.value];
        const outputUnits = conversionRateObj[selectedOutputElement.value];
        const countInputUnits = inputFieldElement.value;
        ouputFieldElement.value = inputUnits / outputUnits * countInputUnits;
    };

    convertButtElement.addEventListener('click', convertButtEventHandler);
    // console.log(conversionRateObj);
}