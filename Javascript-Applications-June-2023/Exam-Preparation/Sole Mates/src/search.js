import { html, render } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const searchTemplate = (onSubmit) => html`
        <!-- Search Page (Only for logged-in users) -->
        <section id="search">
            <h2>Search by Brand</h2>
        
            <form class="search-wrapper cf" @submit=${onSubmit}>
                <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
                <button type="submit">Search</button>
            </form>
        
            <h3>Results:</h3>
        
            <div id="search-container">
                <!-- Display a li with information about every post (if any)-->

                <!-- Display an h2 if there are no posts -->
                <!-- <h2>There are no results found.</h2> -->
            </div>
        </section>
`;

function addButton(shoesId) {
    return html`   
        <!--Details is only for logged-in users-->
        <a class="details-btn" href="/dashboard/${shoesId}">Details</a>
    `
}

const addSearchedListTemplate = (shoesArr, userData) => html`
        <ul class="card-wrapper">
            ${shoesArr.map((shoes) => html`
            <!-- Display a li with information about every post (if any)-->
            <li class="card">
                <img src="${shoes['imageUrl']}" alt="imgUrl" />
                <p>
                    <strong>Brand: </strong><span class="brand">${shoes['brand']}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${shoes['model']}</span>
                </p>
                <p>
                    <strong>Value:</strong><span class="value">${shoes['value']}</span>$
                </p>
                ${userData ? addButton(shoes['_id']) : null}
            </li>
            `)}
        </ul>
`;
const addNoResultTemplate = () => html`
    <!-- Display an h2 if there are no posts -->
    <h2>There are no results found.</h2>
`;

export function searchPage(ctx, next) {
    // console.log(ctx);
    ctx.render(searchTemplate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();
        const divSearchContainerElement = document.querySelector('div#search-container');
        const userData = JSON.parse(localStorage.getItem('userData'));

        let { search } = Object.fromEntries(new FormData(e.currentTarget).entries());

        if (search == '') {
            return alert('Brand name is required!')
        }
        const shoesDataArr = await get(`/data/shoes?where=brand%20LIKE%20%22${search}%22`);
        if (shoesDataArr.length != 0) {
            render(addSearchedListTemplate(shoesDataArr, userData), divSearchContainerElement);
        } else {
            render(addNoResultTemplate(), divSearchContainerElement);
        }
        // console.log(shoesData);
    }
}
