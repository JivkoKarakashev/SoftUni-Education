import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const myProfileTemplate = (theaterArr, userData) => html`
    <section id="profilePage">
        <div class="userInfo">
            <div class="avatar">
                <img src="/images/profilePic.png">
            </div>
            <h2>${userData['email']}</h2>
        </div>
        <div class="board">
            <!--If there are event-->
            ${theaterArr.length != 0 ? theaterArr.map((theater) => html`
            <div class="eventBoard">
                <div class="event-info">
                    <img src="${theater['imageUrl']}">
                    <h2>${theater['title']}</h2>
                    <h6>${theater['date']}</h6>
                    <a href="dashboard/${theater['_id']}" class="details-button">Details</a>
                </div>
            </div>
            `) : null}
            <!--If there are no event-->
            ${theaterArr.length == 0 ? html`
            <div class="no-events">
                <p>This user has no events yet!</p>
            </div>` : null}
        </div>
    </section>
    `;

export async function myProfilePage(ctx) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        return;
    }
    const userId = userData['_id'];
    const theaterArr = await get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    // console.log(theaterArr);
    // console.log(userData);
    ctx.render(myProfileTemplate(theaterArr, userData));
    // console.log(ctx);
}