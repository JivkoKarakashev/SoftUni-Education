const url = 'http://localhost:3030/data/furniture';

async function getFurnitureData() {
    const response = await fetch(url);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}