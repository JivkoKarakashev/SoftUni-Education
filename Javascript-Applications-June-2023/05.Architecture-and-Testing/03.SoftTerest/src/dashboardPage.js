import { getDashboardData } from "./api.js";
import { createNavTemplate, switchActiveLink } from "./navTemplate.js";

const dashboardTemplate = (html, ideasArr) => html`
${createNavTemplate(html)}
<div id="dashboard-holder">
    ${ideasArr.length !== 0 ? ideasArr.map(idea => html`
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a class="btn" href="/ideas/${idea._id}">Details</a>
    </div>`) : null}
    <!-- <h1>No ideas yet! Be the first one :)</h1> -->
    ${ideasArr.length === 0 ? html`<h1>No ideas yet! Be the first one :)</h1>` : null}
</div>`;

async function renderDashboardPage(ctx) {
    getDashboardData()
        .then(data => {
            // console.log(data);
            ctx.render(dashboardTemplate(ctx.html, data), ctx.root);
            switchActiveLink('dashboard', ctx.root);
        })
        .catch(err => {
            alert(err.message);
        });
}

export {
    renderDashboardPage
}