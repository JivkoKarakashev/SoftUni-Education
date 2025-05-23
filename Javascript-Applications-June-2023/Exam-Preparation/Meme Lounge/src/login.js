import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';
import { notification } from './notification.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <form id="login-form" @submit=${onSubmit}>
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function loginPage(ctx, next) {
    let userData = null;
    // console.log(ctx);
    ctx.render(loginTemplate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.target).entries());
        try {
            if (!email || !password) {
                throw new Error('All fields are required!');
            }
            userData = await post('/users/login', { email, password });
        } catch (err) {
            notification(err);
            return;
        }
        // console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        updateNav();
        ctx.page.redirect('/dashboard');
    }
}
