import { get, post } from './api.js';

export async function addComment(gameId, comment) {
    return post('/data/comments', { gameId, comment })
}

export async function getComments(gameId) {
    return get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}
