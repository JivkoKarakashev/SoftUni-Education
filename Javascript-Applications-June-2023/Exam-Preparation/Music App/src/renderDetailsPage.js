import { deleteAlbumById, getAlbumById } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { getUserData } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";

const detailsTemplate = (ctx, album, userId, onEdit, onDelete) => ctx.html`
${createNavTemplate(ctx)}
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${album.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            ${album._ownerId === userId ? ctx.html`
            <!-- Only for registered user and creator of the album -->
            <div class="actionBtn">
                <a href="/details/${album._id}/edit" class="edit" @click="${onEdit}">Edit</a>
                <a href="/details/${album._id}/delete" class="remove" @click=${onDelete}>Delete</a>
            </div>`
        : null}
        </div>
    </div>
</section>
${createFooterTemplate(ctx.html)}`;

function renderDetailsPage(ctx) {
    const { _id } = getUserData();
    const albumId = ctx.params.id;

    getAlbumById(albumId)
        .then(album => {
            ctx.render(detailsTemplate(ctx, album, _id, onEdit, onDelete), ctx.root);
        })
        .catch(err => alert(err.message));

    function onEdit(e) {
        e.preventDefault();
        ctx.page.redirect(`/details/${albumId}/edit`);
    }

    async function onDelete(e) {
        e.preventDefault();

        if (confirm('Are you sure to delete the album?')) {
            deleteAlbumById(albumId)
                .then(deleteTime => {
                    // console.log(deleteTime);
                    ctx.page.redirect('/catalog');
                })
                .catch(err => alert(err.message));
        }

    }
}


export {
    renderDetailsPage
}