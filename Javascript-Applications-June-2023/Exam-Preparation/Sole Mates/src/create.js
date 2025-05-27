import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
            <div class="form">
                <h2>Add item</h2>
                <form class="create-form" @submit=${onSubmit}>
                    <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                    <input type="text" name="model" id="shoe-model" placeholder="Model" />
                    <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                    <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                    <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                    <input type="text" name="value" id="shoe-value" placeholder="Value" />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export function createPage(ctx, next) {
    // console.log(ctx);
    ctx.render(createTemplate(onSubmit));
    // const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
    // allInputElementsArr.pop();
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData == null) {
            return
        }
        // const token = userData.accessToken;
        let { brand, model, imageUrl, release, designer, value } = Object.fromEntries(new FormData(e.currentTarget).entries());

        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required!')
        }

        const shoesData = await post('/data/shoes', { brand, model, imageUrl, release, designer, value });
        // console.log(shoesData);
        ctx.page.redirect('/dashboard');
    }
}