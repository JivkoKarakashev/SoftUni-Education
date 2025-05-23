import { searchAlbumByName } from "./api.js";

import { createFooterTemplate } from "./footerTemplate.js";
import { hasUser } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";

const searchTemplate = (ctx, onSearch) => ctx.html`
${createNavTemplate(ctx)}
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list" @click=${onSearch}>Search</button>
    </div>

    <h2>Results:</h2>

    <!-- Show after click Search button -->
    <div class="search-result">
        <!-- Search Result Here -->
    </div>
</section>
${createFooterTemplate(ctx.html)}`;

const searchResultTemplate = (html, albumsArr, user) => html`
<!-- If have matches -->
${albumsArr.length ?
        albumsArr.map(album => html`
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
        ${user ? html`
        <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : null}
    </div>
</div>`)
        : html`
<!-- If there are no matches -->
<p class="no-result">No result.</p>`}`

function renderSearchPage(ctx) {
    const user = hasUser();
    ctx.render(searchTemplate(ctx, onSearch), ctx.root);

    async function onSearch(e) {
        e.preventDefault();
        const albumName = document.querySelector('input#search-input').value;
        const parent = ctx.root.querySelector('div.search-result');
        if (!albumName) {
            return alert('Album Name is required!');
        }
        // console.log(albumName);
        // page.redirect(`/catalog/search/albums/where?name=${albumName}`);
        searchAlbumByName(albumName)
            .then(albumsArr => {
                ctx.render(searchResultTemplate(ctx.html, albumsArr, user), parent);
            })
            .catch(err => alert(err.message));
    }
}


export {
    renderSearchPage
}