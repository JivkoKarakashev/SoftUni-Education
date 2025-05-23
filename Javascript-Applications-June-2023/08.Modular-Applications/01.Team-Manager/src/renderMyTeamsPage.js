import { getMembersByTeamsIds, getTeamsByMemberId } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { getUserData } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";

const myTeamsTemplate = (ctx, teamsArr) => ctx.html`
<div id="content">
    ${createNavTemplate(ctx)}
    <main>
        <section id="my-teams">

            <article class="pad-med">
                <h1>My Teams</h1>
            </article>

            ${teamsArr.length ? teamsArr.map(team => ctx.html`
            <article class="layout">
                <img src="${team.logoUrl}" class="team-logo left-col">
                <div class="tm-preview">
                    <h2>${team.name}</h2>
                    <p>${team.description}</p>
                    <span class="details">${team.members} Members</span>
                    <div><a href="/details/team/${team._id}" class="action">See details</a></div>
                </div>
            </article>
            `) : ctx.html`
            <article class="layout narrow">
                <div class="pad-med">
                    <p>You are not a member of any team yet.</p>
                    <p><a href="/teams">Browse all teams</a> to join one, or use the button bellow to cerate your own team.</p>
                </div>
                <div class=""><a href="/create" class="action cta">Create Team</a></div>
            </article>`}

        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`;

function renderMyTeamsPage(ctx) {

    const { _id } = getUserData();
    let teamsArr = [];
    let teamsIds = '';

    getTeamsByMemberId(_id)
        .then(objsArr => {
            if (objsArr.length === 0) {
                ctx.render(myTeamsTemplate(ctx, teamsArr), ctx.root);
                throw new Error('empty');
            }
            teamsArr = objsArr.map(objs => objs.team);
            teamsIds = teamsArr.map(team => `%22${team._id}%22`).join(',');
            // console.log(teamsArr);
            // console.log(teamsIds);
        })
        .then(async () => {
            return getMembersByTeamsIds(teamsIds);
        })
        .then(members => {
            teamsArr.forEach(team => {
                team.members = 0;
                members.forEach(member => {
                    if (member.teamId === team._id) {
                        team.members++;
                    }
                });
            });
            console.log(members)
            console.log(teamsArr);
            ctx.render(myTeamsTemplate(ctx, teamsArr), ctx.root);
        })
        .catch(err => {
            if (err.message === 'empty') {
                return;
            }
            alert(err.message)
        });


}

export {
    renderMyTeamsPage
}