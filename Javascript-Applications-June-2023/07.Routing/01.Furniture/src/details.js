import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';

const detailsTemplate = (furn, isOwner, onDelete) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${furn['img']}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furn['make']}</span></p>
            <p>Model: <span>${furn['model']}</span></p>
            <p>Year: <span>${furn['year']}</span></p>
            <p>Description: <span>${furn['description']}</span></p>
            <p>Price: <span>${furn['price']}</span></p>
            <p>Material: <span>${furn['material']}</span></p>
            ${isOwner ? addButtons(furn['_id'], onDelete) : null}
        </div>
    </div>
    `;

function addButtons(furnId, onDelete) {
    return html`   
        <div>
            <a href="${furnId}/edit" class="btn btn-info">Edit</a>
            <a href="javascript:void(0)" class="btn btn-red" @click=${onDelete}>Delete</a>
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    let isOwner = false
    const furnId = ctx.params.id;
    const furnDetails = await get(`/data/catalog/${furnId}`);
    // console.log(furnDetails);
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData != null) {
        const furnOwnerId = furnDetails['_ownerId'];
        isOwner = userData['_id'] == furnOwnerId;
    }
    ctx.render(detailsTemplate(furnDetails, isOwner, onDelete));
    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete furniture with make: ${furnDetails['make']} and model: ${furnDetails['model']}`);
        if (choice) {
            await del(`/data/catalog/${furnId}`);
            ctx.page.redirect('/');
        }
    }
}