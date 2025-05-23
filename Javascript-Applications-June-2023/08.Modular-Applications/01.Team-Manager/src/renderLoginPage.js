import { login } from "./auth.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const loginTemplate = (ctx, onLogin) => ctx.html`
<div id="content">
    ${createNavTemplate(ctx)}
    <main>
        <section id="login">
            <article class="narrow">
                <header class="pad-med">
                    <h1>Login</h1>
                </header>
                <form id="login-form" class="main-form pad-large" method="post" action="/login" @submit=${onLogin}>
                    <div class="error">
                        <!-- error HERE -->
                    </div>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <input class="action cta" type="submit" value="Sign In">
                </form>
                <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                </footer>
            </article>
        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`;

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
                ctx.page.redirect('/'); /*TO DO Redirects to My team Page!!! */
            })
            .catch(err => {
                const errorElRef = ctx.root.querySelector('form > div.error');
                errorElRef.textContent = err.message;
                return;
            });
    }
}

export {
    renderLoginPage
}