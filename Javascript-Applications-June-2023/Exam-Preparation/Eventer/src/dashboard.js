import { html } from '../node_modules/lit-html/lit-html.js';
import { get } from './api.js';

const dashboardTemplate = (eventsArr) => html`
    <h2>Current Events</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${eventsArr.length != 0 ? eventsArr.map((event) => html`
        <div class="event">
            <img src="${event['imageUrl']}" alt="example1" />
            <p class="title">${event['name']}</p>
            <p class="date">${event['date']}</p>
            <a class="details-btn" href="/dashboard/${event['_id']}">Details</a>
        </div>
        `) : null}
    </section>
    
    <!-- Display an h4 if there are no posts -->
    ${eventsArr.length == 0 ? html`<h4>No Events yet.</h4>` : null}
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const eventsArr = await get('/data/events?sortBy=_createdOn%20desc');
    // const eventsArr = [];
    // console.log(eventsArr);
    ctx.render(dashboardTemplate(eventsArr));
}