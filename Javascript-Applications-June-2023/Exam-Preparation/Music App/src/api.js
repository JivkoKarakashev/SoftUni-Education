import { getUserData } from "./getUserData.js";

const baseUrl = 'http://localhost:3030/data';

async function getCatalogData() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/albums?sortBy=_createdOn%20desc&distinct=name`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
    // return [];
}

async function getAlbumById(id) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/albums/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function searchAlbumByName(albumName) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/albums?where=name%20LIKE%20%22${albumName}%22`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function createAlbum(name, imgUrl, price, releaseDate, artist, genre, description) {
    const { accessToken } = getUserData();
    // console.log(name, imgUrl, price, releaseDate, artist, genre, description);

    if (!name || !imgUrl || !price || !releaseDate || !artist || !genre || !description) {
        throw new Error('All fields are required!');
    }

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, imgUrl, price, releaseDate, artist, genre, description })
    }

    const response = await fetch(`${baseUrl}/albums`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function editAlbumById(id, name, imgUrl, price, releaseDate, artist, genre, description) {
    const { accessToken } = getUserData();
    // console.log(name, imgUrl, price, releaseDate, artist, genre, description);

    if (!name || !imgUrl || !price || !releaseDate || !artist || !genre || !description) {
        throw new Error('All fields are required!');
    }

    const options = {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, imgUrl, price, releaseDate, artist, genre, description })
    }

    const response = await fetch(`${baseUrl}/albums/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function deleteAlbumById(id) {
    const { accessToken } = getUserData();
    // console.log(id);

    const options = {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/albums/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

export {
    getCatalogData,
    getAlbumById,
    searchAlbumByName,
    createAlbum,
    editAlbumById,
    deleteAlbumById
}