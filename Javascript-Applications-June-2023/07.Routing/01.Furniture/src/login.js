import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const loginTemplate = (onSubmit) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;

export function loginPage(ctx) {
    // console.log(ctx);
    ctx.render(loginTemplate(onSubmit));
    async function onSubmit(e){
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget).entries());
        const userData = await post('/users/login', { email, password });
        // console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        updateNav();
        ctx.page.redirect('/');
    }
}
