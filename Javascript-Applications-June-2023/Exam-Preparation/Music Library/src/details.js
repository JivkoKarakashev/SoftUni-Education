import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { like, getLikes, getUserLike } from './likes.js';

const detailsTemplate = (album, onDelete, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${album['imageUrl']}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album['singer']}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album['album']}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album['release']}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album['label']}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album['sales']}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${album['likes']}</span></div>

        <!--Edit and Delete are only for creator-->
        ${addButtons(album, onDelete, onLike)}
    </div>
</section>
`;

function addButtons(album, onDelete, onLike) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${album.canLike ? html`<a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>` : null}
            ${album.isOwner ? html`<a href="${album['_id']}/edit" id="edit-btn">Edit</a>` : null}
            ${album.isOwner ? html`<a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const albumId = ctx.params.id;

    const requests = [
        get(`/data/albums/${albumId}`),
        getLikes(albumId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserLike(albumId, userData['_id']));
    }

    const [albumDetails, likes, hasLiked] = await Promise.all(requests);
    // console.log(albumDetails, likes, hasLiked);

    albumDetails.likes = likes;
    // const albumDetails = await get(`/data/albums/${albumId}`);
    // console.log(albumDetails);
    if (userData != null) {
        const albumOwnerId = albumDetails['_ownerId'];
        albumDetails.isOwner = userData['_id'] == albumOwnerId;
        albumDetails.canLike = albumDetails.isOwner == false && hasLiked == 0;
    }

    // console.log(albumDetails);
    ctx.render(detailsTemplate(albumDetails, onDelete, onLike));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete album ${albumDetails['album']} ${albumDetails['singer']}`);
        if (choice) {
            await del(`/data/albums/${albumId}`);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        await like(albumId);
        ctx.page.redirect(`/dashboard/${albumId}`);
    }
}