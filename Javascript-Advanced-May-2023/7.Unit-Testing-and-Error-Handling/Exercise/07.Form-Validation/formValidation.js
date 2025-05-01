function validate() {
    const usernameRegEx = /^[A-Za-z0-9]{3,20}$/;
    const emailRegEx = /^[^@.]+@[^@]*\.[^@]*$/;
    const passwordRegEx = /^\w{5,15}$/;
    const confirmPasswordRegEx = /^\w{5,15}$/;

    const usernameFieldElement = document.querySelector('div#wrapper > form#registerForm > fieldset#userInfo > div.pairContainer:nth-child(2) > input#username');
    const emailFieldElement = document.querySelector('div#wrapper > form#registerForm > fieldset#userInfo > div.pairContainer:nth-child(3) > input#email');
    const passwordFieldElement = document.querySelector('div#wrapper > form#registerForm > fieldset#userInfo > div.pairContainer:nth-child(4) > input#password');
    const confirmPasswordFieldElement = document.querySelector('div#wrapper > form#registerForm > fieldset#userInfo > div.pairContainer:nth-child(5) > input#confirm-password');
    const isCompanyStatus = document.querySelector('div#wrapper > form#registerForm > fieldset#userInfo > div.pairContainer:nth-child(6) > input#company');
    const companyInfoFieldElement = document.querySelector('div#wrapper > form#registerForm > fieldset#companyInfo');
    const submitButtonElement = document.querySelector('div#wrapper > form#registerForm > button#submit');

    const divValidElement = document.querySelector('div#valid');
    // console.log(divValidElement);

    const borderStyleFunc = (el, elRegEx) => {
        if (!elRegEx.test(el.value)) {
            el.style.borderColor = 'red';
        } else {
            el.style.borderColor = '';
        }
    };
    const companyNumberFiledBorderStyleFunc = () => {
        const companyNumberFieldElement = companyInfoFieldElement.children[1].children[1];
        if (companyNumberFieldElement.value < 1000 || companyNumberFieldElement.value > 9999) {
            companyNumberFieldElement.style.borderColor = 'red';
        } else {
            companyNumberFieldElement.style.borderColor = '';
        }
    };
    const passwordsEquality = (passEl, confrimPassEl) => {
        if (passEl.value !== confrimPassEl.value) {
            passEl.style.borderColor = 'red';
            confrimPassEl.style.borderColor = 'red';
            // console.log(passEl.value);
        } else {
            if (!passwordRegEx.test(passEl.value) || !confirmPasswordRegEx.test(confrimPassEl.value)) {
                passEl.style.borderColor = 'red';
                confrimPassEl.style.borderColor = 'red';
            } else {
                passEl.style.borderColor = '';
                confrimPassEl.style.borderColor = '';
            }
        }
    };
    const allFieldsValidityFunc = () => {
        let allFieldsValidity = true;
        const allInputFieldsElementsArr = Array.from(document.querySelectorAll('div.pairContainer > input'));
        const companyNumberFieldElement = allInputFieldsElementsArr.pop();
        const isCompanyStatusElement = allInputFieldsElementsArr.pop();
        for (const inputField of allInputFieldsElementsArr) {
            if (inputField.style.borderColor === 'red') {
                allFieldsValidity = false;
            }
        }
        if (isCompanyStatusElement.checked) {
            if (companyNumberFieldElement.style.borderColor === 'red') {
                allFieldsValidity = false;
            }
        }
        return allFieldsValidity;
    };
    const isCompanyStatusEventHandler = () => {
        if (isCompanyStatus.checked) {
            companyInfoFieldElement.style.display = '';
        } else {
            companyInfoFieldElement.style.display = 'none';
        }
    };
    const submitButtonEventHandler = (e) => {
        e.preventDefault();
        borderStyleFunc(usernameFieldElement, usernameRegEx);
        borderStyleFunc(emailFieldElement, emailRegEx);
        borderStyleFunc(passwordFieldElement, passwordRegEx);
        borderStyleFunc(confirmPasswordFieldElement, confirmPasswordRegEx);
        passwordsEquality(passwordFieldElement, confirmPasswordFieldElement);
        if (isCompanyStatus.checked) {
            companyNumberFiledBorderStyleFunc();
        }
        if (allFieldsValidityFunc() === true) {
            divValidElement.style.display = '';
        } else {
            divValidElement.style.display = 'none';
        }
    };

    isCompanyStatus.addEventListener('change', isCompanyStatusEventHandler);
    submitButtonElement.addEventListener('click', submitButtonEventHandler);
}