import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (factObj, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fact</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="category" id="category" placeholder="Category" .value="${factObj['category']}" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL"
                .value="${factObj['imageUrl']}" />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"
                .value="${factObj['description']}"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50"
                .value="${factObj['moreInfo']}"></textarea>
            <button type="submit">Post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx, next) {
    const factId = ctx.params.id
    // console.log(factId);
    const factObj = await get(`/data/facts/${factId}`)
    ctx.render(editTemplate(factObj, onSubmit));
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
        const factData = Object.fromEntries(new FormData(e.target).entries());
        const { category, description } = factData;
        const imageUrl = factData['image-url'];
        const moreInfo = factData['additional-info'];
        // const invalidInputElementsArr = allInputElementsArr.filter((inputEl) => inputEl.classList.contains('is-invalid'));
        // if (invalidInputElementsArr.length != 0) {
        //     // isValid = false;
        //     return;
        // }
        if (category == '' || description == '' || imageUrl == '' || moreInfo == '') {
            return alert('All fields are required!')
          }

        const factDataReq = await put(`/data/facts/${factId}`, { category, imageUrl, description, moreInfo });
        // console.log(factDataReq);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${factId}`);
    }
}