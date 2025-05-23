import { html, render } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const searchTemplate = (onClick) => html`
        <section id="search-cars">
            <h1>Filter by year</h1>
        
            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${onClick}>Search</button>
            </div>
        
            <h2>Results:</h2>
            <div class="listings">
        
                <!-- Display all records -->
                
        
                <!-- Display if there are no matches -->
                
            </div>
        </section>
`;

const addSearchedListTemplate = (carsArr, userData) => html`
        <ul class="card-wrapper">
            ${carsArr.map((car) => html`
            <!-- Display all divs with information about every car (if any)-->
            <div class="listing">
                    <div class="preview">
                        <img src="${car['imageUrl']}">
                    </div>
                    <h2>${car['brand']} ${car['model']}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car['year']}</h3>
                            <h3>Price: ${car['price']} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="catalog/${car['_id']}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
            `)}
        </ul>
`;
const addNoResultTemplate = () => html`
    <!-- Display an h2 if there are no posts -->
    <p class="no-cars"> No results.</p>
`;

export function searchPage(ctx, next) {
    // console.log(ctx);
    ctx.render(searchTemplate(onClick));
    async function onClick(e) {
        e.preventDefault();
        // console.log(e.currentTarget);
        const divSearchContainerElement = document.querySelector('div.listings');
        const search = document.querySelector('input#search-input').value;
        // console.log(search);
        const userData = JSON.parse(localStorage.getItem('userData'));


        if (search == '') {
            return alert('Car production year is required!')
        }
        const carsDataArr = await get(`/data/cars?where=year%3D${search}`);
        // console.log(carsDataArr);
        if (carsDataArr.length != 0) {
            render(addSearchedListTemplate(carsDataArr, userData), divSearchContainerElement);
        } else {
            render(addNoResultTemplate(), divSearchContainerElement);
        }
        // console.log(carsData);
    }
}
