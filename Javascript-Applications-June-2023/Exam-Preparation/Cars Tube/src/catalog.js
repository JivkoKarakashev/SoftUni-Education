import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const catalogTemplate = (carsArr) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
    
            <!-- Display all records -->
            ${carsArr.length != 0 ? carsArr.map((car) => html`
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
            `) : null}
            <!-- Display if there are no records -->
            ${carsArr.length == 0 ? html`<p class="no-cars">No cars in database.</p>` : null}
        </div>
    </section>
`;

export async function catalogPage(ctx, next) {
    // console.log(ctx);
    const carsArr = await get('/data/cars?sortBy=_createdOn%20desc');
    // const carsArr = [];
    // console.log(carsArr);
    ctx.render(catalogTemplate(carsArr));
}