function attachEventsListeners() {

    const convertButtonElements = Array.from(document.querySelectorAll('input[type=button]'));
    const inputFieldsElements = document.querySelectorAll('input[type=text]');

    // console.log(inputFieldsElements);
    const days = (value) => {
        const resultObj = {
            'days': value,
            'hours': value * 24,
            'minutes': value * 1440,
            'seconds': value * 86400,
        };
        return resultObj;
    };
    const hours = (value) => {
        const resultObj = {
            'days': value / 24,
            'hours': value,
            'minutes': value * 60,
            'seconds': value * 3600,
        };
        return resultObj;
    };
    const minutes = (value) => {
        const resultObj = {
            'days': value / 1440,
            'hours': value / 60,
            'minutes': value,
            'seconds': value * 60,
        };
        return resultObj;
    };
    const seconds = (value) => {
        const resultObj = {
            'days': value / 86400,
            'hours': value / 3600,
            'minutes': value / 60,
            'seconds': value,
        };
        return resultObj;
    };

    const convertResultObjCreator = (id, value) => {
        value = Number(value);
        const resultObj = {
            'days': days(value),
            'hours': hours(value),
            'minutes': minutes(value),
            'seconds': seconds(value), 
        };
        return resultObj[id];
        // console.log(newResultObj);
    }

    const convertButtonEventHandler = (e) => {
        const id = e.currentTarget.parentElement.children[1].id;
        const value = e.currentTarget.parentElement.children[1].value;
        const resultArr = Object.entries(convertResultObjCreator(id, value));
        // console.log(resultArr);
        for (let i = 0; i < resultArr.length; i++) {
            let [key, kValue] = [...resultArr[i]];
            // console.log(key);
            inputFieldsElements[i].value = kValue;
            // console.log(inputFieldsElements[i].value);
            
        }
    }
    for (const button of convertButtonElements) {
        // console.log(button.parentElement.children[1].id);    //id
        // console.log(button.parentElement.children[1].value); //value
        button.addEventListener('click', convertButtonEventHandler);
    }
}