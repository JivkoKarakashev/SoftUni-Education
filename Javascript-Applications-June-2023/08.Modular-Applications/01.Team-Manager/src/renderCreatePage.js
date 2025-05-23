import { approveMembershipRequestByMemberId, createMembershipRequestByTeamId, createTeam } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const createTeamTemplate = (ctx, onCreate) => ctx.html`
<div id="content">
    ${createNavTemplate(ctx)}
    <main>
        <section id="create">
            <article class="narrow">
                <header class="pad-med">
                    <h1>New Team</h1>
                </header>
                <form id="create-form" class="main-form pad-large" method="post" action="/create" @submit=${onCreate}>
                    <div class="error">
                        <!-- error HERE -->
                    </div>
                    <label>Team name: <input type="text" name="name"></label>
                    <label>Logo URL: <input type="text" name="logoUrl"></label>
                    <label>Description: <textarea name="description"></textarea></label>
                    <input class="action cta" type="submit" value="Create Team">
                </form>
            </article>
        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`;

function renderCreateTeamTemplate(ctx) {
    ctx.render(createTeamTemplate(ctx, onCreate), ctx.root);

    async function onCreate(e) {
        e.preventDefault();
        const errorElRef = ctx.root.querySelector('form > div.error');
        const { name, logoUrl, description } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(name, logoUrl, description);

        createTeam(name, logoUrl, description)
            .then(team => {
                const { _id } = team;
                return createMembershipRequestByTeamId(_id);
            })
            .then(member => {
                const { _id } = member;
                return approveMembershipRequestByMemberId(_id);
            })
            .then(() => {
                ctx.page.redirect('/teams'); /*TO DO Redirects to Created Team Details Page!!! */
            })
            .catch(err => {
                errorElRef.textContent = err.message;
            });
    }
}

export {
    renderCreateTeamTemplate
}