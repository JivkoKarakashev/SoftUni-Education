import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const homeTemplate = (ctx) => ctx.html`
${createNavTemplate(ctx)}
<section id="welcomePage">
    <div id="welcome-message">
        <h1>Welcome to</h1>
        <h1>My Music Application!</h1>
    </div>

    <div class="music-img">
        <img src="/images/musicIcons.webp">
    </div>
</section>
${createFooterTemplate(ctx.html)}`;

function renderHomePage(ctx) {
    ctx.render(homeTemplate(ctx), ctx.root);
}

export {
    renderHomePage
}