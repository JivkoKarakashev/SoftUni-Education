window.addEventListener('load', solve);

function solve() {
    const productTypeElement = document.querySelector('select#type-product');
    const descriptionElement = document.querySelector('textarea#description');
    const clientNameElement = document.querySelector('input#client-name');
    const clientPhoneElement = document.querySelector('input#client-phone');
    const sendFormButton = document.querySelector('button[type="submit"]');
    // console.log(sendFormButton);
    const rereceivedOrdersSectionElement = document.querySelector('section#received-orders');
    // console.log(rereceivedOrdersSectionElement);
    const completedOrdersSectionElement = document.querySelector('section#completed-orders');
    const clearButton = document.querySelector('button.clear-btn');
    // console.log(clearButton);

    const sendFormButtonEventHandler = (e) => {
        e.preventDefault();
        if (!descriptionElement.value || !clientNameElement.value || !clientPhoneElement.value) {
            return;
        }
        const divEl = document.createElement('div');
        divEl.className = 'container';
        const h2El = document.createElement('h2');
        h2El.textContent = `Product type for repair: ${productTypeElement.value}`;
        const h3El = document.createElement('h3');
        h3El.textContent = `Client information: ${clientNameElement.value}, ${clientPhoneElement.value}`;
        const h4El = document.createElement('h4');
        h4El.textContent = `Description of the problem: ${descriptionElement.value}`;
        const buttonStart = document.createElement('button');
        buttonStart.className = 'start-btn';
        buttonStart.textContent = 'Start repair';
        buttonStart.addEventListener('click', buttonStartEventHandler);
        const buttonFinish = document.createElement('button');
        buttonFinish.className = 'finish-btn';
        buttonFinish.disabled = true;
        buttonFinish.textContent = 'Finish repair';
        buttonFinish.addEventListener('click', buttonFinishEventHandler);
        divEl.appendChild(h2El);
        divEl.appendChild(h3El);
        divEl.appendChild(h4El);
        divEl.appendChild(buttonStart);
        divEl.appendChild(buttonFinish);
        rereceivedOrdersSectionElement.appendChild(divEl);
        productTypeElement.value = '';
        descriptionElement.value = '';
        clientNameElement.value = '';
        clientPhoneElement.value = '';
    };
    const buttonStartEventHandler = (e) => {
        const finishBtn = e.currentTarget.parentElement.lastChild;
        // console.log(finishBtn);
        finishBtn.disabled = false;
        e.currentTarget.disabled = true;
    };
    const buttonFinishEventHandler = (e) => {
        const divEl = e.currentTarget.parentElement;
        const buttonsArr = Array.from(e.currentTarget.parentElement.querySelectorAll('button'));
        // console.log(buttonsArr);
        buttonsArr.forEach(button => button.remove());
        completedOrdersSectionElement.appendChild(divEl);
    };
    const clearButtonEventHandler = (e) => {
        const allCompletedOrdersArray = Array.from(e.currentTarget.parentElement.querySelectorAll('div.container'));
        if (allCompletedOrdersArray.length !== 0) {
            allCompletedOrdersArray.forEach(completedOrder => completedOrder.remove());
        }
    };
    sendFormButton.addEventListener('click', sendFormButtonEventHandler);
    clearButton.addEventListener('click', clearButtonEventHandler);
}