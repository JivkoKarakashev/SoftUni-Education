import { getAllMembers, getAllTeams } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { hasUser } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";
import { createTeamTemplate } from "./teamTemplate.js";
import { countMembersPerTeam } from "./utils.js";

const teamsTemplate = (ctx, teamsArr, user) => ctx.html`
<div id="content">   
    ${createNavTemplate(ctx)}
    <main>
        <section id="browse">

        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>

        ${user ? ctx.html`
        <article class="layout narrow">
            <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
        </article>
        ` : null}

        ${teamsArr.length ? teamsArr.map(team => createTeamTemplate(ctx, team)) : null}

        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`

async function renderTeamsPage(ctx) {
    const user = hasUser();
    Promise.all([getAllTeams(), getAllMembers()])
        .then(([teamsArr, membersArr]) => {
            // console.log(teamsArr, membersArr);
            const processedTeamsArr = countMembersPerTeam(teamsArr, membersArr);
            ctx.render(teamsTemplate(ctx, processedTeamsArr, user), ctx.root);
        })
        .catch(err => alert(err.message));

    // ctx.render(teamsTemplate(ctx), ctx.root);
}

export {
    renderTeamsPage
}