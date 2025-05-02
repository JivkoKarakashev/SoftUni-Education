window.addEventListener("load", solve);

function solve() {
  const allInputElementsArr = Array.from(document.querySelectorAll('div.inner-wrap label > input'));
  const genreElement = document.querySelector('select#genre');
  const storyElement = document.querySelector('textarea#story');
  const publishButton = document.querySelector('input#form-btn');
  allInputElementsArr.push(storyElement);
  const allInputElementsArrLength = allInputElementsArr.length;
  // console.log(allInputElementsArr);
  const ulPreviewElement = document.querySelector('ul#preview-list');
  // console.log(ulPreviewElement);
  let allInputsValueArray = [];
  let genre = '';

  const pElementCreator = () => document.createElement('p');
  const buttonElementCreator = (clas, name) => {
    const buttonEl = document.createElement('button');
    buttonEl.className = clas;
    buttonEl.textContent = name;
    return buttonEl;
  };
  const publishButtonEventHandler = (e) => {
    e.preventDefault();
    for (let inputEl of allInputElementsArr) {
      if (!inputEl.value) {
        return;
      }
    }
    let inputValuesArr = [];
    allInputElementsArr.forEach((el) => inputValuesArr.push(el.value));
    const liEl = document.createElement('li');
    liEl.className = 'story-info';
    const articleEl = document.createElement('article');
    const h4El = document.createElement('h4');
    h4El.textContent = (`Name: ${inputValuesArr[0]} ${inputValuesArr[1]}`);
    const pAgeEl = pElementCreator();
    pAgeEl.textContent = `Age: ${inputValuesArr[2]}`;
    const pTitleEl = pElementCreator();
    pTitleEl.textContent = `Title: ${inputValuesArr[3]}`;
    const pGenreEl = pElementCreator();
    pGenreEl.textContent = `Genre: ${genreElement.value}`;
    const pStoryeEl = pElementCreator();
    pStoryeEl.textContent = inputValuesArr[4];
    articleEl.appendChild(h4El);
    articleEl.appendChild(pAgeEl);
    articleEl.appendChild(pTitleEl);
    articleEl.appendChild(pGenreEl);
    articleEl.appendChild(pStoryeEl);
    liEl.appendChild(articleEl);
    const saveButtonEl = buttonElementCreator('save-btn', 'Save Story');
    saveButtonEl.addEventListener('click', saveButtonEventHandler);
    liEl.appendChild(saveButtonEl);
    const editButtonEl = buttonElementCreator('edit-btn', 'Edit Story');
    editButtonEl.addEventListener('click', editButtonEventHandler);
    liEl.appendChild(editButtonEl);
    const deleteButtonEl = buttonElementCreator('delete-btn', 'Delete Story');
    deleteButtonEl.addEventListener('click', deleteButtonEventHandler);
    liEl.appendChild(deleteButtonEl);
    ulPreviewElement.appendChild(liEl);
    allInputsValueArray = JSON.parse(JSON.stringify(inputValuesArr));
    genre = genreElement.value;
    allInputElementsArr.forEach(el => el.value = '');
    genreElement.value = '';
    publishButton.disabled = true;
  };
  const saveButtonEventHandler = (e) => {
    const divMainElement = document.querySelector('div#main');
    const divMainElementChildrensArr = Array.from(document.querySelectorAll('div#main > div'));
    divMainElementChildrensArr.forEach(el => el.remove());
    // console.log(divMainElementChildrens);
    const h1El = document.createElement('h1');
    h1El.textContent = 'Your scary story is saved!';
    divMainElement.appendChild(h1El);
  };
  const editButtonEventHandler = (e) => {
    e.currentTarget.parentElement.remove();
    publishButton.disabled = false;
    for (let i = 0; i < allInputElementsArrLength; i++) {
      allInputElementsArr[i].value = allInputsValueArray[i];
    }
    genreElement.value = genre;
  };
  const deleteButtonEventHandler = (e) => {
    e.currentTarget.parentElement.remove();
    publishButton.disabled = false;
  };
  publishButton.addEventListener('click', publishButtonEventHandler);
}
