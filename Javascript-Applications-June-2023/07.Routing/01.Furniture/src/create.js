import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`;

export function createPage(ctx) {
    // console.log(ctx);
    ctx.render(createTemplate(onSubmit));
    const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
    allInputElementsArr.pop();
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        // let isValid = true;
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData == null) {
            return
        }
        // const token = userData.accessToken;
        let { make, model, year, description, price, img, material } = Object.fromEntries(new FormData(e.currentTarget).entries());
        year = Number(year);
        price = Number(price);
        for (const inputEl of allInputElementsArr) {
            if (inputEl.name == 'make') {
                (make.length > 3) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
            } else if (inputEl.name == 'model') {
                (model.length > 3) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
            } else if (inputEl.name == 'year') {
                (year >= 1950 && year <= 2050) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
            } else if (inputEl.name == 'description') {
                (description.length > 10) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
            } else if (inputEl.name == 'price') {
                (price > 0) ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
            } else if (inputEl.name == 'img') {
                (img != '') ? inputEl.classList.add('is-valid') : inputEl.classList.add('is-invalid');
            }
        }
        const invalidInputElementsArr = allInputElementsArr.filter((inputEl) => inputEl.classList.contains('is-invalid'));
        if (invalidInputElementsArr.length != 0) {
            // isValid = false;
            return;
        }

        const furnitureData = await post('/data/catalog', { make, model, year, description, price, img, material });
        // console.log(furnitureData);
        ctx.page.redirect('/');
    }
}