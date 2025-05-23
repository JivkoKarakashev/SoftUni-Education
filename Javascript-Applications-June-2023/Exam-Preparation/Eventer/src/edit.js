import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (eventObj, onSubmit) => html`
        <section id="edit">
            <div class="form">
                <h2>Edit Event</h2>
                <form class="edit-form" @submit=${onSubmit}>
                    <input type="text" name="name" id="name" placeholder="Event" .value="${eventObj['name']}" />
                    <input type="text" name="imageUrl" id="event-image" placeholder="Event Image"
                        .value="${eventObj['imageUrl']}" />
                    <input type="text" name="category" id="event-category" placeholder="Category"
                        .value="${eventObj['category']}" />
        
        
                    <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"
                        .value="${eventObj['description']}"></textarea>
        
                    <label for="date-and-time">Event Time:</label>
                    <input type="text" name="date" id="date" placeholder="When?" .value="${eventObj['date']}" />
        
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
`;

export async function editPage(ctx, next) {
    const eventId = ctx.params.id
    // console.log(eventId);
    const eventObj = await get(`/data/events/${eventId}`)
    ctx.render(editTemplate(eventObj, onSubmit));
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        // let isValid = true;
        const userData = JSON.parse(localStorage.getItem('userData'));
        // const token = userData.accessToken;
        if (userData == null) {
            return;
        }
        // const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
        // allInputElementsArr.pop();
        let { name, imageUrl, category, description, date } = Object.fromEntries(new FormData(e.target).entries());

        if (name == '' || imageUrl == '' || category == '' || description == '' || date == '') {
            return alert('All fields are required!');
        }

        const eventData = await put(`/data/events/${eventId}`, { name, imageUrl, category, description, date });
        // console.log(eventData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${eventId}`);
    }
}