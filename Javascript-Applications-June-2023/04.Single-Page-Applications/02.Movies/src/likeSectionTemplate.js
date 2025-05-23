import { addLike, deleteMovieById } from "./api.js";
import { rootElRef } from "./app.js";

const likeSectionTemplate = (html, movie, onDelete, onLike, likes, isOwner, liked) => html`
<h3 class="my-3">Movie Description</h3>
<p>${movie.description}</p>
${isOwner ? html`
<a class="btn btn-danger" href="/details/${movie._id}/delete" @click=${onDelete}>Delete</a>
<a class="btn btn-warning" href="/details/${movie._id}/edit">Edit</a>
`: !liked ? html`
<a class="btn btn-primary" href="/details/${movie._id}/like" @click=${onLike}>Like</a>
` : null}
<span class="enrolled-span">Liked ${likes}</span>`

function createLikeSectionTemplate(ctx, movie, likes, isOwner, liked) {
    return likeSectionTemplate(ctx.html, movie, onDelete, onLike, likes, isOwner, liked);

    async function onLike(e) {
        e.preventDefault();
        addLike(movie._id)
            .then(like => {
                // console.log(like);
                const parentElRef = rootElRef.querySelector('.col-md-4.text-center');
                ctx.render(likeSectionTemplate(ctx.html, movie, onDelete, onLike, ++likes, isOwner, true), parentElRef);
            })
            .catch(err => {
                alert(err.message);
            });
    }

    async function onDelete(e) {
        e.preventDefault();
        deleteMovieById(movie._id)
            .then(deletedOn => {
                // console.log(deletedOn);
                ctx.page.redirect('/');
            })
            .catch(err => {
                return alert(err.message);
            });
    }
}

export {
    createLikeSectionTemplate
}