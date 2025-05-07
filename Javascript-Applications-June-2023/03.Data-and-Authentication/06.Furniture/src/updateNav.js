import { getUserData } from "./getUserData.js";

const navEL = document.querySelector('header > nav');

function updateNav(hasUser) {
    // console.log(navEL);
    // console.log(hasUser);
    const navElements = createNavElements(hasUser);
    // console.log(navElements);
    navEL.replaceChildren(...navElements);
}

function createNavElements(hasUser) {
    const navElements = [];
    const anchorCatalogEl = document.createElement('a');
    anchorCatalogEl.classList.add('active');
    anchorCatalogEl.setAttribute('href', './index.html');
    anchorCatalogEl.text = 'Catalog';
    navElements.push(anchorCatalogEl);
    const divEl = hasUser
        ? createUserDivElement()
        : createGuestDivElement();

    navElements.push(divEl);

    return navElements;
}

function createUserDivElement() {
    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'user');
    const anchorLogoutEl = document.createElement('a');
    anchorLogoutEl.setAttribute('id', 'logoutBtn');
    anchorLogoutEl.setAttribute('href', 'javascript:void(0)');
    anchorLogoutEl.text = 'Logout';
    anchorLogoutEl.addEventListener('click', onLogout);
    divEl.appendChild(anchorLogoutEl);
    // divEl.addEventListener('click', onLogout);
    return divEl;
}

function createGuestDivElement() {
    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'guest');
    const anchorLogoutEl = document.createElement('a');
    anchorLogoutEl.setAttribute('href', './login.html');
    anchorLogoutEl.text = 'Login';
    divEl.appendChild(anchorLogoutEl);
    return divEl;
}

function onLogout(event) {
    event.preventDefault();
    console.log('clicked');
    logout(event)
        .then((res) => {
            console.log(res);
        })
        .catch(err => {
            alert(err.message);
        });
}

async function logout() {
    const { accessToken } = getUserData();
    const options = {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch('http://localhost:3030/users/logout', options);
    console.log(response);
    if (response.status === 204 || response.status === 403) {
        localStorage.removeItem('userData');
        // updateNav(false);
        window.location.href = './index.html';
    }
}

export {
    updateNav
}