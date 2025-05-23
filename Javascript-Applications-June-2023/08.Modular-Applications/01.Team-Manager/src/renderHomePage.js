import { createFooterTemplate } from "./footerTemplate.js";
import { hasUser } from "./getUserData.js";
import { createNavTemplate } from "./navTemplate.js";

const homeTemplate = (ctx, user) => ctx.html`
<div id="content">
    ${createNavTemplate(ctx)}
    <main>
        <section id="home">
            <article class="hero layout">
                <img src="../assets/team.png" class="left-col pad-med">
                <div class="pad-med tm-hero-col">
                    <h2>Welcome to Team Manager!</h2>
                    <p>Want to organize your peers? Create and manage a team for free.</p>
                    <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                    ${!user ? ctx.html`
                    <a href="/register" class="action cta">Sign Up Now</a>`
                    : ctx.html`
                    <a href="/teams" class="action cta">Browse Teams</a>
                    `}
                </div>
            </article>
        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`;

function renderHomePage(ctx) {
    const user = hasUser();
    ctx.render(homeTemplate(ctx, user), ctx.root);
}

export {
    renderHomePage
}