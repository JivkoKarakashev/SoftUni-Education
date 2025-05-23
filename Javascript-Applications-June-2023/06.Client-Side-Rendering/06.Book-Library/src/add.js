import { post } from './api.js';

const addUrl = '/jsonstore/collections/books';

export async function onAdd(e) {
    e.preventDefault();
    // console.log(e.target);
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    await post(addUrl, { author, title });
    e.target.reset();
}