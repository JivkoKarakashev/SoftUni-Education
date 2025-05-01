function solve() {
    const allInputElementsArr = Array.from(document.querySelectorAll('form > input'));
    const messageElement = document.querySelector('textarea#message');
    allInputElementsArr.push(messageElement);
    const addButton = document.querySelector('form button#add');
    const resetButton = document.querySelector('form button#reset');
    const ulListMailsElement = document.querySelector('ul#list');
    // let recipientTitleBufferArray = [];
    // console.log(ulListMailsElement);
    const ulSentMailsElement = document.querySelector('ul.sent-list');
    // console.log(ulSentMailsElement);
    const ulDeleteMailsElement = document.querySelector('ul.delete-list');
    // console.log(ulDeleteMailsElement);

    const h4ElementCreator = () => document.createElement('h4');
    const buttonElementCreator = (taip, aidi, name) => {
        const buttonEl = document.createElement('button');
        buttonEl.type = taip;
        buttonEl.id = aidi;
        buttonEl.textContent = name;
        return buttonEl;
    };
    const spanElementCreator = () => document.createElement('span');
    const addButtonEventHandler = (e) => {
        e.preventDefault();
        for (let inputEl of allInputElementsArr) {
            if (!inputEl.value) {
                return;
            }
        }
        const recipientTitleValueArray = [];
        recipientTitleValueArray.push(allInputElementsArr[0].value, allInputElementsArr[1].value)
        // allInputElementsArr.forEach((el) => inputValuesArr.push(el.value));
        // console.log(inputValuesArr);
        const liEl = document.createElement('li');
        const h4TitleEl = h4ElementCreator();
        h4TitleEl.textContent = `Title: ${allInputElementsArr[1].value}`;
        const h4RecipentEl = h4ElementCreator();
        h4RecipentEl.textContent = `Recipient Name: ${allInputElementsArr[0].value}`;
        const spanEl = spanElementCreator();
        spanEl.textContent = allInputElementsArr[2].value;
        const divEl = document.createElement('div');
        divEl.id = 'list-action';
        const sendButton = buttonElementCreator('submit', 'send', 'Send');
        divEl.appendChild(sendButton);
        sendButton.addEventListener('click', sendButtonEventHandler);
        const deleteButton = buttonElementCreator('submit', 'delete', 'Delete');
        divEl.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteButtonEventHandler);
        liEl.appendChild(h4TitleEl);
        liEl.appendChild(h4RecipentEl);
        liEl.appendChild(spanEl);
        liEl.appendChild(divEl);
        ulListMailsElement.appendChild(liEl);
        // recipientTitleBufferArray = JSON.parse(JSON.stringify(recipientTitleValueArray));
    };
    const resetButtonEventHandler = (e) => {
        e.preventDefault();
        allInputElementsArr.forEach(el => el.value = '');
    };
    const sendButtonEventHandler = (e) => {
        ulSentMailsElement.style.overflowY = 'hidden';
        // console.log(ulSentMailsElement);
        const delButton = e.currentTarget.parentElement.lastChild;
        delButton.removeAttribute('id');
        delButton.className = 'delete';
        let [, spanTitleTextContent] = e.currentTarget.parentElement.parentElement.children[0].textContent.split(': ');
        let [, spanToTextContent] = e.currentTarget.parentElement.parentElement.children[1].textContent.split(': ');
        e.currentTarget.parentElement.parentElement.remove();
        const liEl = document.createElement('li');
        const spanToEl = spanElementCreator();
        spanToEl.textContent = `To: ${spanToTextContent}`;
        const spanTitleEl = spanElementCreator();
        spanTitleEl.textContent = `Title: ${spanTitleTextContent}`;
        const divEl = document.createElement('div');
        divEl.className = 'btn';
        // console.log(delButton);
        divEl.appendChild(delButton);
        liEl.appendChild(spanToEl);
        liEl.appendChild(spanTitleEl);
        liEl.appendChild(divEl);
        ulSentMailsElement.appendChild(liEl);
    };
    const deleteButtonEventHandler = (e) => {
        // console.log(e.currentTarget.parentElement.parentElement.parentElement);
        // console.log(ulListMailsElement);
        let spanToTextContent, spanTitleTextContent;
        ulDeleteMailsElement.style.overflowY = 'hidden';
        if (e.currentTarget.parentElement.parentElement.parentElement === ulListMailsElement) {
            // console.log(ulListMailsElement);
            [, spanTitleTextContent] = e.currentTarget.parentElement.parentElement.children[0].textContent.split(': ');
            spanTitleTextContent = `Title: ${spanTitleTextContent}`;
            [, spanToTextContent] = e.currentTarget.parentElement.parentElement.children[1].textContent.split(': ');
            spanToTextContent = `To: ${spanToTextContent}`;
        } else if (e.currentTarget.parentElement.parentElement.parentElement === ulSentMailsElement) {
            // console.log(ulDeleteMailsElement);
            spanToTextContent = e.currentTarget.parentElement.parentElement.children[0].textContent;
            spanTitleTextContent = e.currentTarget.parentElement.parentElement.children[1].textContent;
        }
        e.currentTarget.parentElement.parentElement.remove();
        const liEl = document.createElement('li');
        const spanToEl = spanElementCreator();
        spanToEl.textContent = spanToTextContent;
        const spanTitleEl = spanElementCreator();
        spanTitleEl.textContent = spanTitleTextContent;
        liEl.appendChild(spanToEl);
        liEl.appendChild(spanTitleEl);
        ulDeleteMailsElement.appendChild(liEl);
    };
    addButton.addEventListener('click', addButtonEventHandler);
    resetButton.addEventListener('click', resetButtonEventHandler);
}
solve()