import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const homePageTemplate = (gamesArr) => html`    
            <section id="welcome-world">
            
                <div class="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in GamesPlay</h3>
                </div>
                <img src="./images/four_slider_img01.png" alt="hero">
            
                <div id="home-page">
                    <h1>Latest Games</h1>
            
                    <!-- Display div: with information about every game (if any) -->
                    ${gamesArr.length != 0 ? gamesArr.map((game) => html`
                    <div class="game">
                        <div class="image-wrap">
                            <img src="${game['imageUrl']}">
                        </div>
                        <h3>${game['title']}</h3>
                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="data-buttons">
                            <a href="/catalog/${game['_id']}" class="btn details-btn">Details</a>
                        </div>
                    </div>
                    `) : null}
            
                    <!-- Display paragraph: If there is no games  -->
                    ${gamesArr.length == 0 ? html` <p class="no-articles">No games yet</p>` : null}
                </div>
            </section>
`;

export async function homePage(ctx) {
    // console.log(ctx);
    const recentGamesArr = await get('/data/games?sortBy=_createdOn%20desc&distinct=category');
    // const recentGamesArr = [];
    ctx.render(homePageTemplate(recentGamesArr));
}
