import { get } from './api.js';
import { updateNav } from './app.js';

export async function onLogout(ctx) {
    // const userData = JSON.parse(localStorage.getItem('userData'));
    // const token = userData.accessToken;
    // console.log(token);
    get('/users/logout');
    localStorage.removeItem('userData');
    updateNav();
    ctx.page.redirect('/');
}