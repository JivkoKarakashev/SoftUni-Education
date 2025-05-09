import { login, logout, register } from "./api.js";
import { renderHomePage } from "./renderHomePage.js";
import { updateNav } from "./updateNav.js";

async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(formData);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
        if (!email || !password) {
            const error = new Error('Email and Password are required!');
            throw error;
        }
    } catch (err) {
        return alert(err.message);
    }

    login(email, password)
        .then(userData => {
            // console.log(userData);
            const serializedUserData = JSON.stringify(userData);
            localStorage.setItem('userData', serializedUserData);
            updateNav();
            renderHomePage(null);
        })
        .catch(err => alert(err.message));
}

async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(formData);
    const { email, password, rePass } = Object.fromEntries(formData.entries());

    try {
        if (!email || !password) {
            const error = new Error('Email, Password and Repeat Password are required!');
            throw error;
        }

        if (password !== rePass) {
            const error = new Error('Зassword and Re-password must be the same!');
            throw error;
        }
    } catch (err) {
        return alert(err.message);
    }

    register(email, password, rePass)
        .then(userData => {
            // console.log(userData);
            const serializedUserData = JSON.stringify(userData);
            localStorage.setItem('userData', serializedUserData);
            updateNav();
            renderHomePage(null);
        })
        .catch(err => alert(err.message));
}

function onLogout(event) {
    event.preventDefault();
    logout()
        .then(() => {
            updateNav();
            renderHomePage(null);
        })
        .catch(err => {
            return alert(err.message);
        });
}

export {
    onRegister,
    onLogin,
    onLogout
}