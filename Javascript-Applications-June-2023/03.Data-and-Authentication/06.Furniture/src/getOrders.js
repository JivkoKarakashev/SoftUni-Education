const baseUrl = 'http://localhost:3030/data/orders';

async function getOrdersByUserId(userId) {    
    const response = await fetch(`${baseUrl}/?where=_ownerId%3D%22${userId}%22`);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}