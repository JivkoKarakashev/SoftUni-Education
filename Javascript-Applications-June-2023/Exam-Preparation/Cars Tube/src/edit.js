import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (carObj, onSubmit) => html`
        <section id="edit-listing">
            <div class="container">
        
                <form id="edit-form" @submit=${onSubmit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>
        
                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value="${carObj['brand']}">
        
                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value="${carObj['model']}">
        
                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value="${carObj['description']}">
        
                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value="${carObj['year']}">
        
                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" .value="${carObj['imageUrl']}">
        
                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value="${carObj['price']}">
        
                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`;

export async function editPage(ctx, next) {
    const carId = ctx.params.id
    // console.log(carId);
    const carObj = await get(`/data/cars/${carId}`)
    // const carObj = [];
    // console.log(carObj);
    ctx.render(editTemplate(carObj, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData == null) {
            return
        }

        let { brand, model, description, year, imageUrl, price } = Object.fromEntries(new FormData(e.currentTarget).entries());
        year = Number(year);
        price = Number(price);

        if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') {
            return alert('All fields are required!')
        }
        if (year <= 0 || price <= 0) {
            return alert('Year and Price must be positive numbers!')
        }

        const carData = await put(`/data/cars/${carId}`, { brand, model, description, year, imageUrl, price });
        // console.log(carData);
        // e.target.reset();
        ctx.page.redirect(`/catalog/${carId}`);
    }
}