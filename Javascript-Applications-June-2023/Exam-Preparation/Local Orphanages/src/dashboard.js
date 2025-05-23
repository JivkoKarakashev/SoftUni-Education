import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (materialsArr) => html`
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>
    
        <!-- Display a div with information about every post (if any)-->
        <div class="all-posts">
        ${materialsArr.length != 0 ? materialsArr.map((material) => html`
            <div class="post">
                <h2 class="post-title">${material['title']}</h2>
                <img class="post-image" src="${material['imageUrl']}" alt="Material Image">
                <div class="btn-wrapper">
                    <a href="/dashboard/${material['_id']}" class="details-btn btn">Details</a>
                </div>
            </div>
        </div>
        `) : null}
        <!-- Display an h1 if there are no posts -->
        ${materialsArr.length == 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>` : null}
    </section>
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const materialsArr = await get('/data/posts?sortBy=_createdOn%20desc');
    // const materialsArr = [];
    // console.log(materialsArr);
    ctx.render(dashboardTemplate(materialsArr));
}