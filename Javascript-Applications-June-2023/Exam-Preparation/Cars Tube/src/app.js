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
import { searchPage } from './search.js';
import { myCatalogPage } from './my-catalog.js';

const navElement = document.querySelector('nav');
navElement.onclick = updateActive;
const welcomeElement = navElement.querySelector('div#profile a:nth-child(1)');
// console.log(welcomeElement);

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
page('/search', searchPage);
page('/my-catalog', myCatalogPage);

updateNav();

page.start();

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const allGuestNavElements = document.querySelectorAll('nav > div#guest');
    const allUserNavElements = document.querySelectorAll('nav > div#profile');
    if (userData != null) {
        welcomeElement.textContent = `Welcome ${userData['username']}`;
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = 'none');
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = '');
    } else {
        welcomeElement.textContent = '';
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = 'none');
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = '');
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