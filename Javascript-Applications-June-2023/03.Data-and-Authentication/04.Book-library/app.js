const url = 'http://localhost:3030/jsonstore/collections/books';
const tbodyElement = document.querySelector('tbody');
const loadAllBooksButton = document.querySelector('#loadBooks');
const formElement = document.querySelector('form');
formElement.addEventListener('submit', onSubmit);
// console.log(loadAllBooksButton);
const inputTitleEl = document.querySelector('[name="title"]');
const inputAuthorEl = document.querySelector('[name="author"]');
const submitBtn = document.querySelector('form button');
const h3FormEl = document.querySelector('h3');
// console.log(submitBtn);

async function onLoad() {
    tbodyElement.replaceChildren();
    const response = await request(url);
    if (response === 'NetworkError when attempting to fetch resource.') {
        return alert(response);
    }
    const booksObjsArr = Object.entries(response).forEach(book => {
        const id = book[0];
        const { author, title } = book[1];

        tableRowCreator(id, [title, author]);
    });
}
async function onSubmit(e) {
    e.preventDefault();
    let response;
    const { title, author } = Object.fromEntries(new FormData(e.target).entries());
    if (!title || !author) {
        return console.log('All fields are required!');
    }
    if (submitBtn.textContent === 'Submit') {
        // console.log('onSubmit');
        response = await request(url, { author, title }, 'post');
        if (response === 'NetworkError when attempting to fetch resource.') {
            return alert(response);
        }
    } else if (submitBtn.textContent === 'Save') {
        // console.log('onSave');
        const bookId = submitBtn.dataset.id;
        // console.log(bookId);
        response = await request(`${url}/${bookId}`, { author, title }, 'put');
        if (response === 'NetworkError when attempting to fetch resource.') {
            return alert(response);
        }
        h3FormEl.textContent = 'FORM';
        inputTitleEl.value = '';
        inputAuthorEl.value = '';
        delete submitBtn.dataset.id;
        submitBtn.textContent = 'Submit';
        onLoad();
    }
    inputTitleEl.value = '';
    inputAuthorEl.value = '';
}
async function onEdit(e) {
    // console.log(e.currentTarget);
    h3FormEl.textContent = 'Edit FORM';
    inputTitleEl.value = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(1)').textContent;
    inputAuthorEl.value = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(2)').textContent;
    const bookId = e.currentTarget.parentElement.parentElement.dataset.id;
    submitBtn.setAttribute('data-id', bookId);
    submitBtn.textContent = 'Save';
}
async function onDelete(e) {
    const bookId = e.currentTarget.parentElement.parentElement.dataset.id;
    const response = await request(`${url}/${bookId}`, {}, 'delete');
    if (response === 'NetworkError when attempting to fetch resource.') {
        return alert(response);
    }
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
        try {
            response = await fetch(url, options);
        } catch (err) {
            return err.message;
        }
    } else {
        try {
            response = await fetch(url);
        } catch (err) {
            return err.message;
        }
    }
    const data = await response.json();
    return data;
}
function tableRowCreator(id, arr) {
    const trEl = document.createElement('tr');
    trEl.setAttribute('data-id', id);
    arr.forEach(content => {
        const tdEl = document.createElement('td');
        tdEl.textContent = content;
        trEl.appendChild(tdEl);
    });
    const tdBtnsEl = document.createElement('td');
    const editBtn = buttonCreator('Edit', onEdit);
    tdBtnsEl.appendChild(editBtn);
    const deleteBtn = buttonCreator('Delete', onDelete);
    tdBtnsEl.appendChild(deleteBtn);
    trEl.appendChild(tdBtnsEl);
    tbodyElement.appendChild(trEl);
}
function buttonCreator(content, listnerFunc) {
    const button = document.createElement('button');
    button.textContent = content;
    button.addEventListener('click', listnerFunc);
    return button;
}
loadAllBooksButton.addEventListener('click', onLoad);