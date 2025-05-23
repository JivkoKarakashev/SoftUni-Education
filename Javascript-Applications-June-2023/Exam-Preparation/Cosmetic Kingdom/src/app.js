import page from '../node_modules/page/page.mjs';
////////////////////////////////////////////////////////
import { addRender } from './render.js';
import { homePage } from './home.js';
import { dashboardPage } from './dashboard.js';
import { detailsPage } from './details.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { onLogout } from './logout.js';
import { createPage } from './create.js';
import { editPage } from './edit.js';

page(addRender);
page('index.html', '/');
page('/', homePage);
page('/dashboard', dashboardPage);
page('/dashboard/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);
page('/dashboard/:id/edit', editPage);

updateNav();

page.start();

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const allGuestNavElements = document.querySelectorAll('nav > div.guest');
    const allUserNavElements = document.querySelectorAll('nav > div.user');
    if (userData != null) {
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = 'none');
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = '');
    } else {
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = 'none');
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = '');
    }
}