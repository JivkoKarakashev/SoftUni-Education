import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (fruitObj, onSubmit) => html`
        <section id="edit">
            <div class="form">
                <h2>Edit Fruit</h2>
                <form class="edit-form" @submit=${onSubmit}>
                    <input type="text" name="name" id="name" placeholder="Fruit Name" .value="${fruitObj['name']}" />
                    <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value="${fruitObj['imageUrl']}" />
                    <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                        cols="50" .value="${fruitObj['description']}" ></textarea>
                    <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50" .value="${fruitObj['nutrition']}" ></textarea>
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export async function editPage(ctx, next) {
    const fruitId = ctx.params.id
    // console.log(fruitId);
    const fruitObj = await get(`/data/fruits/${fruitId}`)
    // const fruitObj = [];
    // console.log(fruitObj);
    ctx.render(editTemplate(fruitObj, onSubmit));
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
        const { name, imageUrl, description, nutrition } = Object.fromEntries(new FormData(e.target).entries());

        if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
            return alert('All fields are required!')
        }

        const fruitData = await put(`/data/fruits/${fruitId}`, { name, imageUrl, description, nutrition });
        // console.log(fruitData);
        // e.target.reset();
        ctx.page.redirect(`/catalog/${fruitId}`);
    }
}