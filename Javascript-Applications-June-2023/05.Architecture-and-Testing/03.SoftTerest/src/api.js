import page from '../node_modules/page/page.mjs';

import { getUserData } from './getUserData.js';

const baseUrl = 'http://localhost:3030';

async function register(email, password, rePass) {
    // console.log(email, password, rePass);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, rePass }),
    }

    const response = await fetch(`${baseUrl}/users/register`, options);

    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }

    return await response.json();
}

async function login(email, password) {
    // console.log(email, password);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }

    const response = await fetch(`${baseUrl}/users/login`, options);

    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }

    return await response.json();
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
    const response = await fetch(`${baseUrl}/users/logout`, options);
    // console.log(response);
    if (response.status === 204 || response.status === 403) {
        localStorage.removeItem('userData');
        // updateNav(false);
        page.redirect('/');
    }
}

async function getDashboardData() {
    const response = await fetch(`${baseUrl}/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
    // return [];
}

async function getDetailsData(id) {
    const response = await fetch(`${baseUrl}/data/ideas/${id}`);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function deleteIdea(id) {
    const { accessToken } = getUserData();
    // console.log(name, price, factor, img);

    const options = {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/data/ideas/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function createIdea(title, description, img) {
    const { accessToken } = getUserData();
    // console.log(title, description, img);

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, img }),
    }

    const response = await fetch(`${baseUrl}/data/ideas`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

export {
    register,
    login,
    logout,
    getDashboardData,
    getDetailsData,
    deleteIdea,
    createIdea
}