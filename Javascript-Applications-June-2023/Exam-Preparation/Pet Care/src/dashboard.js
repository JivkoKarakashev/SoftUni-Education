import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (petsArr) => html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
            ${petsArr.length != 0 ? petsArr.map((pet) => html`
            <div class="animals-board">
                <article class="service-img">
                    <img class="animal-image-cover" src="${pet['image']}">
                </article>
                <h2 class="name">${pet['name']}</h2>
                <h3 class="breed">${pet['breed']}</h3>
                <div class="action">
                    <a class="btn" href="/dashboard/${pet['_id']}">Details</a>
                </div>
            </div>
            `) : null}
            <!--If there is no pets in dashboard-->
            ${petsArr.length == 0 ? html`
            <div>
                <p class="no-pets">No pets in dashboard</p>
            </div>` : null}
        </div>
    </section>
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const petsArr = await get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
    // const petsArr = [];
    // console.log(petsArr);
    ctx.render(dashboardTemplate(petsArr));
    // if (petsArr.length == 0) {
    //     const scrollDivEl = document.querySelector('div[class="animals-dashboard"]');
    //     scrollDivEl.style.overflowX = 'hidden';
    // }
}