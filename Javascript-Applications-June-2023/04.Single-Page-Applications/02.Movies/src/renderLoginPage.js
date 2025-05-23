import { rootElRef } from "./app.js";
import { createNavTemplate } from "./navTemplate.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { login } from "./auth.js";

const loginTemplate = (ctx, onLogin) => ctx.html`
${createNavTemplate(ctx)}
<section id="form-login" class="view-section">
    <form id="login-form" class="text-center border border-light p-5" action="/login" method="post" @submit=${onLogin}>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value=""/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value=""/>
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>
${createFooterTemplate(ctx.html)}
`;

function renderLoginPage(ctx) {
    ctx.render(loginTemplate(ctx, onLogin), rootElRef);

    async function onLogin(e) {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(email, password);

        login(email, password)
            .then(userData => {
                // console.log(userData);
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
    renderLoginPage
}