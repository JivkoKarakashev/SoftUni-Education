import { getUserData } from "./getUserData.js";

const baseUrl = 'http://localhost:3030/users';

async function register(email, password, rePass) {
    // console.log(email, password, rePass);

    if (!email || !password || !rePass) {
        throw new Error('Email, Password and Repeat Password are required!');
    } else if (email.length < 6 || password.length < 6) {
        throw new Error('Password and Repeat Password should be at least 6 characters long!');
    } else if (password !== rePass) {
        throw new Error('Repeat Password should be equal to the Password!');
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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