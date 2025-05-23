import { register } from "./auth.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const registerTemplate = (ctx, onRegister) => ctx.html`
<div id="content">
    ${createNavTemplate(ctx)}
    <main>
        <section id="register">
            <article class="narrow">
                <header class="pad-med">
                    <h1>Register</h1>
                </header>
                <form id="register-form" class="main-form pad-large" method="post" action="/register" @submit=${onRegister}>
                    <div class="error">
                        <!-- error HERE -->
                    </div>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Username: <input type="text" name="username"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat: <input type="password" name="repass"></label>
                    <input class="action cta" type="submit" value="Create Account">
                </form>
                <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
                </footer>
            </article>
        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`;

function renderRegisterPage(ctx) {

    ctx.render(registerTemplate(ctx, onRegister), ctx.root);

    async function onRegister(e) {
        e.preventDefault();
        const { email, username, password, repass } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(email, username, password, repass);
        register(email, username, password, repass)
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
    renderRegisterPage
}