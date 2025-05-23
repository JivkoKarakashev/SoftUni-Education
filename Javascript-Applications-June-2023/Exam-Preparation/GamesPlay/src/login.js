import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const loginTemplate = (onSubmit) => html`
        <section id="login-page" class="auth">
            <form id="login" @submit='${onSubmit}'>

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
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
        ctx.page.redirect('/');
    }
}
