import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';
import { notification } from './notification.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
  <form id="register-form" @submit=${onSubmit}>
    <div class="container">
      <h1>Register</h1>
      <label for="username">Username</label>
      <input id="username" type="text" placeholder="Enter Username" name="username">
      <label for="email">Email</label>
      <input id="email" type="text" placeholder="Enter Email" name="email">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Enter Password" name="password">
      <label for="repeatPass">Repeat Password</label>
      <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
      <div class="gender">
        <input type="radio" name="gender" id="female" value="female">
        <label for="female">Female</label>
        <input type="radio" name="gender" id="male" value="male">
        <label for="male">Male</label>
      </div>
      <input type="submit" class="registerbtn button" value="Register">
      <div class="container signin">
        <p>Already have an account?<a href="/login">Sign in</a>.</p>
      </div>
    </div>
  </form>
</section>
`;

export function registerPage(ctx, next) {
  let userData = null;
  // console.log(ctx);
  ctx.render(registerTemplate(onSubmit));
  async function onSubmit(e) {
    e.preventDefault();
    const inputDataObj = Object.fromEntries(new FormData(e.target).entries());
    const { username, email, password, gender } = inputDataObj;
    const rePass = inputDataObj['repeatPass'];
    // console.log(gender);
    try {
      if (!username || !email || !password || !gender) {
        throw new Error('All fields are required!');
      }
      if (password !== rePass) {
        throw new Error('Passwords don\'t match!');
      }
      userData = await post('/users/register', { username, email, password, gender });

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