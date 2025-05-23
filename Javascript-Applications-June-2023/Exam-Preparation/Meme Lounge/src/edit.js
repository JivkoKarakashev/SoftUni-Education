import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';
import { notification } from './notification.js';

const editTemplate = (memeObj, onSubmit) => html`
    <section id="edit-meme">
        <form id="edit-form" @submit=${onSubmit}>
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value="${memeObj['title']}">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"
                    .value="${memeObj['description']}"></textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"
                    .value="${memeObj['imageUrl']}">
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`;

export async function editPage(ctx, next) {
    const memeId = ctx.params.id
    // console.log(memeId);
    const memeObj = await get(`/data/memes/${memeId}`)
    ctx.render(editTemplate(memeObj, onSubmit));
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        // let isValid = true;
        const userData = JSON.parse(localStorage.getItem('userData'));
        // const token = userData.accessToken;
        if (userData == null) {
            return
        }
        // const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
        // allInputElementsArr.pop();
        const { title, description, imageUrl } = Object.fromEntries(new FormData(e.target).entries());

        try {
            if (!title || !description || !imageUrl) {
                throw new Error('All fields are required!');
            }
            const memeData = await put(`/data/memes/${memeId}`, { title, description, imageUrl });
            // console.log(memeData);            
        } catch (err) {
            notification(err);
            return;
        }
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${memeId}`);
    }
}