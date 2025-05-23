import { rootElRef } from "./app.js";
import { getLikeByUserIdPerMovieId, getLikesByMovieId, getMovieById } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { getUserData, hasUser } from "./getUserData.js";
import { createLikeSectionTemplate } from "./likeSectionTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const detailsTemplate = (ctx, movie) => ctx.html`
${createNavTemplate(ctx)}
<section id="movie-example" class="view-section">
    <div class="container">
      <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>

        <div class="col-md-8">
          <img class="img-thumbnail" src="${movie.img}" alt="Movie"/>
        </div>
        <div class="col-md-4 text-center">
          
        </div>
      </div>
    </div>
</section>
${createFooterTemplate(ctx.html)}
`;

async function renderDetailsPage(ctx) {
    const id = ctx.params.id;
    const user = hasUser();
    let isOwner = false;
    // console.log(id);
    if (user) {
        const { _id } = getUserData();
        const [movie, likes, liked] = await Promise.all([getMovieById(id), getLikesByMovieId(id), getLikeByUserIdPerMovieId(id, _id)]);
        isOwner = movie._ownerId === _id;
        console.log('Is Owner: ' + isOwner);
        console.log('Movie: ');
        console.log(movie);
        console.log('Total likes: ' + likes);
        console.log('Already liked?: ' + liked);
        ctx.render(detailsTemplate(ctx, movie), rootElRef);
        const parentElRef = rootElRef.querySelector('.col-md-4.text-center');
        ctx.render(createLikeSectionTemplate(ctx, movie, likes, isOwner, liked), parentElRef);
    } else {
        const [movie, likes] = await Promise.all([getMovieById(id), getLikesByMovieId(id)]);
        ctx.render(detailsTemplate(ctx, movie), rootElRef);
        const parentElRef = rootElRef.querySelector('.col-md-4.text-center');
        ctx.render(createLikeSectionTemplate(ctx, movie, likes, isOwner, true), parentElRef);
    }

}

export {
    renderDetailsPage
}