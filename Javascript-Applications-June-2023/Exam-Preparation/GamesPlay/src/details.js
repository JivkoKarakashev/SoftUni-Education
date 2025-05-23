import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { addComment, getComments } from './comments.js';

const detailsTemplate = (game, onDelete, onComment) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
    
            <div class="game-header">
                <img class="game-img" src="${game['imageUrl']}" />
                <h1>${game['title']}</h1>
                <span class="levels">MaxLevel: ${game['maxLevel']}</span>
                <p class="type">${game['category']}</p>
            </div>
    
            <p class="text">
                ${game['summary']}
            </p>
    
            <!-- Bonus ( for Guests and Users ) -->
            <div class="details-comments">
                <h2>Comments:</h2>
                ${game.comments.length != 0 ? html`
                <ul>
                    <!-- list all comments for current game (If any) -->
                    ${game.comments.map((comment) => html`
                    <li class="comment">
                        <p>${comment['comment']}</p>
                    </li>
                    `)}
                </ul>
                `: null}
                <!-- Display paragraph: If there are no games in the database -->
                ${game.comments.length == 0 ? html`<p class="no-comment">No comments.</p>` : null}
            </div>
    
            <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            ${addButtons(game, onDelete)}
        </div>
    
        <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
        ${game.canComment ? html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form" @submit=${onComment}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>
        `: null}
    
    </section>
    `;

function addButtons(game, onDelete) {
    return html`
        <!-- Edit and Delete are only for creator -->
        <div class="buttons">
            ${game.isOwner ? html`<a href="${game['_id']}/edit" class="button">Edit</a>` : null}
            ${game.isOwner ? html`<a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>` : null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const gameId = ctx.params.id;

    const requests = [
        get(`/data/games/${gameId}`),
        getComments(gameId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    // if (userData) {
    //     requests.push(getUserLike(gameId, userData['_id']));
    // }

    const [gameDetails, comments] = await Promise.all(requests);
    // console.log(gameDetails, comments);

    gameDetails.comments = comments;
    // const gameDetails = await get(`/data/games/${ gameId }`);
    // console.log(gameDetails);
    if (userData != null) {
        const gameOwnerId = gameDetails['_ownerId'];
        gameDetails.isOwner = userData['_id'] == gameOwnerId;
        gameDetails.canComment = gameDetails.isOwner == false;
    }

    // console.log(gameDetails);
    ctx.render(detailsTemplate(gameDetails, onDelete, onComment));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete game ${gameDetails['game']} ${gameDetails['singer']} `);
        if (choice) {
            await del(`/data/games/${gameId}`);
            ctx.page.redirect('/');
        }
    }

    async function onComment(e) {
        e.preventDefault();
        const { comment } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(comment);
        await addComment(gameId, comment);
        e.target.reset();
        ctx.page.redirect(`/catalog/${gameId}`);
    }
}