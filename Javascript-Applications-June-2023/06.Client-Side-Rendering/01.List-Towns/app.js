import { html, render } from '../node_modules/lit-html/lit-html.js';

const divRootEl = document.querySelector('#root');
const inputEl = document.querySelector('#towns');
const loadButton = document.querySelector('#btnLoadTowns');

loadButton.onclick = (e) => {
    e.preventDefault();
    const inputArr = inputEl.value.split(', ');
    const template = (arr) => html`
            <ul>
                ${arr.map((town) => html`<li>${town}</li>`)}
            </ul>
        `;
    render(template(inputArr), divRootEl);
};
