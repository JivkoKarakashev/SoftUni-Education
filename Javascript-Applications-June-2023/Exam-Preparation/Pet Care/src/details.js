import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { makeDonation, getDonations, getUserDonation } from './donate.js';

const detailsTemplate = (pet, onDelete, onDonate) => html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="${pet['image']}">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet['name']}</h1>
                    <h3>Breed: ${pet['breed']}</h3>
                    <h4>Age: ${pet['age']}</h4>
                    <h4>Weight: ${pet['weight']}</h4>
                    <h4 class="donation">Donation: ${pet['donations']}$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${pet.user ? html`
                <div class="actionBtn">
                    <!-- Only for registered user and creator of the pets-->
                    ${pet.isOwner ? html`<a href="${pet['_id']}/edit" class="edit">Edit</a>` : null}
                    ${pet.isOwner ? html`<a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>` : null}
                    <!--(Bonus Part) Only for no creator and user-->
                    ${pet.canDonate ? html`<a href="javascript:void(0)" class="donate" @click=${onDonate}>Donate</a>` : null}
                </div>` : null}
            </div>
        </div>
    </section>
    `;

export async function detailsPage(ctx) {
    // console.log(ctx);
    const petId = ctx.params.id;

    const requests = [
        get(`/data/pets/${petId}`),
        getDonations(petId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserDonation(petId, userData['_id']));
    }

    const [petDetails, donations, wasMadeDonation] = await Promise.all(requests);
    // console.log(petDetails, donations, wasMadeDonation);

    petDetails.donations = Number(donations) * 100;
    // const petDetails = await get(`/data/pets/${petId}`);
    // console.log(petDetails);
    if (userData != null) {
        petDetails.user = true;
        const petOwnerId = petDetails['_ownerId'];
        petDetails.isOwner = userData['_id'] == petOwnerId;
        petDetails.canDonate = petDetails.isOwner == false && wasMadeDonation == 0;
    }

    // console.log(petDetails);
    ctx.render(detailsTemplate(petDetails, onDelete, onDonate));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete pet ${petDetails['name']}`);
        if (choice) {
            await del(`/data/pets/${petId}`);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        makeDonation(petId);
        ctx.page.redirect(`/dashboard/${petId}`);
    }
}