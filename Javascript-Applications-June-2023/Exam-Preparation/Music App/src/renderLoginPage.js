import { login } from "./auth.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const loginTemplate = (ctx, onLogin) => ctx.html`
${createNavTemplate(ctx)}
<section id="loginPage">
    <form action="/auth/login" method="post" @submit=${onLogin}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/auth/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
${createFooterTemplate(ctx.html)}`;

function renderLoginPage(ctx) {

    ctx.render(loginTemplate(ctx, onLogin), ctx.root);

    async function onLogin(e) {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(email, password);

        login(email, password)
            .then(userData => {
                const serializedUserData = JSON.stringify(userData);
                localStorage.setItem('userData', serializedUserData);
                ctx.page.redirect('/');
            })
            .catch(err => alert(err.message));
    }
}

export {
    renderLoginPage
}