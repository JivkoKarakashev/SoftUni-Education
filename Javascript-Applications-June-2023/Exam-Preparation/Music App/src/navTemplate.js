import { logout } from "./auth.js";
import { hasUser } from "./getUserData.js";

const navTemplate = (ctx, user, onLogout) => ctx.html`
<header>
    <nav>
        <img src="/images/headphones.png">
        <a href="/">Home</a>
        <ul>
            <!--All user-->
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/catalog/search">Search</a></li>
            ${user ? ctx.html`
            <!--Only user-->
            <li><a href="/create">Create Album</a></li>
            <li><a href="/auth/logout" @click=${onLogout}>Logout</a></li>`
            : ctx.html`
            <!--Only guest-->
            <li><a href="/auth/login">Login</a></li>
            <li><a href="/auth/register">Register</a></li>`}
        </ul>
    </nav>
</header>`;

function createNavTemplate(ctx) {
    const user = hasUser();
    return (navTemplate(ctx, user, onLogout));

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