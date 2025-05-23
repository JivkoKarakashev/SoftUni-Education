import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateNav } from './app.js';

const registerTemplate = (onSubmit) => html`
        <section id="register">
          <div class="container">
            <form id="register-form" @submit=${onSubmit}>
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
              <hr>
        
              <p>Username</p>
              <input type="text" placeholder="Enter Username" name="username" required>
        
              <p>Password</p>
              <input type="password" placeholder="Enter Password" name="password" required>
        
              <p>Repeat Password</p>
              <input type="password" placeholder="Repeat Password" name="repeatPass" required>
              <hr>
        
              <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
              <p>Already have an account?
                <a href="/login">Sign in</a>.
              </p>
            </div>
          </div>
        </section>
`;

export function registerPage(ctx, next) {
  // console.log(ctx);
  ctx.render(registerTemplate(onSubmit));
  const allInputFiledsArr = Array.from(document.querySelectorAll('form > input'));
  allInputFiledsArr.pop();
  allInputFiledsArr.forEach((inputField) => inputField.required = false);
  // console.log(allInputFiledsArr);
  async function onSubmit(e) {
    e.preventDefault();
    // console.log('here');
    const inputDataObj = Object.fromEntries(new FormData(e.currentTarget).entries());
    const { username, password } = inputDataObj;
    const rePass = inputDataObj['repeatPass'];
    console.log(username);
    if (username == '' || password == '') {
      return alert('All fields are required!')
    }
    if (password !== rePass) {
      return alert('Passwords don\'t match!')
    }
    const userData = await post('/users/register', { username, password });
    // console.log(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
    updateNav();
    ctx.page.redirect('/catalog');
  }
}