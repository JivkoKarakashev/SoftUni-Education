import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (postObj, onSubmit) => html`
        <section id="edit-page" class="auth">
            <form id="edit" @submit=${onSubmit}>
                <h1 class="title">Edit Post</h1>
        
                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" .value="${postObj['title']}">
                </article>
        
                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" .value="${postObj['description']}">
                </article>
        
                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" .value="${postObj['imageUrl']}">
                </article>
        
                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" .value="${postObj['address']}">
                </article>
        
                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" .value="${postObj['phone']}">
                </article>
        
                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>
`;

export async function editPage(ctx, next) {
    const postId = ctx.params.id
    // console.log(postId);
    const postObj = await get(`/data/posts/${postId}`)
    ctx.render(editTemplate(postObj, onSubmit));
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
        const { title, description, imageUrl, address, phone } = Object.fromEntries(new FormData(e.target).entries());

        if (!title || !description || !imageUrl || !address || !phone) {
            return alert('All fields are required!')
        }

        const postData = await put(`/data/posts/${postId}`, { title, description, imageUrl, address, phone });
        // console.log(postData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${postId}`);
    }
}