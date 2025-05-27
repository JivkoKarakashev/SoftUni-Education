import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (factsArr) => html`
<h2>Fun Facts</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${factsArr.length != 0 ? factsArr.map((fact) => html`
    <div class="fact">
        <img src="${fact['imageUrl']}" alt="example1" />
        <h3 class="category">${fact['category']}</h3>
        <p class="description">${fact['description']}</p>
        <a class="details-btn" href="/dashboard/${fact['_id']}">More Info</a>
    </div>
    `) : null}
</section>
<!-- Display an h2 if there are no posts -->
${factsArr.length == 0 ? html`<h2>No Fun Facts yet.</h2>` : null}
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const factsArr = await get('/data/facts?sortBy=_createdOn%20desc');
    // const factsArr = [];
    // console.log(factsArr);
    ctx.render(dashboardTemplate(factsArr));
}