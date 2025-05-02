window.addEventListener('load', solve);

function solve() {
    const modelElement = document.querySelector('input#model');
    const yearElement = document.querySelector('input#year');
    const descriptionElement = document.querySelector('textarea#description');
    const priceElement = document.querySelector('input#price');
    const allInputElementsArr = [];
    allInputElementsArr.push(modelElement, yearElement, descriptionElement, priceElement);
    const addButton = document.querySelector('button#add');
    // console.log(addButton);
    const tbodyElement = document.querySelector('tbody#furniture-list');
    const totalPriceElement = document.querySelector('td.total-price');
    let totalPrice = Number(totalPriceElement.textContent);
    // console.log(totalPriceElement.textContent);

    const trElementCreator = (className) => {
        const trElement = document.createElement('tr');
        trElement.className = className;
        return trElement;
    };
    const tdElementCreator = () => document.createElement('td');
    const buttonElementCreator = (className, textContent) => {
        const buttonEl = document.createElement('button');
        buttonEl.className = className;
        buttonEl.textContent = textContent;
        return buttonEl;
    };

    const addButtonEventHandler = (e) => {
        e.preventDefault();
        const year = Number(allInputElementsArr[1].value);
        const price = Number(allInputElementsArr[3].value);
        if (!allInputElementsArr[0].value || !allInputElementsArr[2].value || year <= 0 || price <= 0) {
            return;
        }
        const trInfoEl = trElementCreator('info');
        const tdModelEl = tdElementCreator();
        tdModelEl.textContent = allInputElementsArr[0].value;
        trInfoEl.appendChild(tdModelEl);
        const tdPriceEl = tdElementCreator();
        tdPriceEl.textContent = price.toFixed(2);
        trInfoEl.appendChild(tdPriceEl);
        const tdButtonsEl = tdElementCreator();
        const buttonMore = buttonElementCreator('moreBtn', 'More Info');
        buttonMore.addEventListener('click', buttonMoreEventHandler);
        tdButtonsEl.appendChild(buttonMore);
        const buttonBuy = buttonElementCreator('buyBtn', 'Buy it');
        buttonBuy.addEventListener('click', buttonBuyEventHandler);
        tdButtonsEl.appendChild(buttonBuy);
        trInfoEl.appendChild(tdButtonsEl);

        const trHideEl = trElementCreator('hide');
        const tdYearEl = tdElementCreator();
        tdYearEl.textContent = `Year: ${year}`;
        trHideEl.appendChild(tdYearEl);
        const tdDescriptEl = tdElementCreator();
        tdDescriptEl.colSpan = '3';
        tdDescriptEl.textContent = `Description ${allInputElementsArr[2].value}`;
        trHideEl.appendChild(tdDescriptEl);
        tbodyElement.appendChild(trInfoEl);
        tbodyElement.appendChild(trHideEl);
        allInputElementsArr.forEach(inputEl => inputEl.value = '');
    };
    const buttonMoreEventHandler = (e) => {
        const trHideEl = e.currentTarget.parentElement.parentElement.nextSibling;
        if (e.currentTarget.textContent === 'More Info') {
            e.currentTarget.textContent = 'Less Info';
            trHideEl.style.display = 'contents';
        } else if (e.currentTarget.textContent === 'Less Info') {
            e.currentTarget.textContent = 'More Info';
            trHideEl.style.display = 'none';
        }
    };
    const buttonBuyEventHandler = (e) => {
        const trInfoEl = e.currentTarget.parentElement.parentElement;
        const trHideEl = e.currentTarget.parentElement.parentElement.nextSibling;
        let currFurnPrice = Number(e.currentTarget.parentElement.previousSibling.textContent);
        totalPrice += currFurnPrice;
        trHideEl.remove();
        trInfoEl.remove();
        totalPriceElement.textContent = totalPrice.toFixed(2);
    };
    addButton.addEventListener('click', addButtonEventHandler);
}