import { onLogout } from "./auth.js";
import { navEL } from "./constants.js";
import { hasUser } from "./getUserData.js";
import { renderHomePage } from "./renderHomePage.js";
import { renderLoginPage } from "./renderLoginPage.js";

function switchActiveButtons(activatedBtn) {
    const catalogPageBtn = navEL.querySelector('a:first-of-type');
    const loginPageBtn = navEL.querySelector('div > a');

    switch (activatedBtn) {
        case 'catalog': {
            catalogPageBtn.classList.add('active');
            loginPageBtn.classList.remove('active');
            break;
        };
        case 'login': {
            catalogPageBtn.classList.remove('active');
            loginPageBtn.classList.add('active');
            break;
        }
    }
}

function updateNav() {
    const navElements = createNavElements();
    navEL.replaceChildren(...navElements);
}

const createNavElements = () => {
    const navElements = [];
    const anchorCatalogEl = document.createElement('a');
    anchorCatalogEl.classList.add('active');
    anchorCatalogEl.setAttribute('href', './index.html');
    anchorCatalogEl.text = 'Catalog';
    anchorCatalogEl.addEventListener('click', renderHomePage);
    navElements.push(anchorCatalogEl);
    const divEl = hasUser()
        ? createUserDivElement()
        : createGuestDivElement();

    navElements.push(divEl);

    return navElements;
}

const createUserDivElement = () => {
    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'user');
    const anchorLogoutEl = document.createElement('a');
    anchorLogoutEl.setAttribute('id', 'logoutBtn');
    anchorLogoutEl.setAttribute('href', 'javascript:void(0)');
    anchorLogoutEl.text = 'Logout';
    anchorLogoutEl.addEventListener('click', onLogout);
    divEl.appendChild(anchorLogoutEl);
    return divEl;
}

const createGuestDivElement = () => {
    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'guest');
    const anchorLoginEl = document.createElement('a');
    anchorLoginEl.setAttribute('href', './login.html');
    anchorLoginEl.text = 'Login';
    anchorLoginEl.addEventListener('click', renderLoginPage);
    divEl.appendChild(anchorLoginEl);

    return divEl;
}

export {
    switchActiveButtons,
    updateNav
}