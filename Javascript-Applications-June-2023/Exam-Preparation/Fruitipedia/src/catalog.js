import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const catalogTemplate = (fruitsArr) => html`
    <h2>Fruits</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${fruitsArr.length != 0 ? fruitsArr.map((fruit) => html`
        <div class="fruit">
            <img src="${fruit['imageUrl']}" alt="example1" />
            <h3 class="title">${fruit['name']}</h3>
            <p class="description">${fruit['description']}</p>
            <a class="details-btn" href="catalog/${fruit['_id']}">More Info</a>
        </div>
        `) : null}
    
    </section>
    <!-- Display an h2 if there are no posts -->
    ${fruitsArr.length == 0 ? html`<h2>No fruit info yet.</h2>` : null}
`;

export async function catalogPage(ctx, next) {
    // console.log(ctx);
    const fruitsArr = await get('/data/fruits?sortBy=_createdOn%20desc');
    // const fruitsArr = [];
    // console.log(fruitsArr);
    ctx.render(catalogTemplate(fruitsArr));
}