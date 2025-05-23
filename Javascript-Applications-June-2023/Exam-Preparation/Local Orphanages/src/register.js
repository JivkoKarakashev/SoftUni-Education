import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const registerTemplate = (onSubmit) => html`
        <section id="register-page" class="auth">
          <form id="register" @submit=${onSubmit}>
            <h1 class="title">Register</h1>
        
            <article class="input-group">
              <label for="register-email">Email: </label>
              <input type="email" id="register-email" name="email">
            </article>
        
            <article class="input-group">
              <label for="register-password">Password: </label>
              <input type="password" id="register-password" name="password">
            </article>
        
            <article class="input-group">
              <label for="repeat-password">Repeat Password: </label>
              <input type="password" id="repeat-password" name="repeatPassword">
            </article>
        
            <input type="submit" class="btn submit-btn" value="Register">
          </form>
        </section>
`;

export function registerPage(ctx, next) {
  // console.log(ctx);
  ctx.render(registerTemplate(onSubmit));
  async function onSubmit(e) {
    e.preventDefault();
    const inputDataObj = Object.fromEntries(new FormData(e.target).entries());
    const { email, password } = inputDataObj;
    const rePass = inputDataObj['repeatPassword'];
    // console.log(rePass);
    if (!email || !password) {
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