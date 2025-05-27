import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const registerTemplate = (onSubmit) => html`
        <section id="registerPage">
          <form class="registerForm" @submit=${onSubmit}>
            <img src="/images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
              <label for="email">Email:</label>
              <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
        
            <div class="on-dark">
              <label for="password">Password:</label>
              <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
        
            <div class="on-dark">
              <label for="repeatPassword">Repeat Password:</label>
              <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
            </div>
        
            <button class="btn" type="submit">Register</button>
        
            <p class="field">
              <span>If you have profile click <a href="/login">here</a></span>
            </p>
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
    ctx.page.redirect('/');
  }
}