import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (albumsArr) => html`
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${albumsArr.map((albums) => html`
        <li class="card">
            <img src="${albums['imageUrl']}" alt="imgUrl" />
            <p>
                <strong>Singer/Band: </strong><span class="singer">${albums['singer']}</span>
            </p>
            <p>
                <strong>Album name: </strong><span class="album">${albums['album']}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${albums['sales']}</span></p>
            <a class="details-btn" href="dashboard/${albums['_id']}">Details</a>
        </li>
        `)}
    </ul>

    <!-- Display an h2 if there are no posts -->
    <h2>There are no albums added yet.</h2>
</section>
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const albumsArr = await get('/data/albums?sortBy=_createdOn%20desc');
    // const albumsArr = [];
    // console.log(albumsArr);
    ctx.render(dashboardTemplate(albumsArr));
    const h2Element = document.querySelector('h2:nth-child(3)');
    // console.log(h2Element);
    h2Element.style.display = 'none';
    if (albumsArr.length == 0) {
        h2Element.style.display = '';
    }
}