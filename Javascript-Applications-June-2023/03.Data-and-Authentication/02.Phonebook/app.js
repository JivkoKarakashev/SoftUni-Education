const url = 'http://localhost:3030/jsonstore/phonebook';
const loadButton = document.querySelector('#btnLoad');
const createButton = document.querySelector('#btnCreate');
// console.log(createButton);
const ulPhonebook = document.querySelector('#phonebook');
// console.log(ulPhonebook);
const inputPersonElement = document.querySelector('#person');
const inputPhoneElement = document.querySelector('#phone');
// console.log(inputPersonElement);
// console.log(inputPhoneElement);

function attachEvents() {
    loadButton.addEventListener('click', onLoad);
    createButton.addEventListener('click', onCreate);
}

async function onLoad() {
    ulPhonebook.replaceChildren();
    const phonesObjsArray = Object.values(await request(url));
    // console.log(phonesObjsArray);
    phonesObjsArray.forEach(phoneObj => {
        const { person, phone, _id } = phoneObj;
        //    console.log(person);
        const liEl = document.createElement('li');
        liEl.setAttribute('data-id', _id);
        liEl.textContent = `${person}: ${phone}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', onDelete);
        liEl.appendChild(deleteButton);
        ulPhonebook.appendChild(liEl);
    });
}
async function onCreate() {
    const person = inputPersonElement.value;
    const phone = inputPhoneElement.value;
    if (!person || !phone) {
        return alert('All fields are reqired!');
    }
    await request(url, { person, phone }, 'post');
    inputPersonElement.value = '';
    inputPhoneElement.value = '';
    onLoad();
}
async function onDelete(e) {
    // console.log(e.currentTarget);
    const id = e.currentTarget.parentElement.dataset.id;
    await request(`${url}/${id}`, {}, 'delete');
    onLoad();
}

async function request(url, body, method) {
    let response;
    if (body && method) {
        const options = {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        response = await fetch(url, options);
    } else {
        response = await fetch(url);
    }
    const data = await response.json();
    return data;
}

attachEvents();