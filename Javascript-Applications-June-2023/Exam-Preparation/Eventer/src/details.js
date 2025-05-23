import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { addGoing, getGoings, getUserGoing } from './goings.js';

const detailsTemplate = (event, onDelete, onGoing) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${event['imageUrl']}" alt="example1" />
            <p id="details-title">${event['name']}</p>
            <p id="details-category">Category: <span id="categories">${event['category']}</span></p>
            <p id="details-date">Date:<span id="date">${event['date']}</span></p>
            <div id="info-wrapper">
                <div id="details-description">
                    <span>${event['description']}</span>
                </div>
    
            </div>
    
            <h3>Going: <span id="go">${event['goings']}</span> times.</h3>
    
            <!--Edit and Delete are only for creator-->
            ${addButtons(event, onDelete, onGoing)}
            <!-- <div id="action-buttons">
                <a href="" id="edit-btn">Edit</a>
                <a href="" id="delete-btn">Delete</a> -->
    
                <!--Bonus - Only for logged-in users ( not authors )-->
                <!-- <a href="" id="go-btn">Going</a>
            </div> -->
        </div>
    </section>
    `;

function addButtons(event, onDelete, onGoing) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${event.isOwner ? html`<a href="${event['_id']}/edit" id="edit-btn">Edit</a>`: null}
        ${event.isOwner ? html`<a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`: null}
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${event.canGo ? html`<a href="javascript:void(0)" id="go-btn" @click=${onGoing}>Going</a>`: null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const eventId = ctx.params.id;

    const requests = [
        get(`/data/events/${eventId}`),
        getGoings(eventId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserGoing(eventId, userData['_id']));
    }

    const [eventDetails, goings, isGoing] = await Promise.all(requests);
    // console.log(eventDetails, goings, isGoing);

    eventDetails.goings = goings;
    // const eventDetails = await get(`/data/events/${eventId}`);
    // console.log(eventDetails);
    if (userData != null) {
        const eventOwnerId = eventDetails['_ownerId'];
        eventDetails.isOwner = userData['_id'] == eventOwnerId;
        eventDetails.canGo = eventDetails.isOwner == false && isGoing == 0;
    }

    // console.log(eventDetails);
    ctx.render(detailsTemplate(eventDetails, onDelete, onGoing));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete event ${eventDetails['name']}`);
        if (choice) {
            await del(`/data/events/${eventId}`);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onGoing() {
        await addGoing(eventId);
        ctx.page.redirect(`/dashboard/${eventId}`);
    }
}