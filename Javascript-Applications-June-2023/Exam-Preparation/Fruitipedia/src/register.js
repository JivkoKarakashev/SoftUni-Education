import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const registerTemplate = (onSubmit) => html`
        <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${onSubmit}>
              <input type="text" name="email" id="register-email" placeholder="email" />
              <input type="password" name="password" id="register-password" placeholder="password" />
              <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
`;

export function registerPage(ctx, next) {
  // console.log(ctx);
  ctx.render(registerTemplate(onSubmit));
  // const allInputFiledsArr = Array.from(document.querySelectorAll('form > input'));
  // allInputFiledsArr.pop();
  // allInputFiledsArr.forEach((inputField) => inputField.required = false);
  // console.log(allInputFiledsArr);
  async function onSubmit(e) {
    e.preventDefault();
    // console.log('here');
    const inputDataObj = Object.fromEntries(new FormData(e.currentTarget).entries());
    const { email, password } = inputDataObj;
    const rePass = inputDataObj['re-password'];
    // console.log(email);
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