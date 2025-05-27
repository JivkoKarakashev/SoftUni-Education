import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';

const detailsTemplate = (shoes, isOwner, onDelete) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
                <img src="${shoes['imageUrl']}" alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>Brand: <span id="details-brand">${shoes['brand']}</span></p>
                <p>
                    Model: <span id="details-model">${shoes['model']}</span>
                </p>
                <p>Release date: <span id="details-release">${shoes['release']}</span></p>
                <p>Designer: <span id="details-designer">${shoes['designer']}</span></p>
                <p>Value: <span id="details-value">${shoes['value']}</span></p>
            </div>
            ${isOwner ? addButtons(shoes['_id'], onDelete) : null}
        </div>
    </section>
    `;

function addButtons(shoesId, onDelete) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="${shoesId}/edit" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    let isOwner = false
    const shoesId = ctx.params.id;
    const shoesDetails = await get(`/data/shoes/${shoesId}`);
    // console.log(shoesDetails);
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData != null) {
        const shoesOwnerId = shoesDetails['_ownerId'];
        isOwner = userData['_id'] == shoesOwnerId;
    }
    ctx.render(detailsTemplate(shoesDetails, isOwner, onDelete));
    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete shoes ${shoesDetails['brand']} ${shoesDetails['model']}`);
        if (choice) {
            await del(`/data/shoes/${shoesId}`);
            ctx.page.redirect('/dashboard');
        }
    }
}