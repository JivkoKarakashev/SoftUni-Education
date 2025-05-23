import { logout } from "./auth.js";
import { getUserData, hasUser } from "./getUserData.js";

const navTemplate = (html, email, onNavigateHome, onLogout) => html`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-light" href="/" @click=${onNavigateHome}>Movies</a>
    <ul class="navbar-nav ml-auto">
        ${email ?
    html`
        <li class="nav-item user">
        <a class="nav-link" id="welcome-msg">Welcome, ${email}</a>
      </li>
      <li class="nav-item user">
        <a class="nav-link" href="/logout" @click=${onLogout}>Logout</a>
      </li>`:
    html`
      <li class="nav-item guest">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item guest">
        <a class="nav-link" href="/register">Register</a>
      </li>`}
    </ul>
  </nav>`;

function createNavTemplate(ctx) {
  let email = null;
  if (hasUser()) {
    const userData = getUserData();
    email = userData.email;
  }
  return navTemplate(ctx.html, email, onNavigateHome, onLogout);

  function onNavigateHome(e) {
    e.preventDefault();
    ctx.page.redirect('/');
  }

  async function onLogout(e) {
    e.preventDefault();
    logout()
      .then(cmd => {
        if (cmd === 'redirect') {
          ctx.page.redirect('/login');
        }
      })
      .catch(err => {
        return alert(err.message);
      });
  }
}

export {
  createNavTemplate
}