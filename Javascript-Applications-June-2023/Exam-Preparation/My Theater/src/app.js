import page from '../node_modules/page/page.mjs';
////////////////////////////////////////////////////////
import { addRender } from './render.js';
import { homePage } from './home.js';
import { detailsPage } from './details.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { onLogout } from './logout.js';
import { createPage } from './create.js';
import { editPage } from './edit.js';
import { myProfilePage } from './my-profile.js';

page(addRender);
page('index.html', '/');
page('/', homePage);
page('/dashboard/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);
page('/dashboard/:id/edit', editPage);
page('/my-profile', myProfilePage);

updateNav();

page.start();

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const allGuestNavElements = document.querySelectorAll('nav ul > li.guest');
    const allUserNavElements = document.querySelectorAll('nav ul > li.user');
    if (userData != null) {
        // welcomeElement.textContent = `Welcome, ${userData['email']}`;
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = 'none');
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = '');
    } else {
        // welcomeElement.textContent = 'Welcome, {email}';
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = 'none');
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = '');
    }
}