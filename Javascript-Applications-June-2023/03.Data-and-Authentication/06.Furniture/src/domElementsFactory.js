import { getFurnitureDataState } from "./states.js";
import { tableHeadersText } from "./constants.js";
import { hasUser } from "./getUserData.js";

const createH2Element = (text) => {
    const h2El = document.createElement('h2');
    h2El.textContent = text;

    return h2El;
};

const createFormElement = (config) => {
    const { form, labels, button } = config;
    const { action, method } = form.formAttributes;
    const { buttonText } = button;

    const formEl = document.createElement('form');
    formEl.setAttribute('action', action);
    formEl.setAttribute('method', method);

    labels.forEach(label => {
        const { inputAttributes, labelText } = label;
        const { name, type } = inputAttributes;
        const labelEl = document.createElement('label');
        labelEl.textContent = labelText;
        const inputEl = document.createElement('input');
        inputEl.setAttribute('type', type);
        inputEl.setAttribute('name', name);
        labelEl.appendChild(inputEl);
        formEl.appendChild(labelEl);
    });

    const buttonEl = createButton(buttonText, null);
    formEl.appendChild(buttonEl);
    formEl.addEventListener('submit', form.eventListener);

    return formEl;
};

const createButton = (text, eventListener) => {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = text;
    if (eventListener) {
        buttonEl.addEventListener('click', eventListener);
    }
    return buttonEl;
};

const createHrElement = () => {
    const hrElement = document.createElement('hr');
    return hrElement;
}

const createTable = () => {
    const tableEl = document.createElement('table');
    tableEl.classList.add('table');
    const theadEl = createTableHeader();
    const tbodyEl = createTableBody();
    tableEl.append(theadEl, tbodyEl);

    return tableEl;
};

const createTableHeader = () => {
    const tHeadEl = document.createElement('thead');
    const trEl = document.createElement('tr');
    tableHeadersText.forEach(text => {
        const thEl = document.createElement('th');
        thEl.textContent = text;
        trEl.appendChild(thEl);
    });
    tHeadEl.appendChild(trEl);

    return tHeadEl;
};

const createTableBody = () => {
    const tbodyEl = document.createElement('tbody');
    const furnitureData = getFurnitureDataState();
    furnitureData.forEach(item => {
        const trEl = createTableRow(item);
        tbodyEl.appendChild(trEl);
    });

    return tbodyEl;
};

const createTableRow = (itemData) => {
    const trEl = document.createElement('tr');
    const { _ownerId, name, price, factor, img, _id } = itemData;

    for (let i = 0; i < 5; i++) {
        const tdEl = document.createElement('td');
        switch (i) {
            case 0: {
                const imgEl = document.createElement('img');
                imgEl.setAttribute('src', img);
                tdEl.appendChild(imgEl);
                trEl.appendChild(tdEl);
                break;
            };
            case 1: {
                const pEl = document.createElement('p');
                pEl.textContent = name;
                tdEl.appendChild(pEl);
                trEl.appendChild(tdEl);
                break;
            }
            case 2: {
                const pEl = document.createElement('p');
                pEl.textContent = price;
                tdEl.appendChild(pEl);
                trEl.appendChild(tdEl);
                break;
            }
            case 3: {
                const pEl = document.createElement('p');
                pEl.textContent = factor;
                tdEl.appendChild(pEl);
                trEl.appendChild(tdEl);
                break;
            }
            case 4: {
                const inputEl = document.createElement('input');
                inputEl.setAttribute('type', 'checkbox');
                // console.log(hasUser());
                inputEl.disabled = hasUser() === false ? true : false;
                tdEl.appendChild(inputEl);
                trEl.appendChild(tdEl);
                break;
            }
        }
    }

    return trEl;
};

const createParagraphElements = (text) => {
    const pEl = document.createElement('p');
    pEl.textContent = text;
    return pEl;
};

export {
    createH2Element,
    createFormElement,
    createButton,
    createHrElement,
    createTable,
    createTableRow,
    createParagraphElements
}