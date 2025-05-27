import page from '../node_modules/page/page.mjs';
////////////////////////////////////////////////////////
import { addRender } from './render.js';
import { dashboardPage } from './dashboard.js';
import { detailsPage } from './details.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { onLogout } from './logout.js';
import { createPage } from './create.js';
import { editPage } from './edit.js';
import { myBooksPage } from './my-books.js';

const navElement = document.querySelector('nav');
const welcomeElement = navElement.querySelector('div#user span');
// console.log(welcomeElement);

page(addRender);
page('index.html', '/');
page('/', dashboardPage);
page('/dashboard', dashboardPage);
page('/dashboard/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);
page('/dashboard/:id/edit', editPage);
page('/my-books', myBooksPage);

updateNav();

page.start();

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const allGuestNavElements = document.querySelectorAll('nav section > div#guest');
    const allUserNavElements = document.querySelectorAll('nav section > div#user');
    if (userData != null) {
        welcomeElement.textContent = `Welcome, ${userData['email']}`;
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = 'none');
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = '');
    } else {
        welcomeElement.textContent = 'Welcome, {email}';
        allUserNavElements.forEach((userNavEl) => userNavEl.style.display = 'none');
        allGuestNavElements.forEach((guestNavEl) => guestNavEl.style.display = '');
    }
}