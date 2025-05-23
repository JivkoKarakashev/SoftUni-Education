import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';

const detailsTemplate = (fruit, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${fruit['imageUrl']}" alt="example1" />
            <p id="details-title">${fruit['name']}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p>${fruit['description']}</p>
                    <p id="nutrition">Nutrition</p>
                    <p id="details-nutrition">${fruit['nutrition']}</p>
                </div>
                <!--Edit and Delete are only for creator-->
                ${addButtons(fruit, onDelete)}
            </div>
        </div>
    </section>
    `;

function addButtons(fruit, onDelete) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${fruit.isOwner ? html`<a href="${fruit['_id']}/edit" id="edit-btn">Edit</a>` : null}
            ${fruit.isOwner ? html`<a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const fruitId = ctx.params.id;
    const fruitDetails = await get(`/data/fruits/${fruitId}`);
    // console.log(fruitDetails);
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData != null) {
        const fruitOwnerId = fruitDetails['_ownerId'];
        fruitDetails.isOwner = userData['_id'] == fruitOwnerId;
    }
    ctx.render(detailsTemplate(fruitDetails, onDelete));
    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete fruit ${fruitDetails['name']}`);
        if (choice) {
            await del(`/data/fruits/${fruitId}`);
            ctx.page.redirect('/catalog');
        }
    }
}