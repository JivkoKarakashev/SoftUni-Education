window.addEventListener('load', solution);

function solution() {
  const allInputElementsArr = Array.from(document.querySelectorAll('div#form > div > input'));
  const allInputElementsArrLength = allInputElementsArr.length;
  const submitButton = document.querySelector('input#submitBTN');
  // console.log(submitButton);
  const ulPreviewElement = document.querySelector('ul#infoPreview');
  // console.log(ulPreviewElement);
  const actionButtonsElementsArr = Array.from(document.querySelectorAll('div.actions > input[type="button"]'));
  actionButtonsElementsArr[0].addEventListener('click', editButtonEventHandler);
  actionButtonsElementsArr[1].addEventListener('click', continueButtonEventHandler);
  // console.log(actionButtonsElementsArr);
  const divBlockElement = document.querySelector('div#block');
  const divBlockElementsArr = Array.from(document.querySelectorAll('div#block > *'));
  // console.log(divBlockElements);

  const liElementCreator = (textContent) => {
    const liElement = document.createElement('li');
    liElement.textContent = textContent;
    return liElement;
  };
  function editButtonEventHandler() {
    const allPreviewLinesArr = Array.from(document.querySelectorAll('ul#infoPreview > li'));
    // console.log(allPreviewLinesArr);
    const allPrevieValuesArr = [];
    allPreviewLinesArr.forEach(prewLine => {
      let [, text] = prewLine.textContent.split(': ');
      allPrevieValuesArr.push(text)
    });
    // console.log(allPrevieValuesArr);
    for (let i = 0; i < allInputElementsArrLength; i++) {
      allInputElementsArr[i].value = allPrevieValuesArr[i];
    }
    actionButtonsElementsArr.forEach(actionButton => actionButton.disabled = true);
    submitButton.disabled = false;
    allPreviewLinesArr.forEach(prewLineEl => prewLineEl.remove());
  }
  function continueButtonEventHandler() {
    divBlockElementsArr.forEach(el => el.remove());
    const h3El = document.createElement('h3');
    h3El.textContent = 'Thank you for your reservation!';
    divBlockElement.appendChild(h3El);
  }
  function submitButtonEventHandler(e) {
    e.preventDefault();
    if (!allInputElementsArr[0].value || !allInputElementsArr[1].value) {
      return;
    }
    const allInputValuesArr = [];
    allInputElementsArr.forEach(inputEl => allInputValuesArr.push(inputEl.value));
    const liNameEl = liElementCreator(`Full Name: ${allInputValuesArr[0]}`);
    ulPreviewElement.appendChild(liNameEl);
    const liEmailEl = liElementCreator(`Email: ${allInputValuesArr[1]}`);
    ulPreviewElement.appendChild(liEmailEl);
    const liPhoneEl = liElementCreator(`Phone Number: ${allInputValuesArr[2]}`);
    ulPreviewElement.appendChild(liPhoneEl);
    const liAddressEl = liElementCreator(`Address: ${allInputValuesArr[3]}`);
    ulPreviewElement.appendChild(liAddressEl);
    const liPostalEl = liElementCreator(`Postal Code: ${allInputValuesArr[4]}`);
    ulPreviewElement.appendChild(liPostalEl);
    allInputElementsArr.forEach(inputEl => inputEl.value = '');
    submitButton.disabled = true;
    actionButtonsElementsArr.forEach(actionButton => actionButton.disabled = false);
  }
  submitButton.addEventListener('click', submitButtonEventHandler);
}