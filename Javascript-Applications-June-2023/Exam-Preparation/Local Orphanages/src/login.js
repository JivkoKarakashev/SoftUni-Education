import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const loginTemplate = (onSubmit) => html`
        <section id="login-page" class="auth">
            <form id="login" @submit=${onSubmit}>
                <h1 class="title">Login</h1>
        
                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>
        
                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>
        
                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>
`;

export function loginPage(ctx, next) {
    // console.log(ctx);
    ctx.render(loginTemplate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.target).entries());
        if (!email || !password) {
            return alert('All fields are required!');
        }
        const userData = await post('/users/login', { email, password });
        // console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        updateNav();
        ctx.page.redirect('/dashboard');
    }
}
