import { getCatalogData } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { hasUser } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";

const catalogTemplate = (ctx, user, albumsArr) => ctx.html`
${createNavTemplate(ctx)}
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albumsArr.length ? albumsArr.map(album => ctx.html`
    <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${user ? ctx.html`
            <div class="btn-group">
                <a href="details/${album._id}" id="details">Details</a>
            </div>` : null}
        </div>
    </div>
    `)
    : ctx.html`
    <!-- No albums in catalog -->
    <p>No Albums in Catalog!</p>`}

</section>
${createFooterTemplate(ctx.html)}`;

function renderCatalogPage(ctx) {
    const user = hasUser();
    getCatalogData()
        .then(albumsArr => {
            ctx.render(catalogTemplate(ctx, user, albumsArr), ctx.root);
        })
        .catch(err => alert(err.message));
}

export {
    renderCatalogPage
}