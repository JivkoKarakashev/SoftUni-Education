window.addEventListener('load', solve);

function solve() {
    const allInputElementsArr = Array.from(document.querySelectorAll('div.container-text form > input'));
    const allInputElementsArrLength = allInputElementsArr.length;
    const nextStepButton = document.querySelector('button#next-btn');
    let allInputsValueArray = [];
    // console.log(nextStepButton);
    const ulTicketPreviewElement = document.querySelector('ul.ticket-info-list');
    // console.log(ulTicketPreviewElement);
    const ulConfirmTicketElement = document.querySelector('ul.confirm-ticket');
    // console.log(ulConfirmTicketElement);

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
        const liEl = document.createElement('li');
        liEl.className = 'ticket';
        const articleEl = document.createElement('article');
        const h3El = document.createElement('h3');
        h3El.textContent = `Name: ${inputValuesArr[0]} ${inputValuesArr[1]}`;
        const pDateEl = pElementCreator();
        pDateEl.textContent = `From date: ${inputValuesArr[3]}`;
        const pDaysEl = pElementCreator();
        pDaysEl.textContent = `For ${inputValuesArr[4]} days`;
        const pPeopleEl = pElementCreator();
        pPeopleEl.textContent = `For ${inputValuesArr[2]} people`;
        articleEl.appendChild(h3El);
        articleEl.appendChild(pDateEl);
        articleEl.appendChild(pDaysEl);
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
        ulTicketPreviewElement.appendChild(liEl);
        allInputsValueArray = JSON.parse(JSON.stringify(inputValuesArr));
        allInputElementsArr.forEach(el => el.value = '');
        nextStepButton.disabled = true;
    };
    const editButtonEventHandler = (e) => {
        e.currentTarget.parentElement.remove();
        nextStepButton.disabled = false;
        for (let i = 0; i < allInputElementsArrLength; i++) {
            allInputElementsArr[i].value = allInputsValueArray[i];
        }
    };
    const continueButtonEventHandler = (e) => {
        const liPreviewEl = e.currentTarget.parentElement;
        // console.log(liPreviewEl);
        liPreviewEl.className = 'ticket-content';
        liPreviewEl.children[1].className = 'confirm-btn';
        liPreviewEl.children[1].textContent = 'Confirm';
        liPreviewEl.children[1].addEventListener('click', confirmButtonEventHandler);
        liPreviewEl.children[2].className = 'cancel-btn';
        liPreviewEl.children[2].textContent = 'Cancel';
        liPreviewEl.children[2].addEventListener('click', cancelButtonEventHandler);
        ulConfirmTicketElement.appendChild(liPreviewEl);
    };
    const cancelButtonEventHandler = (e) => {
        e.currentTarget.parentElement.remove();
        nextStepButton.disabled = false;
    };
    const confirmButtonEventHandler = () => {
        const divMainEl = document.querySelector('div#main');
        divMainEl.remove();
        const bodyEl = document.querySelector('body');
        const h1El = document.createElement('h1');
        h1El.id = 'thank-you';
        h1El.textContent = 'Thank you, have a nice day!';
        const backButtonEl = buttonElementCreator();
        backButtonEl.id = 'back-btn';
        backButtonEl.textContent = 'Back';
        backButtonEl.type = 'submit';
        backButtonEl.addEventListener('click', () => location.reload());
        bodyEl.appendChild(h1El);
        bodyEl.appendChild(backButtonEl);
    };
    nextStepButton.addEventListener('click', nextStepButtonEventHandler);
}
