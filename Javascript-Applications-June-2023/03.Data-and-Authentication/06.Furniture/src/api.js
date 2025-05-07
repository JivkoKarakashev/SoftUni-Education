import { getUserData } from "./getUserData.js";

const baseUrl = 'http://localhost:3030';

async function getFurnitureData() {
    const response = await fetch(`${baseUrl}/data/furniture`);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getOrdersByUserId(userId) {
    const response = await fetch(`${baseUrl}/data/orders/?where=_ownerId%3D%22${userId}%22`);
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
        window.location.href = './index.html';
    }
}

async function createProduct(name, price, factor, img) {
    const { accessToken } = getUserData();
    // console.log(name, price, factor, img);

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, factor, img }),
    }

    const response = await fetch(`${baseUrl}/data/furniture`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function placeOrder(furnitureData) {
    const { accessToken } = getUserData();

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(furnitureData),
    }

    const response = await fetch(`${baseUrl}/data/orders`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

export {
    getFurnitureData,
    getOrdersByUserId,
    login,
    register,
    createProduct,
    placeOrder,
    logout
}