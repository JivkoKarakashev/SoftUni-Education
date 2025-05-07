window.addEventListener('load', () => {
    // console.log(document.location);
    const logoutButton = document.querySelector('#logout');
    logoutButton.addEventListener('click', onLogout);
    const loadButton = document.querySelector('button.load');
    loadButton.addEventListener('click', onload);
    const addForm = document.querySelector('form#addForm');
    addForm.addEventListener('submit', onFormSubmit);
    // console.log(loadButton);
    const url = 'http://localhost:3030/data/catches';

    function loginCheck() {
        const allCatchesElementsArr = Array.from(document.querySelectorAll('div.catch'));
        allCatchesElementsArr.forEach(catchEl => catchEl.remove());
        const email = localStorage.getItem('email');
        const divGuestElement = document.querySelector('div#guest');
        const divUserElement = document.querySelector('div#user');
        const addButton = document.querySelector('button.add');
        const spanGuestElement = document.querySelector('p.email span');
        const allCatchButtonsArr = Array.from(document.querySelectorAll('div.catch > button'));
        // console.log(allCatchButtonsArr);
        if (email) {
            divGuestElement.style.display = 'none';
            divUserElement.style.display = '';
            spanGuestElement.textContent = email;
            addButton.disabled = false;
        } else {
            divGuestElement.style.display = '';
            divUserElement.style.display = 'none';
            allCatchButtonsArr.forEach(catchBtn => catchBtn.disabled = true);
            addButton.disabled = true;
        }
    }
    async function onLogout() {
        const logoutUrl = 'http://localhost:3030/users/logout';
        const accessToken = localStorage.getItem('accessToken');
        const options = {
            method: 'get',
            headers: {
                'X-Authorization': accessToken,
            }
        };
        try {
            const response = await fetch(logoutUrl, options);
            if (response.ok == false) {
                const error = response;
                throw error;
            }
            localStorage.clear();
            window.location = './index.html';
        } catch (err) {
            return alert(err.message);
        }
    }
    async function onload() {
        const allCatchesElementsArr = Array.from(document.querySelectorAll('div.catch'));
        allCatchesElementsArr.forEach(catchEl => catchEl.remove());
        const userId = localStorage.getItem('_id');
        try {
            const response = await fetch(url);
            if (response.ok === false) {
                const error = await response.json();
                throw error;
            }
            const catchesObjsArr = await response.json();

            const divCatchesElement = document.querySelector('div#catches');

            for (const catchObj of catchesObjsArr) {
                const { angler, weight, species, location, bait, captureTime } = catchObj;
                const { _ownerId, _id } = catchObj;

                const divCatch = createElement('div', '', ['class', 'catch']);
                const labelAngler = createElement('label', 'Angler', []);
                divCatch.appendChild(labelAngler);
                const inputAngler = createElement('input', '', ['type', 'text', 'class', 'angler', 'value', angler]);
                divCatch.appendChild(inputAngler);

                const labelWeight = createElement('label', 'Weight', []);
                divCatch.appendChild(labelWeight);
                const inputWeight = createElement('input', '', ['type', 'text', 'class', 'weight', 'value', weight]);
                divCatch.appendChild(inputWeight);

                const labelSpecies = createElement('label', 'Species', []);
                divCatch.appendChild(labelSpecies);
                const inputSpecies = createElement('input', '', ['type', 'text', 'class', 'species', 'value', species]);
                divCatch.appendChild(inputSpecies);

                const labelLocation = createElement('label', 'Location', []);
                divCatch.appendChild(labelLocation);
                const inputLocation = createElement('input', '', ['type', 'text', 'class', 'location', 'value', location]);
                divCatch.appendChild(inputLocation);

                const labelBait = createElement('label', 'Bait', []);
                divCatch.appendChild(labelBait);
                const inputBait = createElement('input', '', ['type', 'text', 'class', 'bait', 'value', bait]);
                divCatch.appendChild(inputBait);

                const labelCaptureTime = createElement('label', 'Capture Time', []);
                divCatch.appendChild(labelCaptureTime);
                const inputCaptureTime = createElement('input', '', ['type', 'number', 'class', 'captureTime', 'value', captureTime]);
                divCatch.appendChild(inputCaptureTime);

                const buttonUpdate = createElement('button', 'Update', ['class', 'update', 'data-id', _id, 'data-ownerId', _ownerId]);
                if (userId !== _ownerId) {
                    buttonUpdate.disabled = true;
                }
                buttonUpdate.addEventListener('click', onUpdate);
                divCatch.appendChild(buttonUpdate);

                const buttonDelete = createElement('button', 'Delete', ['class', 'delete', 'data-id', _id, 'data-ownerId', _ownerId]);
                if (userId !== _ownerId) {
                    buttonDelete.disabled = true;
                }
                buttonDelete.addEventListener('click', onDelete);
                divCatch.appendChild(buttonDelete);

                divCatchesElement.appendChild(divCatch);
            }
            // console.log(catchesObjsArr);
        } catch (err) {
            return alert(err.message);
        }
    }
    async function onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(addForm);
        const formDataObj = Object.fromEntries(formData.entries());
        // console.log(formDataObj);
        let { angler, weight, species, location, bait, captureTime } = formDataObj;
        weight = Number(weight);
        captureTime = Number(captureTime);
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            return alert('All fields are required!')
        }
        if (!Number.isInteger(weight) || !Number.isInteger(captureTime)) {
            return alert('"Weight" must be an Integer number and "Capture Time" must be a floating-point number!')
        }

        const accessToken = localStorage.getItem('accessToken');
        const options = {
            method: 'post',
            headers: {
                'X-Authorization': accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime }),
        };
        try {
            const response = await fetch(url, options);
            if (response.ok == false) {
                const error = response;
                throw error;
            }
        } catch (err) {
            return alert(err.message);
        }
    }
    function createElement(tag, content, attributesArr = []) {
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
    }
    async function onUpdate(e) {
        // console.log(e.currentTarget);
        const allInputElementsArr = Array.from(e.currentTarget.parentElement.querySelectorAll('input'));
        const allInputElementsArrLength = allInputElementsArr.length;
        const allinputValues = [];
        allInputElementsArr.forEach((el) => {
            let value = el.value;
            if (el.className === 'weight' || el.className === 'captureTime') {
                value = Number(value);
            }
            allinputValues.push(value);
        });
        let [angler, weight, species, location, bait, captureTime] = [...allinputValues];
        // console.log(angler);
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            return alert('All fields are required!')
        }
        if (!Number.isInteger(weight) || !Number.isInteger(captureTime)) {
            return alert('"Weight" must be an Integer number and "Capture Time" must be a floating-point number!')
        }
        const accessToken = localStorage.getItem('accessToken');
        const catchId = e.currentTarget.dataset.id;
        const options = {
            method: 'put',
            headers: {
                'X-Authorization': accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime }),
        };
        try {
            const response = await fetch(`${url}/${catchId}`, options);
            if (response.ok == false) {
                const error = response;
                throw error;
            }
            onload();
        } catch (err) {
            return alert(err.message);
        }
    }
    async function onDelete(e) {
        // console.log(e.currentTarget);
        const accessToken = localStorage.getItem('accessToken');
        const catchId = e.currentTarget.dataset.id;
        // console.log(catchId);
        const options = {
            method: 'delete',
            headers: {
                'X-Authorization': accessToken,
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await fetch(`${url}/${catchId}`, options);
            if (response.ok == false) {
                const error = response;
                throw error;
            }
            onload();
        } catch (err) {
            return alert(err.message);
        }
    }
    loginCheck()
});