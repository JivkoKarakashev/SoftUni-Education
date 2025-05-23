import { editTeamById, getTeamById } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const editTeamTemplate = (ctx, team, onEdit) => ctx.html`
<div id="content">
    ${createNavTemplate(ctx)}
    <main>
        <section id="edit">
            <article class="narrow">
                <header class="pad-med">
                    <h1>Edit Team</h1>
                </header>
                <form id="edit-form" class="main-form pad-large" method="post" action="details/team/${team._id}/edit" @submit=${onEdit}>
                    <div class="error">
                        <!-- error HERE -->
                    </div>
                    <label>Team name: <input type="text" name="name" value="${team.name}"></label>
                    <label>Logo URL: <input type="text" name="logoUrl" value=${team.logoUrl}></label>
                    <label>Description: <textarea name="description">${team.description}</textarea></label>
                    <input class="action cta" type="submit" value="Save Changes">
                </form>
            </article>
        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`;

function renderEditTeamPage(ctx) {
    const id = ctx.params.id;
    // console.log(id);
    getTeamById(id)
        .then(team => {
            ctx.render(editTeamTemplate(ctx, team, onEdit), ctx.root);
        })
        .catch(err => alert(err.message));

    async function onEdit(e) {
        e.preventDefault();
        const { name, logoUrl, description } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(name, logoUrl, description);

        editTeamById(id, name, logoUrl, description)
            .then(team => {
                // console.log(team);
                ctx.page.redirect(`/details/team/${team._id}`);
            })
            .catch(err => {
                const errorElRef = ctx.root.querySelector('form > div.error');
                errorElRef.textContent = err.message;
            });
    }
}

export {
    renderEditTeamPage
}