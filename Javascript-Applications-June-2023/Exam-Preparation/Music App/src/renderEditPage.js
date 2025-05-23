import { editAlbumById, getAlbumById } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const editTemplate = (ctx, album, onEdit) => ctx.html`
${createNavTemplate(ctx)}
<section class="editPage">
    <form action="details/${album._id}/edit" method="post" @submit=${onEdit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value="${album.name}">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${album.imgUrl}">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value="${album.price}">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${album.releaseDate}">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value="${album.artist}">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value="${album.genre}">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10" cols="10">${album.description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>
${createFooterTemplate(ctx.html)}`;

function renderEditPage(ctx) {

    const albumId = ctx.params.id;

    getAlbumById(albumId)
        .then(album => {
            // console.log(album);
            ctx.render(editTemplate(ctx, album, onEdit), ctx.root);
        })
        .catch(err => alert(err.message));

    async function onEdit(e) {
        e.preventDefault();
        const { name, imgUrl, price, releaseDate, artist, genre, description } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(name, imgUrl, price, releaseDate, artist, genre, description);

        editAlbumById(albumId, name, imgUrl, price, releaseDate, artist, genre, description)
            .then(album => {
                console.log(album);
                ctx.page.redirect(`/details/${albumId}`);
            })
            .catch(err => alert(err.message));
    }
}

export {
    renderEditPage
}