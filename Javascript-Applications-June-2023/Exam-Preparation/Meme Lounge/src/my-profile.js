import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const myProfileTemplate = (memesArr, userData) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/${userData['gender']}.png">
            <div class="user-content">
                <p>Username: ${userData['username']}</p>
                <p>Email: ${userData['email']}</p>
                <p>My memes count: ${memesArr.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            <!-- Display : All created memes by this user (If any) -->
            ${memesArr.length != 0 ? memesArr.map((meme) => html`
            <div class="user-meme">
                <p class="user-meme-title">${meme['title']}</p>
                <img class="userProfileImage" alt="meme-img" src="${meme['imageUrl']}">
                <a class="button" href="dashboard/${meme['_id']}">Details</a>
            </div>
            `) : null}
            <!-- Display : If user doesn't have own memes  -->
            ${memesArr.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : null}
        </div>
    </section>
    `;

export async function myProfilePage(ctx) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        return;
    }
    const userId = userData['_id'];
    const memesArr = await get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    // const memesArr = [];
    // console.log(memesArr);
    // console.log(userData);
    ctx.render(myProfileTemplate(memesArr, userData));
    // console.log(ctx);
}