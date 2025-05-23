import { html, render } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const searchTemplate = (onClick) => html`
        <section id="search">
        
            <div class="form">
                <h2>Search</h2>
                <form class="search-form">
                    <input type="text" name="search" id="search-input" />
                    <button class="button-list" @click=${onClick}>Search</button>
                </form>
            </div>
            <h4>Results:</h4>
            <div class="search-result">
                <!-- Display if there are no matches -->
        
                <!--If there are matches display a div with information about every fruit-->
        
            </div>
        </section>
`;

const addSearchedListTemplate = (fruitsArr, userData) => html`
        ${fruitsArr.map((fruit) => html`
        <div class="fruit">
            <img src="${fruit['imageUrl']}" alt="example1" />
            <h3 class="title">${fruit['name']}</h3>
            <p class="description">${fruit['description']}</p>
            <a class="details-btn" href="catalog/${fruit['_id']}">More Info</a>
        </div>
        `)}
`;
const addNoResultTemplate = () => html`
    <!-- Display an h2 if there are no posts -->
    <p class="no-result">No result.</p>
`;

export function searchPage(ctx, next) {
    // console.log(ctx);
    ctx.render(searchTemplate(onClick));
    async function onClick(e) {
        e.preventDefault();
        // console.log(e.currentTarget);
        const divSearchContainerElement = document.querySelector('div.search-result');
        const search = document.querySelector('input#search-input').value;
        // console.log(search);
        const userData = JSON.parse(localStorage.getItem('userData'));


        if (search == '') {
            return alert('Fruit name is required!')
        }
        const fruitsDataArr = await get(`/data/fruits?where=name%20LIKE%20%22${search}%22`);
        // console.log(fruitsDataArr);
        if (fruitsDataArr.length != 0) {
            render(addSearchedListTemplate(fruitsDataArr, userData), divSearchContainerElement);
        } else {
            render(addNoResultTemplate(), divSearchContainerElement);
        }
        // console.log(fruitsData);
    }
}
