window.addEventListener('load', solution);

function solution() {
    const nameElement = document.querySelector('#fname');
    const emailElement = document.querySelector('#email');
    const phoneElement = document.querySelector('#phone');
    const addressElement = document.querySelector('#address');
    const postalElement = document.querySelector('#code');
    const submitButton = document.querySelector('input#submitBTN');
    const ulPreviewElement = document.querySelector('ul#infoPreview');
    // console.log(ulPreviewElement);
    const editButton = document.querySelector('#editBTN');
    const continueButton = document.querySelector('#continueBTN');
    editButton.addEventListener('click', editButtonEventHandler);
    continueButton.addEventListener('click', continueButtonEventHandler);
    // console.log(editButton);
    const divBlockElement = document.querySelector('div#block');
    // console.log(divBlockElement);
    const divBlockH1Element = document.querySelector('h1');
    const divBlockH4Element = document.querySelector('h4');
    const divBlockdivFormElement = document.querySelector('div#form');
    const divBlockdivInfoElement = document.querySelector('div#information');
    const divBlockFooterElement = document.querySelector('footer');

    const liElementCreator = (textContent) => {
        const liElement = document.createElement('li');
        liElement.textContent = textContent;
        return liElement;
    };
    function editButtonEventHandler() {
        let [, nameValue] = ulPreviewElement.children[0].textContent.split(': ');
        nameElement.value = nameValue;
        let [, emailValue] = ulPreviewElement.children[1].textContent.split(': ');
        emailElement.value = emailValue;
        let [, phonelValue] = ulPreviewElement.children[2].textContent.split(': ');
        phoneElement.value = phonelValue;
        let [, addressValue] = ulPreviewElement.children[3].textContent.split(': ');
        addressElement.value = addressValue;
        let [, postalValue] = ulPreviewElement.children[4].textContent.split(': ');
        postalElement.value = postalValue;

        editButton.disabled = true;
        continueButton.disabled = true;
        submitButton.disabled = false;

        ulPreviewElement.lastChild.remove();
        ulPreviewElement.lastChild.remove();
        ulPreviewElement.lastChild.remove();
        ulPreviewElement.lastChild.remove();
        ulPreviewElement.lastChild.remove();
    }
    function continueButtonEventHandler() {
        divBlockH1Element.remove();
        divBlockH4Element.remove();
        divBlockdivFormElement.remove();
        divBlockdivInfoElement.remove();
        divBlockFooterElement.remove();
        const h3El = document.createElement('h3');
        h3El.textContent = 'Thank you for your reservation!';
        divBlockElement.appendChild(h3El);
    }
    function submitButtonEventHandler(e) {
        e.preventDefault();
        if (!nameElement.value || !emailElement.value) {
            return;
        }

        const liNameEl = liElementCreator(`Full Name: ${nameElement.value}`);
        ulPreviewElement.appendChild(liNameEl);
        const liEmailEl = liElementCreator(`Email: ${emailElement.value}`);
        ulPreviewElement.appendChild(liEmailEl);
        const liPhoneEl = liElementCreator(`Phone Number: ${phoneElement.value}`);
        ulPreviewElement.appendChild(liPhoneEl);
        const liAddressEl = liElementCreator(`Address: ${addressElement.value}`);
        ulPreviewElement.appendChild(liAddressEl);
        const liPostalEl = liElementCreator(`Postal Code: ${postalElement.value}`);
        ulPreviewElement.appendChild(liPostalEl);

        nameElement.value = '';
        emailElement.value = '';
        phoneElement.value = '';
        addressElement.value = '';
        postalElement.value = '';
        submitButton.disabled = true;

        editButton.disabled = false;
        continueButton.disabled = false;
    }
    submitButton.addEventListener('click', submitButtonEventHandler);
}