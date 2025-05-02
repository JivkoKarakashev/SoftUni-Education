window.addEventListener("load", solve);

function solve() {
  const allInputElementsArr = Array.from(document.querySelectorAll('div.inner-wrap label > input'));
  const genderElement = document.querySelector('select#genderSelect');
  const descriptionElement = document.querySelector('textarea#task');
  const submitButton = document.querySelector('input#form-btn');
  const counterElement = document.querySelector('span#progress-count');
  // console.log(counterElement.textContent);
  const ulInProgressElement = document.querySelector('ul#in-progress');
  // console.log(ulInProgressElement);
  const ulFinishedElement = document.querySelector('ul#finished');
  // console.log(ulFinishedElement);
  const clearButton = document.querySelector('button#clear-btn');
  // console.log(clearButton);

  allInputElementsArr.push(descriptionElement);
  // console.log(allInputElementsArr);
  const allInputElementsArrLength = allInputElementsArr.length;
  let allInputsValueArray = [];
  let gender = '';

  const pElementCreator = () => document.createElement('p');
  const buttonElementCreator = (clas, name) => {
    const buttonEl = document.createElement('button');
    buttonEl.className = clas;
    buttonEl.textContent = name;
    return buttonEl;
  };
  const submitButtonEventHandler = (e) => {
    e.preventDefault();
    for (let inputEl of allInputElementsArr) {
      if (!inputEl.value) {
        return;
      }
    }
    let inputValuesArr = [];
    allInputElementsArr.forEach((el) => inputValuesArr.push(el.value));
    const liEl = document.createElement('li');
    liEl.className = 'each-line';
    const articleEl = document.createElement('article');
    const h4El = document.createElement('h4');
    h4El.textContent = (`${inputValuesArr[0]} ${inputValuesArr[1]}`);
    const pGenderAgeEl = pElementCreator();
    pGenderAgeEl.textContent = `${genderElement.value}, ${inputValuesArr[2]}`;
    const pdescriptEl = pElementCreator();
    pdescriptEl.textContent = `Dish description: ${inputValuesArr[3]}`;
    articleEl.appendChild(h4El);
    articleEl.appendChild(pGenderAgeEl);
    articleEl.appendChild(pdescriptEl);
    liEl.appendChild(articleEl);
    const editButtonEl = buttonElementCreator('edit-btn', 'Edit');
    editButtonEl.addEventListener('click', editButtonEventHandler);
    liEl.appendChild(editButtonEl);
    const completeButtonEl = buttonElementCreator('complete-btn', 'Mark as complete');
    completeButtonEl.addEventListener('click', completeButtonEventHandler);
    liEl.appendChild(completeButtonEl);
    ulInProgressElement.appendChild(liEl);
    allInputsValueArray = JSON.parse(JSON.stringify(inputValuesArr));
    gender = genderElement.value;
    allInputElementsArr.forEach(el => el.value = '');
    genderElement.value = '';
    let currCounter = Number(counterElement.textContent);
    counterElement.textContent = ++currCounter;
  };
  const editButtonEventHandler = (e) => {
    e.currentTarget.parentElement.remove();
    let currCounter = Number(counterElement.textContent);
    counterElement.textContent = --currCounter;
    for (let i = 0; i < allInputElementsArrLength; i++) {
      allInputElementsArr[i].value = allInputsValueArray[i];
    }
    genderElement.value = gender;
  };
  const completeButtonEventHandler = (e) => {
    const liInProgresEl = e.currentTarget.parentElement;
    // console.log(liInProgresEl);
    liInProgresEl.lastChild.remove();
    liInProgresEl.lastChild.remove();
    ulFinishedElement.appendChild(liInProgresEl);
    let currCounter = Number(counterElement.textContent);
    counterElement.textContent = --currCounter;
  };
  const clearButtonEventHandler = () => {
    const allFinishedArray = Array.from(document.querySelectorAll('ul#finished > li.each-line'));
    allFinishedArray.forEach(element => element.remove());
  };
  clearButton.addEventListener('click', clearButtonEventHandler);
  submitButton.addEventListener('click', submitButtonEventHandler);
}
