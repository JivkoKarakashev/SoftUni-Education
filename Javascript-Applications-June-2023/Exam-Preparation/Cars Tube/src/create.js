import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create-listing">
            <div class="container">
                <form id="create-form" @submit=${onSubmit}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>
        
                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">
        
                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">
        
                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">
        
                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">
        
                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">
        
                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">
        
                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`;

export function createPage(ctx, next) {
    // console.log(ctx);
    ctx.render(createTemplate(onSubmit));
    // const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
    // allInputElementsArr.pop();
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData == null) {
            return
        }
        // const token = userData.accessToken;
        let { brand, model, description, year, imageUrl, price } = Object.fromEntries(new FormData(e.currentTarget).entries());
        year = Number(year);
        price = Number(price);
        // for (const inputEl of allInputElementsArr) {
        //     if (inputEl.name == 'make') {
        //         (make.length > 3) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
        //     } else if (inputEl.name == 'model') {
        //         (model.length > 3) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
        //     } else if (inputEl.name == 'year') {
        //         (year >= 1950 && year <= 2050) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
        //     } else if (inputEl.name == 'description') {
        //         (description.length > 10) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
        //     } else if (inputEl.name == 'price') {
        //         (price > 0) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
        //     } else if (inputEl.name == 'img') {
        //         (img != '') ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
        //     }
        // }
        // const invalidInputElementsArr = allInputElementsArr.filter((inputEl) => inputEl.classList.contains('is-invalid'));
        // if (invalidInputElementsArr.length != 0) {
        //     return;
        // }
        if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') {
            return alert('All fields are required!')
        }
        if (year <= 0 || price <= 0) {
            return alert('Year and Price must be positive numbers!')
        }

        const carsData = await post('/data/cars', { brand, model, description, year, imageUrl, price });
        // console.log(carsData);
        ctx.page.redirect('/catalog');
    }
}