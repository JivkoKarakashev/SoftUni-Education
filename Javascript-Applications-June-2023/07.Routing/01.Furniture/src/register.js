import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const registerTemplate = (onSubmit) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
`;

export function registerPage(ctx) {
    // console.log(ctx);
    ctx.render(registerTemplate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const { email, password, rePass } = Object.fromEntries(new FormData(e.currentTarget).entries());
        if (email == '' || password == '') {
            return alert('All fields are required!')
        }
        if (password !== rePass) {
            return alert('Passwords don\'t match!')
        }
        const userData = await post('/users/register', { email, password, rePass });
        // console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        updateNav();
        ctx.page.redirect('/');
    }
}