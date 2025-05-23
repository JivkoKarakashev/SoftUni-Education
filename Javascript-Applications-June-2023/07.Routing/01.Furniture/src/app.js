import page from '../node_modules/page/page.mjs';

import { addRender } from './render.js';
import { catalogPage } from './catalog.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { onLogout } from './logout.js';
import { createPage } from './create.js';
import { editPage } from './edit.js';
import { myFurniturePage } from './my-furniture.js';
import { detailsPage } from './details.js';

const navElement = document.querySelector('nav');
navElement.onclick = updateActive;

page(addRender);
page('/', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);
page('/my-furniture', myFurniturePage);
page('/furniture/:id', detailsPage);
page('/furniture/:id/edit', editPage);

updateNav();

page.start();

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const allGuestNavElements = document.querySelectorAll('nav > div#guest');
    const allUserNavElements = document.querySelectorAll('nav > div#user');
    if (userData != null) {
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = 'none');
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = 'inline');
    } else {
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = 'none');
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = 'inline');
    }
}

function updateActive(e) {
    const allButtons = Array.from(navElement.querySelectorAll('a'));
    // console.log(allButtons);
    if (e.target.tagName == 'A') {
        // console.log(e.target);
        allButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
}