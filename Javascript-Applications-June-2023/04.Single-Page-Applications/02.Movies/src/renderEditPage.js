import { editMovieById, getMovieById } from "./api.js";
import { rootElRef } from "./app.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const editTemplate = (ctx, movie, onEdit) => ctx.html`
${createNavTemplate(ctx)}
<section id="edit-movie" class="view-section">
    <form class="text-center border border-light p-5" action="/details/${movie._id}/edit" method="post" @submit=${onEdit}>
      <h1>Edit Movie</h1>
      <div class="form-group">
        <label for="title">Movie Title</label>
        <input id="title" type="text" class="form-control" placeholder="Movie Title" value="${movie.title}" name="title"/>
      </div>
      <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Movie Description..." name="description">${movie.description}</textarea>
      </div>
      <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value="${movie.img}" name="img"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>
${createFooterTemplate(ctx.html)}
`;

function renderEditPage(ctx) {
    const id = ctx.params.id;

    getMovieById(id)
        .then(movie => {
            // console.log(movie);
            ctx.render(editTemplate(ctx, movie, onEdit), rootElRef);
        })
        .catch(err => alert(err.message));


    async function onEdit(e) {
        e.preventDefault();
        const { title, description, img } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(title, description, img);
        editMovieById(id, title, description, img)
            .then(movie => {
                // console.log(movie);
                ctx.page.redirect(`/details/${movie._id}`);
            })
            .catch(err => alert(err.message));
    }
}

export {
    renderEditPage
}