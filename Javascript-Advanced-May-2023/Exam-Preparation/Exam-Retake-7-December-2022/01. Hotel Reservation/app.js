window.addEventListener('load', solve);

function solve() {
    const allInputElementsArr = Array.from(document.querySelectorAll('div.container-text form > input'));
    const allInputElementsArrLength = allInputElementsArr.length;
    const nextStepButton = document.querySelector('button#next-btn');
    let allInputsValueArray = [];
    // console.log(nextStepButton);
    const ulReservationElement = document.querySelector('ul.info-list');
    // console.log(ulReservationElement);
    const ulConfirmListElement = document.querySelector('ul.confirm-list');
    const complateh1Element = document.querySelector('h1#verification');

    const pElementCreator = () => document.createElement('p');
    const buttonElementCreator = () => document.createElement('button');

    const nextStepButtonEventHandler = (e) => {
        e.preventDefault();
        for (let inputEl of allInputElementsArr) {
            if (!inputEl.value) {
                return;
            }
        }
        let inputValuesArr = [];
        allInputElementsArr.forEach((el) => inputValuesArr.push(el.value));
        const checkInDate = new Date(inputValuesArr[2]);
        const checkOutDate = new Date(inputValuesArr[3]);
        if (checkInDate >= checkOutDate) {
            return;
        }
        const liEl = document.createElement('li');
        liEl.className = 'reservation-content';
        const articleEl = document.createElement('article');
        const h3El = document.createElement('h3');
        h3El.textContent = `Name: ${inputValuesArr[0]} ${inputValuesArr[1]}`;
        const pFromDateEl = pElementCreator();
        pFromDateEl.textContent = `From date: ${inputValuesArr[2]}`;
        const pToDateEl = pElementCreator();
        pToDateEl.textContent = `To date: ${inputValuesArr[3]}`;
        const pPeopleEl = pElementCreator();
        pPeopleEl.textContent = `For ${inputValuesArr[4]} people`;
        articleEl.appendChild(h3El);
        articleEl.appendChild(pFromDateEl);
        articleEl.appendChild(pToDateEl);
        articleEl.appendChild(pPeopleEl);
        liEl.appendChild(articleEl);
        const editButtonEl = buttonElementCreator();
        editButtonEl.className = 'edit-btn';
        editButtonEl.textContent = 'Edit';
        editButtonEl.addEventListener('click', editButtonEventHandler);
        const continueButtonEl = buttonElementCreator();
        continueButtonEl.className = 'continue-btn';
        continueButtonEl.textContent = 'Continue';
        continueButtonEl.addEventListener('click', continueButtonEventHandler);
        liEl.appendChild(editButtonEl);
        liEl.appendChild(continueButtonEl);
        ulReservationElement.appendChild(liEl);
        allInputsValueArray = JSON.parse(JSON.stringify(inputValuesArr));
        allInputElementsArr.forEach(el => el.value = '');
        nextStepButton.disabled = true;
    };
    const editButtonEventHandler = (e) => {
        // console.log(e.currentTarget);
        e.currentTarget.parentElement.remove();
        nextStepButton.disabled = false;
        for (let i = 0; i < allInputElementsArrLength; i++) {
            allInputElementsArr[i].value = allInputsValueArray[i];
        }
    };
    const continueButtonEventHandler = (e) => {
        // console.log(e.currentTarget);
        const liPreviewEl = e.currentTarget.parentElement;
        // console.log(liPreviewEl);
        liPreviewEl.className = 'reservation-content';
        liPreviewEl.children[1].className = 'confirm-btn';
        liPreviewEl.children[1].textContent = 'Confirm';
        liPreviewEl.children[1].addEventListener('click', confirmButtonEventHandler);
        liPreviewEl.children[2].className = 'cancel-btn';
        liPreviewEl.children[2].textContent = 'Cancel';
        liPreviewEl.children[2].addEventListener('click', cancelButtonEventHandler);
        ulConfirmListElement.appendChild(liPreviewEl);
    };
    const confirmButtonEventHandler = (e) => {
        // console.log(e.currentTarget.parentElement);
        e.currentTarget.parentElement.remove();
        nextStepButton.disabled = false;
        // console.log(complateh1Element);
        complateh1Element.className = 'reservation-confirmed';
        complateh1Element.textContent = 'Confirmed.';
    };
    const cancelButtonEventHandler = (e) => {
        // console.log(e.currentTarget);
        e.currentTarget.parentElement.remove();
        nextStepButton.disabled = false;
        // console.log(complateh1Element);
        complateh1Element.className = 'reservation-cancelled';
        complateh1Element.textContent = 'Cancelled.';
    };
    nextStepButton.addEventListener('click', nextStepButtonEventHandler);
}