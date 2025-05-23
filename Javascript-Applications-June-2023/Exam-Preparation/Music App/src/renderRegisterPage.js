import { register } from "./auth.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const registerTemplate = (ctx, onRegister) => ctx.html`
${createNavTemplate(ctx)}
<section id="registerPage">
    <form action="/auth/register" method="post" @submit=${onRegister}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/auth/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
${createFooterTemplate(ctx.html)}`;

function renderRegisterPage(ctx) {
    ctx.render(registerTemplate(ctx, onRegister), ctx.root);

    async function onRegister(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget).entries());
        const { email, password } = formData;
        const repass = formData['conf-pass'];
        // console.log(email, password, repass);
        register(email, password, repass)
            .then(userData => {
                const serializedUserData = JSON.stringify(userData);
                localStorage.setItem('userData', serializedUserData);
                ctx.page.redirect('/');
            })
            .catch(err => alert(err.message));
    }
}

export {
    renderRegisterPage
}