import { get, post } from './api.js';

export async function addBuy(productId) {
    return post('/data/bought', { productId })
}

export async function getBuys(productId) {
    return get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`);
}

export async function getUserBuy(productId, userId) {
    return get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}