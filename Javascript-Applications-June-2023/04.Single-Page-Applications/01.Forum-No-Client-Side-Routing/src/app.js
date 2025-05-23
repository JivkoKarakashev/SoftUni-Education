import { renderHomePage } from './renderHomePage.js';

const rootElRef = document.querySelector('body');

window.addEventListener('load', solve)

function solve() {
    renderHomePage();
}

export {
    rootElRef
}