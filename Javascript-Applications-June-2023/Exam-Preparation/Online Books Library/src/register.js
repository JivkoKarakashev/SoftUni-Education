import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const registerTemplate = (onSubmit) => html`
        <section id="register-page" class="register">
          <form id="register-form" action="" method="" @submit=${onSubmit}>
            <fieldset>
              <legend>Register Form</legend>
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
              <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                  <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
              </p>
              <input class="button submit" type="submit" value="Register">
            </fieldset>
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
    const rePass = inputDataObj['confirm-pass'];
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
    ctx.page.redirect('/dashboard');
  }
}