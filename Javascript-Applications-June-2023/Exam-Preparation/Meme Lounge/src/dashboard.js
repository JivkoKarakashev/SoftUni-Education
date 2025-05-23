import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (memesArr) => html`
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            <!-- Display : All memes in database ( If any ) -->
            ${memesArr.length != 0 ? memesArr.map((meme) => html`
            <div class="meme">
                <div class="card">
                    <div class="info">
                        <p class="meme-title">${meme['title']}</p>
                        <img class="meme-image" alt="meme-img" src="${meme['imageUrl']}">
                    </div>
                    <div id="data-buttons">
                        <a class="button" href="/dashboard/${meme['_id']}">Details</a>
                    </div>
                </div>
            </div>
            `) : null}
            <!-- Display : If there are no memes in database -->
            ${memesArr.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : null}
        </div>
    </section>
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const memesArr = await get('/data/memes?sortBy=_createdOn%20desc');
    // const memesArr = [];
    // console.log(memesArr);
    ctx.render(dashboardTemplate(memesArr));
}