import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const loginTemplate = (onSubmit) => html`
        <section id="login-page" class="login">
            <form id="login-form" action="" method="" @submit=${onSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`;

export function loginPage(ctx, next) {
    // console.log(ctx);
    ctx.render(loginTemplate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget).entries());
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        const userData = await post('/users/login', { email, password });
        // console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        updateNav();
        ctx.page.redirect('/dashboard');
    }
}
