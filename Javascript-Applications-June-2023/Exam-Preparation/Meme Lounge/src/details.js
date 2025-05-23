import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { updateActive } from './app.js';

const detailsTemplate = (meme, onDelete) => html`
    <section id="meme-details">
        <h1>Meme Title: ${meme['title']}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src="${meme['imageUrl']}">
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${meme['description']}</p>
    
                <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                ${addButtons(meme, onDelete)}
            </div>
        </div>
    </section>
    `;

function addButtons(meme, onDelete) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div class="btns">
            ${meme.isOwner ? html`<a href="${meme['_id']}/edit" class="button warning">Edit</a>` : null}
            ${meme.isOwner ? html`<button href="javascript:void(0)" class="button danger" @click=${onDelete}>Delete</button>` :
            null}
            <!--Bonus - Only for logged-in users ( not authors )-->
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const memeId = ctx.params.id;

    const requests = [
        get(`/data/memes/${memeId}`),
        // getDonations(memeId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    // if (userData) {
    //     requests.push(getUserDonation(memeId, userData['_id']));
    // }

    const [memeDetails/*, donations, wasMadeDonation*/] = await Promise.all(requests);
    // console.log(memeDetails, donations, wasMadeDonation);
    // console.log(memeDetails);

    // memeDetails.donations = donations;
    // const memeDetails = await get(`/data/memes/${memeId}`);
    // console.log(memeDetails);
    if (userData != null) {
        const memeOwnerId = memeDetails['_ownerId'];
        memeDetails.isOwner = userData['_id'] == memeOwnerId;
        // memeDetails.canDonate = memeDetails.isOwner == false && wasMadeDonation == 0;
    }

    // console.log(memeDetails);
    updateActive();
    ctx.render(detailsTemplate(memeDetails, onDelete));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete meme ${memeDetails['title']}`);
        if (choice) {
            await del(`/data/memes/${memeId}`);
            ctx.page.redirect('/dashboard');
        }
    }
}