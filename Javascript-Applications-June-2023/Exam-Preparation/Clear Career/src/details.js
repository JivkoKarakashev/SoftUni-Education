import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { addApplication, getApplications, getUserApplication } from './apply.js';

const detailsTemplate = (offer, onDelete, onApply) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${offer['imageUrl']}" alt="example1" />
            <p id="details-title">${offer['title']}</p>
            <p id="details-category">Category: <span id="categories">${offer['category']}</span></p>
            <p id="details-salary">Salary: <span id="salary-number">${offer['salary']}</span></p>
            <div id="info-wrapper">
                <div id="details-description">
                    <h4>Description</h4>
                    <span>${offer['description']}</span>
                </div>
                <div id="details-requirements">
                    <h4>Requirements</h4>
                    <span>${offer['requirements']}</span>
                </div>
            </div>
            <p>Applications: <strong id="applications">${offer['applications']}</strong></p>
    
            <!--Edit and Delete are only for creator-->
            ${addButtons(offer, onDelete, onApply)}    
                <!--Bonus - Only for logged-in users ( not authors )-->
        </div>
    </section>
    `;

function addButtons(offer, onDelete, onApply) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${offer.isOwner ? html`<a href="${offer['_id']}/edit" id="edit-btn">Edit</a>`: null}
        ${offer.isOwner ? html`<a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`: null}     
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${offer.canApply ? html`<a href="javascript:void(0)" id="apply-btn" @click=${onApply}>Apply</a>`: null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const offerId = ctx.params.id;

    const requests = [
        get(`/data/offers/${offerId}`),
        getApplications(offerId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserApplication(offerId, userData['_id']));
    }

    const [offerDetails, applications, hasApplied] = await Promise.all(requests);
    // console.log(offerDetails, applications, hasApplied);

    offerDetails.applications = applications;
    // const offerDetails = await get(`/data/offers/${offerId}`);
    // console.log(offerDetails);
    if (userData != null) {
        const offerOwnerId = offerDetails['_ownerId'];
        offerDetails.isOwner = userData['_id'] == offerOwnerId;
        offerDetails.canApply = offerDetails.isOwner == false && hasApplied == 0;
    }

    // console.log(offerDetails);
    ctx.render(detailsTemplate(offerDetails, onDelete, onApply));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete offer ${offerDetails['title']}`);
        if (choice) {
            await del(`/data/offers/${offerId}`);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onApply() {
        await addApplication(offerId);
        ctx.page.redirect(`/dashboard/${offerId}`);
    }
}