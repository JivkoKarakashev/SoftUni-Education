import { html, render } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { cats } from './catSeeder.js';

const allCatsSectionEl = document.querySelector('#allCats');
// console.log(allCatsSectionEl);

const template = (catsArr) => html`
    <ul>
        ${catsArr.map((catObj) => { 
        const stat = `Status Code: ${catObj.statusCode}`;
        return html`
        <li>
            <img src='./images/${catObj.imageLocation}.jpg' width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${onClick}>Show status code</button>
                <div class="status" style="display: none" id=${catObj.id}>
                    <h4>${stat}</h4>
                    <p>${catObj.statusMessage}</p>
                </div>
            </div>
        </li>
        ` 
        })}
    </ul>
`;
render(template(cats), allCatsSectionEl);

function onClick(e) {
    // console.log(e.currentTarget);
    if (e.currentTarget.textContent == 'Show status code') {
        e.currentTarget.parentElement.querySelector('div.status').style.display = 'block';
        e.currentTarget.textContent = 'Hide status code'
    } else if (e.currentTarget.textContent == 'Hide status code') {
        e.currentTarget.parentElement.querySelector('div.status').style.display = 'none';
        e.currentTarget.textContent = 'Show status code'
    }
}