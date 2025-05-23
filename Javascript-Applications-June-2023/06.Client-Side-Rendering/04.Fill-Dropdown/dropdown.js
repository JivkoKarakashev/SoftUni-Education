import { html, render } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { get, post, put, del } from './src/api.js';

const dropDownEl = document.querySelector('#menu');
const inputFieldEl = document.querySelector('#itemText');
const addButton = document.querySelector('input[value="Add"]');
addButton.onclick = onAdd;
// console.log(dropDownEl);

const url = '/jsonstore/advanced/dropdown';

const template = (arr) => html`
    ${arr.map((opt) => html`
    <option value=${opt[1]['_id']}>${opt[1]['text']}</option>
    `)}
`;

async function onAdd(e) {
    e.preventDefault();
    // console.log(e.target);
    await post(url, { text: inputFieldEl.value });
    addItem();
}

async function addItem() {
    const resultArr = Object.entries(await get(url));
    render(template(resultArr), dropDownEl);
    // console.log(resultArr);
}

addItem()