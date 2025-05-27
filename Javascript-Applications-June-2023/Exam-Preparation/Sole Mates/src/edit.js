import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (shoesObj, onSubmit) => html`
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
            <div class="form" @submit=${onSubmit}>
                <h2>Edit item</h2>
                <form class="edit-form">
                    <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value="${shoesObj['brand']}" />
                    <input type="text" name="model" id="shoe-model" placeholder="Model" .value="${shoesObj['model']}" />
                    <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value="${shoesObj['imageUrl']}" />
                    <input type="text" name="release" id="shoe-release" placeholder="Release date" .value="${shoesObj['release']}" />
                    <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value="${shoesObj['designer']}" />
                    <input type="text" name="value" id="shoe-value" placeholder="Value" .value="${shoesObj['value']}" />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export async function editPage(ctx, next) {
    const shoesId = ctx.params.id
    // console.log(shoesId);
    const shoesObj = await get(`/data/shoes/${shoesId}`)
    ctx.render(editTemplate(shoesObj, onSubmit));
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
        let { brand, model, imageUrl, release, designer, value } = Object.fromEntries(new FormData(e.target).entries());

        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required!')
        }

        const shoesData = await put(`/data/shoes/${shoesId}`, { brand, model, imageUrl, release, designer, value });
        // console.log(shoesData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${shoesId}`);
    }
}