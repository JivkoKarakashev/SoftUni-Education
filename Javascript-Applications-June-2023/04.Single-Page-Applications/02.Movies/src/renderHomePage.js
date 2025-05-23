import { rootElRef } from "./app.js";
import { hasUser } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";
import { getAllMovies } from "./api.js";
import { createMovieListTemplate } from "./movieListTemplate.js";
import { createFooterTemplate } from "./footerTemplate.js";

const homePageTemplate = (ctx) => ctx.html`
${createNavTemplate(ctx)}

<section id="home-page" class="view-section">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40">
    <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg" class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px"/>
      <h1 class="display-4">Movies</h1>
      <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>

    <h1 class="text-center">Movies</h1>

    ${hasUser() ? ctx.html`
    <section id="add-movie-button" class="user">
      <a href="/create" class="btn btn-warning">Add Movie</a>
    </section>`
    : null}

    <section id="movie">
      <div class="mt-3">
        <div class="row d-flex d-wrap">
          <ul id="movies-list" class="card-deck d-flex justify-content-center" style="width: 100%" >
            <!-- movie list -->
          </ul>
        </div>
      </div>
    </section>
</section>

${createFooterTemplate(ctx.html)}
`;

function renderHomePage(ctx) {
  ctx.render(homePageTemplate(ctx), rootElRef);

  getAllMovies()
    .then(moviesArr => {
      // console.log(moviesArr);
      const movieListEl = rootElRef.querySelector('#movies-list');
      // console.log(movieListEl);
      ctx.render(createMovieListTemplate(ctx, moviesArr), movieListEl);
    })
    .catch(err => {
      return alert(err.message);
    });
}

export {
  renderHomePage
}