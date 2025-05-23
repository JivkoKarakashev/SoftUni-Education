import { getUserData } from "./getUserData.js";

const baseUrl = 'http://localhost:3030/users';

async function register(email, username, password, rePass) {
    // console.log(email, username, password, rePass);
    const regExp = new RegExp('^[a-z0-9]+([._-]?[a-z0-9]+)+@[a-z0-9]+([._-]?[a-z0-9]+)+\\.[a-z]{2,3}$');
    const validEmail = regExp.test(email);

    if (!email || !username || !password || !rePass) {
        throw new Error('E-mail, Username, Password and Repeat Password are required!');
    } else if (validEmail === false) {
        throw new Error('Valid E-mail is required!');
    } else if (username.length < 3 || password.length < 3) {
        throw new Error('Username and Password should be at least 3 characters long!');
    } else if (password !== rePass) {
        throw new Error('Repeat Password should be equal to the Password!');
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
    }

    const response = await fetch(`${baseUrl}/register`, options);

    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }

    return await response.json();
}

async function login(email, password) {
    // console.log(email, password);

    if (!email || !password) {
        throw new Error('Email and Passwors are required!');
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }

    const response = await fetch(`${baseUrl}/login`, options);

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
    const response = await fetch(`${baseUrl}/logout`, options);
    // console.log(response);
    if (response.status === 204 || response.status === 403) {
        localStorage.removeItem('userData');
        return 'redirect';
    }
}

export {
    register,
    login,
    logout
}