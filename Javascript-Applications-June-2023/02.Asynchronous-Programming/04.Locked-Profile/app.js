function lockedProfile() {

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainElement = document.querySelector('#main');
    // console.log(mainElement);
    const getPromise = (url) => {
        return new Promise(async (resolve, reject) => {
            // do async thing
            const response = await fetch(url)
            // resolve
            resolve(response.json()) // see note below!
        })
    };
    // run the function and receive a Promise
    const promise = getPromise(url);
    // console.log(promise);
    // let the Promise know what you want to do when it resolves
    promise.then(usersData => {
        const usersObjsArray = Object.entries(usersData);
        // console.log(usersObjsArray);

        const createElement = (tag, content, attributesArr = []) => {
            const element = document.createElement(tag);
            if (content) {
                element.textContent = content;
            }
            if (attributesArr.length !== 0) {
                for (let i = 0; i < attributesArr.length; i += 2) {
                    element.setAttribute(attributesArr[i], attributesArr[i + 1]);
                }
            }
            return element;
        };
        const showHideButtonEventHandler = (e) => {
            // console.log(e.currentTarget);
            const lockStatus = e.currentTarget.parentElement.querySelector('[value=\'lock\']');
            const unlockStatus = e.currentTarget.parentElement.querySelector('[value=\'unlock\']');
            if (lockStatus.checked || !unlockStatus.checked) {
                return;
            } else if (unlockStatus.checked) {
                const hiddenFieldsElement = e.currentTarget.parentElement.querySelector('div#user1HiddenFields');
                if (e.currentTarget.textContent === 'Hide it') {
                    hiddenFieldsElement.style.display = 'none';
                    e.currentTarget.textContent = 'Show more';
                } else {
                    hiddenFieldsElement.style.display = '';
                    e.currentTarget.textContent = 'Hide it';
                }
            }
        };

        for (const userObj of usersObjsArray) {            
            const { age, email, username } = userObj[1];
            // console.log(age, '/', email, '/', username);
            const divProfileEl = createElement('div', '', ['class', 'profile']);
            const imgEl = createElement('img', '', ['src', './iconProfile2.png', 'class', 'userIcon']);
            divProfileEl.appendChild(imgEl);
            const labelLockEl = createElement('label', 'Lock', []);
            divProfileEl.appendChild(labelLockEl);
            const inputLockEl = createElement('input', '', ['type', 'radio', 'name', 'user1Locked', 'value', 'lock', 'checked', '']);
            divProfileEl.appendChild(inputLockEl);
            const labelUnlockEl = createElement('label', 'Unlock', []);
            divProfileEl.appendChild(labelUnlockEl);
            const inputUnlockEl = createElement('input', '', ['type', 'radio', 'name', 'user1Locked', 'value', 'unlock']);
            divProfileEl.appendChild(inputUnlockEl);
            const brEl = createElement('br', '', []);
            divProfileEl.appendChild(brEl);
            const hrEl = createElement('hr', '', []);
            divProfileEl.appendChild(hrEl);
            const labelUserNameEl = createElement('label', 'Username', []);
            divProfileEl.appendChild(labelUserNameEl);
            const inputUserNameEl = createElement('input', '', ['type', 'text', 'name', 'user1Username', 'value', username, 'disabled', '', 'readonly', '']);
            divProfileEl.appendChild(inputUserNameEl);

            const divIdEl = createElement('div', '', ['id', 'user1HiddenFields', 'style', 'display:none']);
            const hr1El = createElement('hr', '', []);
            divIdEl.appendChild(hr1El);
            const labelEmailEl = createElement('label', 'Email:', []);
            divIdEl.appendChild(labelEmailEl);
            const inputEmailEl = createElement('input', '', ['type', 'email', 'name', 'user1Email', 'value', email, 'disabled', '', 'readonly', '']);
            divIdEl.appendChild(inputEmailEl);
            const labelAgeEl = createElement('label', 'Age:', []);
            divIdEl.appendChild(labelAgeEl);
            const inputAgeEl = createElement('input', '', ['type', 'email', 'name', 'user1Age', 'value', age, 'disabled', '', 'readonly', '']);
            divIdEl.appendChild(inputAgeEl);

            divProfileEl.appendChild(divIdEl);
            const buttonEl = createElement('button', 'Show more', []);
            buttonEl.addEventListener('click', showHideButtonEventHandler);
            divProfileEl.appendChild(buttonEl);
            mainElement.appendChild(divProfileEl);
        }
    });
}