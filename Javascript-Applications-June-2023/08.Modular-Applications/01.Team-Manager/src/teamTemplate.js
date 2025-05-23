const teamTemplate = (html, team, onDetailsView) => html`
<article class="layout">
    <img src="${team.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.members} Members</span>
        <div><a href="/details/team/${team._id}" class="action" @click=${onDetailsView}>See details</a></div>
    </div>
</article>`;

function createTeamTemplate(ctx, team) {
    return teamTemplate(ctx.html, team, onDetailsView);

    function onDetailsView(e) {
        e.preventDefault();
        console.log(ctx);
        ctx.page.redirect(`/details/team/${team._id}`);
    }
}

export {
    createTeamTemplate
}