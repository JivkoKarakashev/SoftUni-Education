import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const myCatalogTemplate = (carsArr) => html`
    <section id="my-listings">
        <h1>My car listings</h1>
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
            ${carsArr.length == 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` : null}
        </div>
    </section>
    `;

export async function myCatalogPage(ctx) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        return;
    }
    const userId = userData['_id'];
    const carsArr = await get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    // console.log(carsArr);
    // console.log(userData);
    ctx.render(myCatalogTemplate(carsArr));
    // console.log(ctx);
}