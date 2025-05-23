import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const myPostsTemplate = (postsArr) => html`
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>
    
        <!-- Display a div with information about every post (if any)-->
        <div class="my-posts">
            ${postsArr.length != 0 ? postsArr.map((post) => html`
            <div class="post">
                <h2 class="post-title">${post['title']}</h2>
                <img class="post-image" src="${post['imageUrl']}" alt="Material Image">
                <div class="btn-wrapper">
                    <a href="dashboard/${post['_id']}" class="details-btn btn">Details</a>
                </div>
            </div>
            `) : null}
        </div>
    
        <!-- Display an h1 if there are no posts -->
        ${postsArr.length == 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>` : null}
    </section>
    `;

export async function myPostsPage(ctx) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        return;
    }
    const userId = userData['_id'];
    const postsArr = await get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    // const postsArr = [];
    // console.log(postsArr);
    // console.log(userData);
    ctx.render(myPostsTemplate(postsArr));
    // console.log(ctx);
}