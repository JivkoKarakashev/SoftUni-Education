import { logout } from "./auth.js";
import { hasUser } from "./getUserData.js";

const navTemplate = (html, user, onLogout) => html`
<header id="titlebar" class="layout">
    <a href="/" class="site-logo">Team Manager</a>
    <nav>
        <a href="/teams" class="action">Browse Teams</a>
        ${!user ? html`
        <a href="/login" class="action">Login</a>
        <a href="/register" class="action">Register</a>`
        : html`
        <a href="/myteams" class="action">My Teams</a>
        <a href="/logout" class="action" @click=${onLogout}>Logout</a>
        `}
    </nav>
</header>`

function createNavTemplate(ctx) {
    const user = hasUser();
    return navTemplate(ctx.html, user, onLogout);

    async function onLogout(e) {
        e.preventDefault();
        logout()
            .then(command => {
                if (command === 'redirect') {
                    ctx.page.redirect('/');
                }
            })
            .catch(err => alert(err.message));
    }
}

export {
    createNavTemplate
}