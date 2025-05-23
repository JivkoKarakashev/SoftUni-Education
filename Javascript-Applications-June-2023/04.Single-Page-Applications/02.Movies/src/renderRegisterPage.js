import { rootElRef } from "./app.js";
import { register } from "./auth.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const registerTemplate = (ctx, onRegister) => ctx.html`
${createNavTemplate(ctx)}
<section id="form-sign-up" class="view-section">
    <form id="register-form" class="text-center border border-light p-5" action="/register" method="post" @submit=${onRegister}>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value=""/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value=""/>
      </div>

      <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value=""/>
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
${createFooterTemplate(ctx.html)}
`;

function renderRegisterPage(ctx) {
    ctx.render(registerTemplate(ctx, onRegister), rootElRef);

    async function onRegister(e) {
        e.preventDefault();
        const { email, password, repeatPassword } = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log(email, password, repeatPassword);

        register(email, password, repeatPassword)
            .then(userData => {
                console.log(userData);
                const serializedUserData = JSON.stringify(userData);
                localStorage.setItem('userData', serializedUserData);
                ctx.page.redirect('/');
            })
            .catch(err => {
                return alert(err.message);
            });
    }
}

export {
    renderRegisterPage
}