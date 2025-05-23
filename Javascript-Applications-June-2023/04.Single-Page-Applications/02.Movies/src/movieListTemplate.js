const movieListTemplate = (html, moviesArr) => moviesArr.map(movie => html`
<li class="card mb-4">
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400" height="auto">
    <div class="card-body">
        <h6 class="card-title">${movie.title}</h6>
    </div>
    <div class="card-footer">
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" data-ownerId="${movie._ownerId}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>
</li>`);

function createMovieListTemplate(ctx, moviesArr) {
    return movieListTemplate(ctx.html, moviesArr);
}

export {
    createMovieListTemplate
}