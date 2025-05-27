import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (bookObj, onSubmit) => html`
        <section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="" @submit=${onSubmit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value="${bookObj['title']}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" .value="${bookObj['description']}"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" .value="${bookObj['imageUrl']}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value="${bookObj['type']}">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`;

export async function editPage(ctx, next) {
    const bookId = ctx.params.id
    // console.log(bookId);
    const bookObj = await get(`/data/books/${bookId}`)
    ctx.render(editTemplate(bookObj, onSubmit));
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
        const { title, description, imageUrl, type } = Object.fromEntries(new FormData(e.target).entries());

        if (title == '' || description == '' || imageUrl == '' || type == '') {
            return alert('All fields are required!')
        }

        const bookData = await put(`/data/books/${bookId}`, { title, description, imageUrl, type });
        // console.log(bookData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${bookId}`);
    }
}