import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const catalogTemplate = (gamesArr) => html`
    <section id="catalog-page">
        <h1>All Games</h1>
        <!-- Display div: with information about every game (if any) -->
        ${gamesArr.length != 0 ? gamesArr.map((game) => html`
        <div class="allGames">
            <div class="allGames-info">
                <img src="${game['imageUrl']}">
                <h6>${game['category']}</h6>
                <h2>${game['title']}</h2>
                <a href="catalog/${game['_id']}" class="details-button">Details</a>
            </div>    
        </div>
        `): null}
        <!-- Display paragraph: If there is no games  -->
        ${gamesArr.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` :null}
    </section>
`;

export async function catalogPage(ctx, next) {
    // console.log(ctx);
    const gamesArr = await get('/data/games?sortBy=_createdOn%20desc');
    // const gamesArr = [];
    // console.log(gamesArr);
    ctx.render(catalogTemplate(gamesArr));
}