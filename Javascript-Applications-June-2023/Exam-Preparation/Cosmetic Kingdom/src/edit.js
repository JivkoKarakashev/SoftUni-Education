import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (productObj, onSubmit) => html`
        <section id="edit">
            <div class="form">
                <h2>Edit Product</h2>
                <form class="edit-form" @submit=${onSubmit}>
                    <input type="text" name="name" id="name" placeholder="Product Name" .value="${productObj['name']}" />
                    <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" .value="${productObj['imageUrl']}" />
                    <input type="text" name="category" id="product-category" placeholder="Category" .value="${productObj['category']}" />
                    <textarea id="product-description" name="description" placeholder="Description" rows="5"
                        cols="50" .value="${productObj['description']}"></textarea>
        
                    <input type="text" name="price" id="product-price" placeholder="Price" .value="${productObj['price']}" />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export async function editPage(ctx, next) {
    const productId = ctx.params.id
    // console.log(productId);
    const productObj = await get(`/data/products/${productId}`)
    ctx.render(editTemplate(productObj, onSubmit));
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        // let isValid = true;
        const userData = JSON.parse(localStorage.getItem('userData'));
        // const token = userData.accessToken;
        if (userData == null) {
            return
        }
        // const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
        // allInputElementsArr.pop();
        const { name, imageUrl, category, description, price } = Object.fromEntries(new FormData(e.target).entries());

        if (name == '' || imageUrl == '' || category == '' || description == '' || price == '') {
            return alert('All fields are required!')
        }

        const productData = await put(`/data/products/${productId}`, { name, imageUrl, category, description, price });
        // console.log(productData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${productId}`);
    }
}