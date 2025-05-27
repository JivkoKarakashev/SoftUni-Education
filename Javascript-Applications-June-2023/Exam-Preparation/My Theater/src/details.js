import { html } from '../node_modules/lit-html/lit-html.js';
import { get, del } from './api.js';
import { addLike, getLikes, getUserLike } from './likes.js';

const detailsTemplate = (theater, onDelete, onLike) => html`
    <section id="detailsPage">
        <div id="detailsBox">
            <div class="detailsInfo">
                <h1>Title: ${theater['title']}</h1>
                <div>
                    <img src="${theater['imageUrl']}" />
                </div>
            </div>
    
            <div class="details">
                <h3>Theater Description</h3>
                <p>${theater['description']}</p>
                <h4>Date: ${theater['date']}</h4>
                <h4>Author: ${theater['author']}</h4>
                <div class="buttons">
                    ${addButtons(theater, onDelete, onLike)}
                    <!-- <a class="btn-delete" href="#">Delete</a>
                    <a class="btn-edit" href="#">Edit</a>
                    <a class="btn-like" href="#">Like</a> -->
                </div>
                <p class="likes">Likes: ${theater['likes']}</p>
            </div>
        </div>
    </section>
    `;

function addButtons(theater, onDelete, onLike) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <!-- Edit/Delete buttons ( Only for creator of this theater )  -->
        ${theater.isOwner ? html`<a class="btn-delete" href="javascript:void(0)" @click=${onDelete}>Delete</a>` : null}
        ${theater.isOwner ? html`<a class="btn-edit" href="${theater['_id']}/edit">Edit</a>` : null}
        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current theater ) -->
        ${theater.canLike ? html`<a class="btn-like" href="javascript:void(0)" @click=${onLike}>Like</a>` : null}
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const theaterId = ctx.params.id;

    const requests = [
        get(`/data/theaters/${theaterId}`),
        getLikes(theaterId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserLike(theaterId, userData['_id']));
    }

    const [theaterDetails, likes, hasLiked] = await Promise.all(requests);
    // console.log(theaterDetails, likes, hasLiked);

    theaterDetails.likes = likes;
    // const theaterDetails = await get(`/data/theaters/${theaterId}`);
    // console.log(theaterDetails);
    if (userData != null) {
        const theaterOwnerId = theaterDetails['_ownerId'];
        theaterDetails.isOwner = userData['_id'] == theaterOwnerId;
        theaterDetails.canLike = theaterDetails.isOwner == false && hasLiked == 0;
    }

    // console.log(theaterDetails);
    ctx.render(detailsTemplate(theaterDetails, onDelete, onLike));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete theater ${theaterDetails['title']} ${theaterDetails['author']}`);
        if (choice) {
            await del(`/data/theaters/${theaterId}`);
            ctx.page.redirect('/my-profile');
        }
    }

    async function onLike() {
        addLike(theaterId);
        ctx.page.redirect(`/dashboard/${theaterId}`);
    }
}