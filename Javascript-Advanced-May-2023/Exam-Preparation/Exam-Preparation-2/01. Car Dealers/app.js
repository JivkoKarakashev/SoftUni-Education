window.addEventListener("load", solve);

function solve() {
  let totalProfit = 0;
  const makeInputFieldElement = document.querySelector('fieldset input#make');
  const modelInputFieldElement = document.querySelector('fieldset input#model');
  const yearInputFieldElement = document.querySelector('fieldset input#year');
  const fuelInputFieldElement = document.querySelector('fieldset select#fuel');
  const origPriceFieldElement = document.querySelector('fieldset input#original-cost');
  const sellPriceFieldElement = document.querySelector('fieldset input#selling-price');
  const allPublishElementsArray = [];
  allPublishElementsArray.push(makeInputFieldElement, modelInputFieldElement, yearInputFieldElement, fuelInputFieldElement, origPriceFieldElement, sellPriceFieldElement)
  const allPublishElementsArrayLength = allPublishElementsArray.length;
  const publishButtonElement = document.querySelector('fieldset button#publish');
  // console.log(publishButtonElement);
  const tBodyElement = document.querySelector('tbody#table-body');
  // console.log(tBodyElement);


  const tdElementCreator = (name) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = name;
    return tdElement;
  };
  const buttonElementCreator = (clas, name) => {
    const buttonEl = document.createElement('button');
    buttonEl.className = clas;
    buttonEl.textContent = name;
    return buttonEl;
  };
  const spanElementCreator = (name) => {
    const spanEl = document.createElement('span');
    spanEl.textContent = name;
    return spanEl;
  };
  const publishButtonEventHandler = (e) => {
    e.preventDefault();
    const makeValue = makeInputFieldElement.value;
    const modelValue = modelInputFieldElement.value;
    const yearValue = yearInputFieldElement.value;
    const fuelValue = fuelInputFieldElement.value;
    const origPriceValue = Number(origPriceFieldElement.value);
    const sellPriceValue = Number(sellPriceFieldElement.value);
    if (!makeValue || !modelValue || !yearValue || !fuelValue || !origPriceValue || !sellPriceValue || sellPriceValue <= origPriceValue) {
      return;
    }
    const trEl = document.createElement('tr');
    trEl.className = 'row';
    const makeTdEl = tdElementCreator(makeValue);
    const modelTdEl = tdElementCreator(modelValue);
    const yearTdEl = tdElementCreator(yearValue);
    const fuelTdEl = tdElementCreator(fuelValue);
    const origPriceTdEl = tdElementCreator(origPriceValue);
    const sellPriceTdEl = tdElementCreator(sellPriceValue);
    const buttonsTdEl = document.createElement('td');
    const editButtonEl = buttonElementCreator('action-btn edit', 'Edit');
    const sellButtonEl = buttonElementCreator('action-btn sell', 'Sell');
    buttonsTdEl.appendChild(editButtonEl);
    buttonsTdEl.appendChild(sellButtonEl);
    trEl.appendChild(makeTdEl);
    trEl.appendChild(modelTdEl);
    trEl.appendChild(yearTdEl);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(origPriceTdEl);
    trEl.appendChild(sellPriceTdEl);
    trEl.appendChild(buttonsTdEl);
    tBodyElement.appendChild(trEl);
    editButtonEl.addEventListener('click', editButtonEventHandler);
    sellButtonEl.addEventListener('click', sellButtonEventHandler);
    makeInputFieldElement.value = '';
    modelInputFieldElement.value = '';
    yearInputFieldElement.value = '';
    fuelInputFieldElement.value = '';
    origPriceFieldElement.value = '';
    sellPriceFieldElement.value = '';
  };
  const editButtonEventHandler = (e) => {
    const tdElementsArr = e.currentTarget.parentElement.parentElement.children;
    // console.log(allPublishElementsArray);
    for (let i = 0; i < allPublishElementsArrayLength; i++) {
      allPublishElementsArray[i].value = tdElementsArr[i].textContent;      
    }
    const trElement = e.currentTarget.parentElement.parentElement;
    trElement.remove();
  };
  const sellButtonEventHandler = (e) => {
    const ulElement = document.querySelector('ul#cars-list');
    const strongElement = document.querySelector('strong#profit');
    const liEl = document.createElement('li');
    liEl.className = 'each-list';
    const tdElementsArr = e.currentTarget.parentElement.parentElement.children;
    const makeModelText = tdElementsArr[0].textContent.concat(` ${tdElementsArr[1].textContent}`);
    const yearText = tdElementsArr[2].textContent;
    const currentProfit = Number(tdElementsArr[5].textContent) - Number(tdElementsArr[4].textContent);
    totalProfit += currentProfit;
    liEl.appendChild(spanElementCreator(makeModelText));
    liEl.appendChild(spanElementCreator(yearText));
    liEl.appendChild(spanElementCreator(currentProfit));
    ulElement.appendChild(liEl);
    strongElement.textContent = totalProfit.toFixed(2);
    const trElement = e.currentTarget.parentElement.parentElement;
    trElement.remove();
  };

  publishButtonElement.addEventListener('click', publishButtonEventHandler);
}
