import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { addLike, getLikes, getUserLike } from './likes.js';

const detailsTemplate = (fact, onDelete, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${fact['imageUrl']}" alt="example1" />
        <p id="details-category">${fact['category']}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${fact['description']}</p>
                <p id="more-info">${fact['moreInfo']}</p>
            </div>

            <h3>Likes:<span id="likes">${fact['likes']}</span></h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
                ${addButtons(fact, onDelete, onLike)}
                <!-- <a href="" id="edit-btn">Edit</a>
                <a href="" id="delete-btn">Delete</a> -->

                <!--Bonus - Only for logged-in users ( not authors )-->
                <!-- <a href="" id="like-btn">Like</a> -->

            </div>
        </div>
    </div>
</section>
`;

function addButtons(fact, onDelete, onLike) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <!-- Edit/Delete buttons ( Only for creator of this fact )  -->
        ${fact.isOwner ? html`<a href="${fact['_id']}/edit" id="edit-btn">Edit</a>` : null}
        ${fact.isOwner ? html`<a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>` : null}
        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current fact ) -->
        ${fact.canLike ? html`<a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>` : null}
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const factId = ctx.params.id;

    const requests = [
        get(`/data/facts/${factId}`),
        getLikes(factId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserLike(factId, userData['_id']));
    }

    const [factDetails, likes, hasLiked] = await Promise.all(requests);
    // console.log(factDetails, likes, hasLiked);

    factDetails.likes = likes;
    // const factDetails = await get(`/data/facts/${factId}`);
    // console.log(factDetails);
    if (userData != null) {
        const factOwnerId = factDetails['_ownerId'];
        factDetails.isOwner = userData['_id'] == factOwnerId;
        factDetails.canLike = factDetails.isOwner == false && hasLiked == 0;
    }

    // console.log(factDetails);
    ctx.render(detailsTemplate(factDetails, onDelete, onLike));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete fact ${factDetails['_id']} ${factDetails['category']}`);
        if (choice) {
            await del(`/data/facts/${factId}`);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        addLike(factId);
        ctx.page.redirect(`/dashboard/${factId}`);
    }
}