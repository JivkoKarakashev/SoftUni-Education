import { html } from '../node_modules/lit-html/lit-html.js';
import { get, del } from './api.js';

const detailsTemplate = (car, onDelete) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src="${car['imageUrl']}">
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${car['brand']}</li>
                <li><span>Model:</span>${car['model']}</li>
                <li><span>Year:</span>${car['year']}</li>
                <li><span>Price:</span>${car['price']}$</li>
            </ul>
    
            <p class="description-para">${car['description']}</p>
    
            ${addButtons(car, onDelete)}
        </div>
    </section>
    `;

function addButtons(car, onDelete) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div class="listings-buttons">
        ${car.isOwner ? html`<a href="${car['_id']}/edit" class="button-list">Edit</a>` : null}
        ${car.isOwner ? html`<a href="javascript:void(0)" class="button-list" @click=${onDelete}>Delete</a>` : null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const carId = ctx.params.id;
    const carDetails = await get(`/data/cars/${carId}`);
    // console.log(carDetails);
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData != null) {
        const carOwnerId = carDetails['_ownerId'];
        carDetails.isOwner = userData['_id'] == carOwnerId;
    }
    ctx.render(detailsTemplate(carDetails, onDelete));
    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete car ${carDetails['brand']} ${carDetails['model']}`);
        if (choice) {
            await del(`/data/cars/${carId}`);
            ctx.page.redirect('/catalog');
        }
    }
}