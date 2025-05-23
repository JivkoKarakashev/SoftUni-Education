import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { addBuy, getBuys, getUserBuy } from './buy.js';

const detailsTemplate = (product, onDelete, onBuy) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${product['imageUrl']}" alt="example1" />
            <p id="details-title">${product['name']}</p>
            <p id="details-category">Category: <span id="categories">${product['category']}</span></p>
            <p id="details-price">Price: <span id="price-number">${product['price']}</span>$</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <h4>Bought: <span id="buys">${product['buys']}</span> times.</h4>
                    <span>${product['description']}</span>
                </div>
            </div>
    
            <!--Edit and Delete are only for creator-->
            ${addButtons(product, onDelete, onBuy)}
            <!-- <div id="action-buttons">
                <a href="" id="edit-btn">Edit</a>
                <a href="" id="delete-btn">Delete</a> -->
    
                <!--Bonus - Only for logged-in users ( not authors )-->
                <!-- <a href="" id="buy-btn">Buy</a>
            </div> -->
        </div>
    </section>
    `;

function addButtons(product, onDelete, onBuy) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${product.isOwner ? html`<a href="${product['_id']}/edit" id="edit-btn">Edit</a>`: null}
        ${product.isOwner ? html`<a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`: null}       
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${product.canBuy ? html`<a href="javascript:void(0)" id="buy-btn" @click=${onBuy}>Buy</a>`: null}
        </div>
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const productId = ctx.params.id;

    const requests = [
        get(`/data/products/${productId}`),
        getBuys(productId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserBuy(productId, userData['_id']));
    }

    const [productDetails, buys, wasBought] = await Promise.all(requests);
    // console.log(productDetails, buys, wasBought);

    productDetails.buys = buys;
    // const productDetails = await get(`/data/products/${productId}`);
    // console.log(productDetails);
    if (userData != null) {
        const productOwnerId = productDetails['_ownerId'];
        productDetails.isOwner = userData['_id'] == productOwnerId;
        productDetails.canBuy = productDetails.isOwner == false && wasBought == 0;
    }

    // console.log(productDetails);
    ctx.render(detailsTemplate(productDetails, onDelete, onBuy));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete product ${productDetails['name']}`);
        if (choice) {
            await del(`/data/products/${productId}`);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onBuy() {
        await addBuy(productId);
        ctx.page.redirect(`/dashboard/${productId}`);
    }
}