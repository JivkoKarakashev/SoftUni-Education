import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (offerObj, onSubmit) => html`
        <section id="edit">
            <div class="form">
                <h2>Edit Offer</h2>
                <form class="edit-form" @submit=${onSubmit}>
                    <input type="text" name="title" id="job-title" placeholder="Title" .value="${offerObj['title']}" />
                    <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value="${offerObj['imageUrl']}" />
                    <input type="text" name="category" id="job-category" placeholder="Category" .value="${offerObj['category']}" />
                    <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" .value="${offerObj['description']}"></textarea>
                    <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                        cols="50" .value="${offerObj['requirements']}"></textarea>
                    <input type="text" name="salary" id="job-salary" placeholder="Salary" .value="${offerObj['salary']}" />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export async function editPage(ctx, next) {
    const offerId = ctx.params.id
    // console.log(offerId);
    const offerObj = await get(`/data/offers/${offerId}`)
    ctx.render(editTemplate(offerObj, onSubmit));
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
        const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(new FormData(e.target).entries());

        if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
            return alert('All fields are required!')
        }

        const offerData = await put(`/data/offers/${offerId}`, { title, imageUrl, category, description, requirements, salary });
        // console.log(offerData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${offerId}`);
    }
}