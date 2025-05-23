import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (productsArr) => html`
    <h2>Products</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${productsArr.length != 0 ? productsArr.map((product) => html`
        <div class="product">
            <img src="${product['imageUrl']}" alt="example1" />
            <p class="title">${product['name']}</p>
            <p><strong>Price:</strong><span class="price">${product['price']}</span>$</p>
            <a class="details-btn" href="/dashboard/${product['_id']}">Details</a>
        </div>
        `) : null}
    </section>
    <!-- Display an h2 if there are no posts -->
    ${productsArr.length == 0 ? html`<h2>No products yet.</h2>` : null}
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const productsArr = await get('/data/products?sortBy=_createdOn%20desc');
    // const productsArr = [];
    // console.log(productsArr);
    ctx.render(dashboardTemplate(productsArr));
}