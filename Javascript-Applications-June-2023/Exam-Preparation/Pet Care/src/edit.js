import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (petObj, onSubmit) => html`
        <section id="editPage">
            <form class="editForm" @submit=${onSubmit}>
                <img src="/images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value="${petObj['name']}">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value="${petObj['breed']}">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value="${petObj['age']}">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value="${petObj['weight']}">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value="${petObj['image']}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
`;

export async function editPage(ctx, next) {
    const petId = ctx.params.id
    // console.log(petId);
    const petObj = await get(`/data/pets/${petId}`)
    ctx.render(editTemplate(petObj, onSubmit));
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
        const { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.target).entries());

        if (!name || !breed || !age || !weight || !image) {
            return alert('All fields are required!')
        }

        const postData = await put(`/data/pets/${petId}`, { name, breed, age, weight, image });
        // console.log(postData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard`);
    }
}