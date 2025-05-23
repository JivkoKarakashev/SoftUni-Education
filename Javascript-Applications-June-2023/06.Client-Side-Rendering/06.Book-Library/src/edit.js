import { html, render } from '../node_modules/lit-html/lit-html.js';
import { put } from './api.js';
import { homeView } from './app.js';

const updateUrl = '/jsonstore/collections/books';
const bodyEl = document.querySelector('body');

export function onEdit(e) {
    // console.log(e.currentTarget);
    const title = e.currentTarget.parentElement.parentElement.children[0].textContent;
    const author = e.currentTarget.parentElement.parentElement.children[1].textContent;
    const addFormEl = bodyEl.querySelector('#add-form');
    const id = e.currentTarget.dataset.id;
    if (addFormEl) {
        addFormEl.remove();
        // bodyEl.replaceChildren();

        const editFormTemplate = () => html`
        <form id="edit-form" @submit=${onSubmit}>
            <input type="hidden" name="id">
            <h3>Edit book</h3>
            <label>TITLE</label>
            <input type="text" name="title" .value=${title} placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" .value=${author} placeholder="Author...">
            <input type="submit" value="Save" data-id=${id}>
        </form>
    `;
        const fragment = document.createDocumentFragment();
        render(editFormTemplate(), fragment);
        bodyEl.appendChild(fragment);
    } else {
        const titleImputEl = bodyEl.querySelector('input[name="title"]');
        const authorImputEl = bodyEl.querySelector('input[name="author"]');
        const submitButton = bodyEl.querySelector('input[value="Save"]');
        titleImputEl.value = title;
        authorImputEl.value = author;
        submitButton.dataset.id = id;
    }
}

async function onSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    const loadButton = bodyEl.querySelector('#loadBooks');
    const submitButton = bodyEl.querySelector('input[value="Save"]');
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const id = submitButton.dataset.id;
    await put(`${updateUrl}/${id}`, { author, title });
    e.target.reset();
    homeView();
    loadButton.click();
}