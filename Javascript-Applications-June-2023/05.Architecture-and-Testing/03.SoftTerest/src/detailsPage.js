import { deleteIdea, getDetailsData } from "./api.js";
import { getUserData, hasUser } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";

const detailsTemplate = (html, details, isOwner, onDelete) => html`
${createNavTemplate(html)}
<div class="container home some">
    <img class="det-img" src="${details.img}" />
    <div class="desc">
        <h2 class="display-5">${details.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${details.description}</p>
    </div>
    <div class="text-center">
        ${isOwner ? html`<a class="btn detb" href="" @click=${onDelete}>Delete</a>` : null}
    </div>
</div>`;

async function renderDetailsPage(ctx) {
    let isOwner = false;
    getDetailsData(ctx.params.id)
        .then(details => {
            // console.log(details);
            if (hasUser()) {
                const { _id } = getUserData();
                isOwner = _id === details._ownerId ? true : false;
            }
            ctx.render(detailsTemplate(ctx.html, details, isOwner, onDelete), ctx.root);
        })
        .catch(err => {
            alert(err.message);
        });

    async function onDelete(e) {
        e.preventDefault();
        deleteIdea(ctx.params.id)
            .then(() => {
                ctx.page.redirect('/ideas');
            })
            .catch(err => {
                alert(err.message);
            });
    }
}

export {
    renderDetailsPage
}