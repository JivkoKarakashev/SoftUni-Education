import { del } from './api.js';
import { homeView } from './app.js';

const bodyEl = document.querySelector('body');
const deleteUrl = '/jsonstore/collections/books';

export async function onDelete(e) {
    // console.log(e.currentTarget);
    const loadButton = bodyEl.querySelector('#loadBooks');
    const id = e.currentTarget.dataset.id;
    // console.log(id);
    await del(`${deleteUrl}/${id}`);
    homeView();
    loadButton.click();
}