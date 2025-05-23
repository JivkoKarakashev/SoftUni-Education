import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (offersArr) => html`
    <section id="dashboard">
        <h2>Job Offers</h2>
    
        <!-- Display a div with information about every post (if any)-->
        ${offersArr.length != 0 ? offersArr.map((offer) => html`
        <div class="offer">
            <img src="${offer['imageUrl']}" alt="example1" />
            <p><strong>Title: </strong><span class="title">${offer['title']}</span></p>
            <p><strong>Salary:</strong><span class="salary">${offer['salary']}</span></p>
            <a class="details-btn" href="/dashboard/${offer['_id']}">Details</a>
        </div>
        `) : null}
        <!-- Display an h2 if there are no posts -->
        ${offersArr.length == 0 ? html`<h2>No offers yet.</h2>` : null}
    </section>
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const offersArr = await get('/data/offers?sortBy=_createdOn%20desc');
    // const offersArr = [];
    // console.log(offersArr);
    ctx.render(dashboardTemplate(offersArr));
}