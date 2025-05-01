function solve() {
    const allInputElementsArray = Array.from(document.querySelectorAll('form div > input'));
    const allInputElementsArrayLength = allInputElementsArray.length;
    const hireWorkerButton = document.querySelector('button#add-worker');
    const budgetMessageElement = document.querySelector('span#sum');
    // console.log(budgetMessageElement);
    const tBodyElement = document.querySelector('tbody#tbody');
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
    const hireWorkerButtonEventHandler = (e) => {
        e.preventDefault();
        for (let inputEl of allInputElementsArray) {
            if (!inputEl.value) {
                return;
            }
        }
        let inputValuesArr = [];
        allInputElementsArray.forEach((el) => inputValuesArr.push(el.value));
        const trEl = document.createElement('tr');
        for (let i = 0; i < allInputElementsArrayLength; i++) {
            trEl.appendChild(tdElementCreator(inputValuesArr[i]));            
        }
        const tdButtonsEl = document.createElement('td');
        const firedButtonEl = buttonElementCreator('fired', 'Fired');
        const editButtonEl = buttonElementCreator('edit', 'Edit');
        tdButtonsEl.appendChild(firedButtonEl).addEventListener('click', firedButtonEventHandler);
        tdButtonsEl.appendChild(editButtonEl).addEventListener('click', editButtonEventHandler);
        trEl.appendChild(tdButtonsEl);
        tBodyElement.appendChild(trEl);
        let currBudget = Number(budgetMessageElement.textContent);
        budgetMessageElement.textContent = (currBudget + Number(inputValuesArr[5])).toFixed(2);
        allInputElementsArray.forEach(el => el.value = '');
    };
    const firedButtonEventHandler = (e) => {
        // console.log(e.currentTarget.parentElement.parentElement);
        const trEl = e.currentTarget.parentElement.parentElement;
        const salary = Number(trEl.children[5].textContent);
        trEl.remove();
        const currBudget = Number(budgetMessageElement.textContent);
        budgetMessageElement.textContent = (currBudget - salary).toFixed(2);
    };
    const editButtonEventHandler = (e) => {
        // console.log(e.currentTarget.parentElement.parentElement);
        const trEl = e.currentTarget.parentElement.parentElement;
        const allInputsElementsArr = Array.from(trEl.children);
        allInputsElementsArr.pop();
        // console.log(allInputsElementsArr);
        const allInputsValueArray = [];
        allInputsElementsArr.forEach(inputEl => allInputsValueArray.push(inputEl.textContent));
        for (let i = 0; i < allInputElementsArrayLength; i++) {
            allInputElementsArray[i].value = allInputsValueArray[i];
        }
        trEl.remove();
        let currBudget = Number(budgetMessageElement.textContent);
        budgetMessageElement.textContent = (currBudget - Number(allInputsValueArray[5])).toFixed(2);
    };
    hireWorkerButton.addEventListener('click', hireWorkerButtonEventHandler);
}
solve()