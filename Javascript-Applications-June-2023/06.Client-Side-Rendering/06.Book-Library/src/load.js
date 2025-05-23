import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get } from './api.js';
import { onEdit } from './edit.js';
import { onDelete } from './delete.js';

const bodyEl = document.querySelector('body');
const url = '/jsonstore/collections/books';

export async function onLoad(e) {
    const tbodyEl = bodyEl.querySelector('tbody');
    // console.log(e.currentTarget);
    const dataArr = Object.entries(await get(url));
    // console.log(dataArr);

    const bookTemplate = (arr) => html`
        ${arr.map((book) => html`
        <tr>
            <td>${book[1]['title']}</td>
            <td>${book[1]['author']}</td>
            <td>
                <button data-id=${book[0]} @click=${onEdit}>Edit</button>
                <button data-id=${book[0]} @click=${onDelete}>Delete</button>
            </td>
        </tr>
        `)}
    `;
    render(bookTemplate(dataArr), tbodyEl);
}