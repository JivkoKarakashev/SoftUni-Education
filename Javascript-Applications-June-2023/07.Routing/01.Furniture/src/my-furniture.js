import { html } from '../node_modules/lit-html/lit-html.js';
import { get } from './api.js';

const myFurnitureTemplate = (furnsArr) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${furnsArr.map((furn) => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${['img']}" />
                    <p>${furn['description']}</p>
                    <footer>
                        <p>Price: <span>${furn['price']} $</span></p>
                    </footer>
                    <div>
                        <a href="furniture/${furn['_id']}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
        `)}
    </div>
    `;

export async function myFurniturePage(ctx) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        return;
    }
    const userId = userData['_id'];
    const furnsArr = await get(`/data/catalog?where=_ownerId%3D%22${userId}%22`);
    // console.log(furnsArr);
    // console.log(userData);
    ctx.render(myFurnitureTemplate(furnsArr));
    // console.log(ctx);
}