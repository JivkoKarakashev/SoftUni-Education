import page from '../node_modules/page/page.mjs';
////////////////////////////////////////////////////////
import { addRender } from './render.js';
import { homePage } from './home.js';
import { catalogPage } from './catalog.js';
import { detailsPage } from './details.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { onLogout } from './logout.js';
import { createPage } from './create.js';
import { editPage } from './edit.js';

// const allViewsArray = Array.from(document.querySelectorAll('div#box > :nth-child(1n + 3)'));
// allViewsArray.forEach(view => view.replaceChildren());
// console.log(allViewsArray);

page(addRender);
page('index.html', '/');
page('/', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);
page('/catalog/:id/edit', editPage);

updateNav();

page.start();

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const allGuestNavElements = Array.from(document.querySelectorAll('nav > div#guest'));
    const allUserNavElements = Array.from(document.querySelectorAll('nav > div#user'));
    if (userData != null) {
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = 'none');
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = '');
    } else {
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = 'none');
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = '');
    }
}