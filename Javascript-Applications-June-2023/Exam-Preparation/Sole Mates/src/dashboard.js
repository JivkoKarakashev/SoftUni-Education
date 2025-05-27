import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (shoesArr) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Collectibles</h2>
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${shoesArr.map((shoes) => html`
            <li class="card">
                <img src="${shoes['imageUrl']}" alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${shoes['brand']}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${shoes['model']}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${shoes['value']}</span>$</p>
                <a class="details-btn" href="dashboard/${shoes['_id']}">Details</a>
            </li>
            `)}
        </ul>
    
        <!-- Display an h2 if there are no posts -->
        <h2>There are no items added yet.</h2>
    </section>
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const shoesArr = await get('/data/shoes?sortBy=_createdOn%20desc');
    // const shoesArr = [];
    // console.log(shoesArr);
    ctx.render(dashboardTemplate(shoesArr));
    const h2Element = document.querySelector('h2:nth-child(3)');
    // console.log(h2Element);
    h2Element.style.display = 'none';
    if (shoesArr.length == 0) {
        h2Element.style.display = '';
    }
}