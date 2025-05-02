window.addEventListener("load", solve);

function solve() {

    const allInputElementsArray = Array.from(document.querySelector('div.inner-wrap').children);
    const allInputElementsArrayLength = allInputElementsArray.length;
    let allInputsValueArray = [];
    const addGemButtonElement = document.querySelector('input#add-btn');
    // console.log(addGemButtonElement);
    const ulPreviewElement = document.querySelector('ul#preview-list');
    // console.log(ulPreviewElement);
    const ulCollectionElement = document.querySelector('ul#collection');
    // console.log(ulCollectionElement);

    const pElementCreator = () => { return document.createElement('p') };
    const buttonElementCreator = (clas, text) => {
        const button = document.createElement('button');
        button.className = clas;
        button.textContent = text;
        return button;
    };
    const addButtonEventHandler = (e) => {
        e.preventDefault();
        for (const inputEl of allInputElementsArray) {
            if (!inputEl.value) {
                return;
            }
        }
        const inputValuesArray = [];
        allInputElementsArray.map((el) => inputValuesArray.push(el.value));
        const liEl = document.createElement('li');
        liEl.className = 'gem-info';
        const articleEl = document.createElement('article');
        const h4El = document.createElement('h4');
        h4El.textContent = inputValuesArray[0];
        const pColor = pElementCreator();
        pColor.textContent = `Color: ${inputValuesArray[1]}`;
        const pCarats = pElementCreator();
        pCarats.textContent = `Carats: ${inputValuesArray[2]}`;
        const pPrice = pElementCreator();
        pPrice.textContent = `Price: ${inputValuesArray[3]} $`;
        const pType = pElementCreator();
        pType.textContent = `Type: ${inputValuesArray[4]}`;
        articleEl.appendChild(h4El);
        articleEl.appendChild(pColor);
        articleEl.appendChild(pCarats);
        articleEl.appendChild(pPrice);
        articleEl.appendChild(pType);
        liEl.appendChild(articleEl);
        const saveButtonEl = buttonElementCreator('save-btn', 'Save to Collection');
        saveButtonEl.addEventListener('click', saveButtonEventHandler);
        liEl.appendChild(saveButtonEl);
        const editButtonEl = buttonElementCreator('edit-btn', 'Edit Information');
        editButtonEl.addEventListener('click', editButtonEventHandler);
        liEl.appendChild(editButtonEl);
        const cancelButtonEl = buttonElementCreator('cancel-btn', 'Cancel');
        cancelButtonEl.addEventListener('click', cancelButtonEventHandler);
        liEl.appendChild(cancelButtonEl);
        ulPreviewElement.appendChild(liEl);
        allInputsValueArray = JSON.parse(JSON.stringify(inputValuesArray));
        allInputElementsArray.forEach(el => el.value = '');
        addGemButtonElement.disabled = true;
    };
    const editButtonEventHandler = (e) => {
        e.currentTarget.parentElement.remove();
        addGemButtonElement.disabled = false;
        for (let i = 0; i < allInputElementsArrayLength; i++) {
            allInputElementsArray[i].value = allInputsValueArray[i];
        }
    };
    const saveButtonEventHandler = (e) => {
        const liElementsArray = Array.from(e.currentTarget.parentElement.firstChild.children);
        const liElementValuesArray = [];
        liElementsArray.forEach(el => liElementValuesArray.push(el.textContent));
        const firstPartArr = liElementValuesArray.slice(0, 2).join(' - ');
        liElementValuesArray.splice(0, 2, firstPartArr);
        const secondPartArr = liElementValuesArray[2].replace(' $', '$');
        liElementValuesArray.splice(2, 1, secondPartArr);
        const liEl = document.createElement('li');
        const pEl = pElementCreator();
        pEl.className = 'collection-item';
        pEl.textContent = liElementValuesArray.join('/ ');
        liEl.appendChild(pEl);
        ulCollectionElement.appendChild(liEl);
        e.currentTarget.parentElement.remove();
        addGemButtonElement.disabled = false;
    };
    const cancelButtonEventHandler = (e) => {
        e.currentTarget.parentElement.remove();
        addGemButtonElement.disabled = false;
    };

    addGemButtonElement.addEventListener('click', addButtonEventHandler);
}
