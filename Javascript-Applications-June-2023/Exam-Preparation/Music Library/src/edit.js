import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (albumObj, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form class="edit-form" @submit=${onSubmit} >
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value="${albumObj['singer']}" />
            <input type="text" name="album" id="album-album" placeholder="Album" .value="${albumObj['album']}" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value="${albumObj['imageUrl']}" />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value="${albumObj['release']}" />
            <input type="text" name="label" id="album-label" placeholder="Label" .value="${albumObj['label']}" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value="${albumObj['sales']}" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx, next) {
    const albumId = ctx.params.id
    // console.log(albumId);
    const albumObj = await get(`/data/albums/${albumId}`)
    ctx.render(editTemplate(albumObj, onSubmit));
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
        let { singer, album, imageUrl, release, label, sales } = Object.fromEntries(new FormData(e.target).entries());

        if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            return alert('All fields are required!')
        }

        const albumData = await put(`/data/albums/${albumId}`, { singer, album, imageUrl, release, label, sales });
        // console.log(albumData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${albumId}`);
    }
}