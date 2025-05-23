import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const registerTemplate = (onSubmit) => html`
        <section id="register-page" class="content auth">
            <form id="register" @submit='${onSubmit}'>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`;

export function registerPage(ctx, next) {
  // console.log(ctx);
  ctx.render(registerTemplate(onSubmit));
  async function onSubmit(e) {
    e.preventDefault();
    const inputDataObj = Object.fromEntries(new FormData(e.currentTarget).entries());
    const { email, password } = inputDataObj;
    const rePass = inputDataObj['confirm-password'];
    // console.log(rePass);
    if (email == '' || password == '') {
      return alert('All fields are required!')
    }
    if (password !== rePass) {
      return alert('Passwords don\'t match!')
    }
    const userData = await post('/users/register', { email, password });
    // console.log(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
    updateNav();
    ctx.page.redirect('/');
  }
}