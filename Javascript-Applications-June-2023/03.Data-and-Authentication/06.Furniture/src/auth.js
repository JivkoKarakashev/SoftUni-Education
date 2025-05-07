// import { updateNav } from "./updateNav.js";

import { login, register } from "./api.js";

const baseUrl = 'http://localhost:3030/users';

// window.addEventListener('load', authenticate);
const loginForm = document.querySelector('form:last-of-type');
// console.log(loginForm);
const registerForm = document.querySelector('form:first-of-type');
// console.log(registerForm);
loginForm.addEventListener('submit', onLogin);
registerForm.addEventListener('submit', onRegister);

// function authenticate() {
//     updateNav();
// }

function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(formData);
    const { email, password } = Object.fromEntries(formData.entries());

    if (!email || !password) {
        const error = new Error('Email and Password are required!');
        throw error;
    }
    login(email, password)
        .then(userData => {
            // console.log(userData);
            const serializedUserData = JSON.stringify(userData);
            localStorage.setItem('userData', serializedUserData);
            // updateNav();
            window.location.href = './index.html';
        })
        .catch(err => alert(err.message));
}

// async function login(e) {
//     const formData = new FormData(e.target);
//     // console.log(formData);
//     const { email, password } = Object.fromEntries(formData.entries());

//     if (!email || !password) {
//         const error = new Error('Email and Password are required!');
//         throw error;
//     }

//     const options = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//     }

//     const response = await fetch(`${baseUrl}/login`, options);

//     if (response.ok === false) {
//         const error = await response.json();
//         throw error;
//     }

//     return await response.json();
// }

function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(formData);
    const { email, password, rePass } = Object.fromEntries(formData.entries());

    if (!email || !password) {
        const error = new Error('Email, Password and Repeat Password are required!');
        throw error;
    }

    if (password !== rePass) {
        const error = new Error('Зassword and Re-password must be the same!');
        throw error;
    }
    register(email, password, rePass)
        .then(userData => {
            // console.log(userData);
            const serializedUserData = JSON.stringify(userData);
            localStorage.setItem('userData', serializedUserData);
            // updateNav();
            window.location.href = './index.html';
        })
        .catch(err => alert(err.message));
}

// async function register(e) {
//     const formData = new FormData(e.target);
//     // console.log(formData);
//     const { email, password, rePass } = Object.fromEntries(formData.entries());

//     if (!email || !password) {
//         const error = new Error('Email, Password and Repeat Password are required!');
//         throw error;
//     }

//     if (password !== rePass) {
//         const error = new Error('Зassword and Re-password must be the same!');
//         throw error;
//     }

//     const options = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password, rePass }),
//     }

//     const response = await fetch(`${baseUrl}/register`, options);

//     if (response.ok === false) {
//         const error = await response.json();
//         throw error;
//     }

//     return await response.json();
// }

// function onLogout(event) {
//     logout(event)
//         .then((res) => {
//             console.log(res);
//         })
//         .catch(err => {
//             err => alert(err.message);
//         });
// }

// async function logout(e) {
//     e.preventDefault();
//     const { accessToken } = getUserData();
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-Authorization': accessToken,
//             'Content-Type': 'application/json',
//         },
//     };
//     const response = await fetch(`${baseUrl}/logout`, options);
//     console.log(response);
// }