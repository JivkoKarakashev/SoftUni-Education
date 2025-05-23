import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const loginTemplate = (onSubmit) => html`
        <section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit=${onSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>
        
                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">
        
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export function loginPage(ctx, next) {
    // console.log(ctx);
    ctx.render(loginTemplate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const { username, password } = Object.fromEntries(new FormData(e.currentTarget).entries());
        if (username == '' || password == '') {
            return alert('All fields are required!');
        }
        const userData = await post('/users/login', { username, password });
        // console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        updateNav();
        ctx.page.redirect('/catalog');
    }
}
