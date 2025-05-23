import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { makeDonation, getDonations, getUserDonation } from './donate.js';

const detailsTemplate = (material, onDelete, onDonate) => html`
    <section id="details-page">
        <h1 class="title">Post Details</h1>
    
        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src="${material['imageUrl']}" alt="Material Image" class="post-image">
                </div>
                <div class="info">
                    <h2 class="title post-title">${material['title']}</h2>
                    <p class="post-description">Description: ${material['description']}</p>
                    <p class="post-address">Address: ${material['address']}</p>
                    <p class="post-number">Phone number: ${material['phone']}</p>
                    <p class="donate-Item">Donate Materials: ${material['donations']}</p>
    
                    <!--Edit and Delete are only for creator-->
                    ${addButtons(material, onDelete, onDonate)}
                    <!--Bonus - Only for logged-in users ( not authors )-->
                </div>
            </div>
        </div>
    </section>
    `;

function addButtons(material, onDelete, onDonate) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div class="btns">
            ${material.isOwner ? html`<a href="${material['_id']}/edit" class="edit-btn btn">Edit</a>` : null}
            ${material.isOwner ? html`<a href="javascript:void(0)" class="delete-btn btn" @click=${onDelete}>Delete</a>` : null}
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${material.canDonate ? html`<a href="javascript:void(0)" class="donate-btn btn" @click=${onDonate}>Donate</a>` :
            null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const postId = ctx.params.id;

    const requests = [
        get(`/data/posts/${postId}`),
        getDonations(postId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserDonation(postId, userData['_id']));
    }

    const [materialDetails, donations, wasMadeDonation] = await Promise.all(requests);
    // console.log(materialDetails, donations, wasMadeDonation);

    materialDetails.donations = donations;
    // const materialDetails = await get(`/data/materials/${postId}`);
    // console.log(materialDetails);
    if (userData != null) {
        const materialOwnerId = materialDetails['_ownerId'];
        materialDetails.isOwner = userData['_id'] == materialOwnerId;
        materialDetails.canDonate = materialDetails.isOwner == false && wasMadeDonation == 0;
    }

    // console.log(materialDetails);
    ctx.render(detailsTemplate(materialDetails, onDelete, onDonate));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete material ${materialDetails['title']}`);
        if (choice) {
            await del(`/data/posts/${postId}`);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onDonate() {
        makeDonation(postId);
        ctx.page.redirect(`/dashboard/${postId}`);
    }
}