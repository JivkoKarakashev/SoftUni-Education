import { getUserData } from "./getUserData.js";

const baseUrl = 'http://localhost:3030/data';

async function getAllMovies() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/movies`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getMovieById(id) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/movies/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}


async function createMovie(title, description, img) {
    const { accessToken } = getUserData();
    // console.log(title, description, img);

    if (!title || !description || !img) {
        throw new Error('All fields are required!');
    }

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, img }),
    }

    const response = await fetch(`${baseUrl}/movies`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function deleteMovieById(id) {
    const { accessToken } = getUserData();

    const options = {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/movies/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function editMovieById(id, title, description, img) {
    const { accessToken } = getUserData();
    // console.log(title, description, img);

    if (!title || !description || !img) {
        throw new Error('All fields are required!');
    }

    const options = {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, img }),
    }

    const response = await fetch(`${baseUrl}/movies/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}


async function getLikesByMovieId(movieId) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}
async function getLikeByUserIdPerMovieId(movieId, userId) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    const userLikesArr = await response.json();
    return userLikesArr.length !== 0;
}
async function addLike(movieId) {
    const { accessToken } = getUserData();

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId })
    }

    const response = await fetch(`${baseUrl}/likes`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

export {
    getAllMovies,
    getMovieById,
    createMovie,
    deleteMovieById,
    editMovieById,
    ///////////////
    getLikesByMovieId,
    getLikeByUserIdPerMovieId,
    addLike
}