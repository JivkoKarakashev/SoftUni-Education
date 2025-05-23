import { createMovie } from "./api.js";
import { rootElRef } from "./app.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const createTemplate = (ctx, onCreate) => ctx.html`
${createNavTemplate(ctx)}
<section id="add-movie" class="view-section">
    <form id="add-movie-form" class="text-center border border-light p-5" action="/create" method="post" @submit=${onCreate}>
      <h1>Add Movie</h1>
      <div class="form-group">
        <label for="title">Movie Title</label>
        <input id="title" type="text" class="form-control" placeholder="Title" name="title" value=""/>
      </div>
      <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Description" name="description"></textarea>
      </div>
      <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value=""/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
  ${createFooterTemplate(ctx.html)}
  `;

function renderCreatePage(ctx) {

    ctx.render(createTemplate(ctx, onCreate), rootElRef);

    async function onCreate(e) {
        e.preventDefault();
        const { title, description, img } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(title, description, img);
        createMovie(title, description, img)
            .then(movie => {
                // console.log(movie);
                ctx.page.redirect('/');
            })
            .catch(err => {
                return alert(err.message);
            });
    }
}

export {
    renderCreatePage
}