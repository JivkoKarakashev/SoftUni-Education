window.addEventListener('load', solve);

function solve() {
    const allInputElementsArr = Array.from(document.querySelectorAll('form > input'));
    const addButton = document.querySelector('button#add-btn');
    // console.log(addButton);
    const divCollectionOfSongsElement = document.querySelector('div.all-hits-container');
    // console.log(divCollectionOfSongsElement);
    const totalLikesPElement = document.querySelector('div.likes p');
    // console.log(totalLikesPElement.textContent);
    const divSavedSongsElement = document.querySelector('div.saved-container');
    // console.log(divSavedSongsElement);

    const h2ElementCreator = () => document.createElement('h2');
    const h3ElementCreator = () => document.createElement('h3');
    const buttonElementCreator = (className, textContent) => {
        const buttonEl = document.createElement('button');
        buttonEl.className = className;
        buttonEl.textContent = textContent;
        return buttonEl;
    };

    const addButtonEventHandler = (e) => {
        e.preventDefault();
        for (let inputEl of allInputElementsArr) {
            if (!inputEl.value) {
                return;
            }
        }
        const divEl = document.createElement('div');
        divEl.className = 'hits-info';
        const imgEl = document.createElement('img');
        imgEl.src = './static/img/img.png';
        const h2GenreEl = h2ElementCreator();
        h2GenreEl.textContent = `Genre: ${allInputElementsArr[0].value}`;
        const h2NameEl = h2ElementCreator();
        h2NameEl.textContent = `Name: ${allInputElementsArr[1].value}`;
        const h2AuthorEl = h2ElementCreator();
        h2AuthorEl.textContent = `Author: ${allInputElementsArr[2].value}`;
        const h3DateEl = h3ElementCreator();
        h3DateEl.textContent = `Date: ${allInputElementsArr[3].value}`;
        const saveButton = buttonElementCreator('save-btn', 'Save song');
        saveButton.addEventListener('click', saveButtonEventHandler);
        const likeButton = buttonElementCreator('like-btn', 'Like song');
        likeButton.addEventListener('click', likeButtonEventHandler);
        const deleteButton = buttonElementCreator('delete-btn', 'Delete');
        deleteButton.addEventListener('click', deleteButtonEventHandler);
        divEl.appendChild(imgEl);
        divEl.appendChild(h2GenreEl);
        divEl.appendChild(h2NameEl);
        divEl.appendChild(h2AuthorEl);
        divEl.appendChild(h3DateEl);
        divEl.appendChild(saveButton);
        divEl.appendChild(likeButton);
        divEl.appendChild(deleteButton);
        divCollectionOfSongsElement.appendChild(divEl);
        allInputElementsArr.forEach(inputEl => inputEl.value = '');
    };
    const likeButtonEventHandler = (e) => {
        let [totalLikesStr, count] = totalLikesPElement.textContent.split(': ');
        count = Number(count);
        totalLikesPElement.textContent = `${totalLikesStr}: ${++count}`;
        e.currentTarget.disabled = true;
    };
    const saveButtonEventHandler = (e) => {
        const curDivEl = e.currentTarget.parentElement;
        const saveBtn = e.currentTarget.parentElement.querySelector('button.save-btn');
        const likeBtn = e.currentTarget.parentElement.querySelector('button.like-btn');
        saveBtn.remove()
        likeBtn.remove()
        divSavedSongsElement.appendChild(curDivEl);
    };
    const deleteButtonEventHandler = (e) => {
        const curDivEl = e.currentTarget.parentElement;
        curDivEl.remove();
    };

    addButton.addEventListener('click', addButtonEventHandler);
}