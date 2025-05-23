import { createAlbum } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const createTemplate = (ctx, onCreate) => ctx.html`
${createNavTemplate(ctx)}
<section class="createPage">
    <form action="/create" method="post" @submit=${onCreate}>
        <fieldset>
            <legend>Add Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" placeholder="Album name">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" placeholder="Price">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" placeholder="Description"></textarea>

                <button class="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>
${createFooterTemplate(ctx.html)}`;

function renderCreateTemplate(ctx) {
    ctx.render(createTemplate(ctx, onCreate), ctx.root);

    async function onCreate(e) {
        e.preventDefault();
        const { name, imgUrl, price, releaseDate, artist, genre, description } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(name, imgUrl, price, releaseDate, artist, genre, description);

        createAlbum(name, imgUrl, price, releaseDate, artist, genre, description)
            .then(album => {
                // console.log(album);
                ctx.page.redirect('/catalog');
            })
            .catch(err => alert(err.message));
    }
}

export {
    renderCreateTemplate
}