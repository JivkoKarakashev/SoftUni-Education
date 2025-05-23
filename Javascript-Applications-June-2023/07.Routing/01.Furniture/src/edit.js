import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (furnObj, onSubmit) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${furnObj['make']}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" value="${furnObj['model']}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" value="${furnObj['year']}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${furnObj['description']}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${furnObj['price']}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${furnObj['img']}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${furnObj['material']}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
`;

export async function editPage(ctx) {
    const furnId = ctx.params.id
    // console.log(furnId);
    const furnObj = await get(`/data/catalog/${furnId}`)
    ctx.render(editTemplate(furnObj, onSubmit));
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        // let isValid = true;
        const userData = JSON.parse(localStorage.getItem('userData'));
        // const token = userData.accessToken;
        if (userData == null) {
            return
        }
        const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
        allInputElementsArr.pop();
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

        const furnitureData = await put(`/data/catalog/${furnId}`, { make, model, year, description, price, img, material });
        // console.log(furnitureData);
        // e.target.reset();
        // ctx.page.redirect('/');
    }
}