import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="createPage">
          <form class="createForm" @submit=${onSubmit}>
            <img src="/images/cat-create.jpg">
            <div>
              <h2>Create PetPal</h2>
              <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
              </div>
              <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
              </div>
              <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
              </div>
              <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
              </div>
              <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
              </div>
              <button class="btn" type="submit">Create Pet</button>
            </div>
          </form>
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
    const { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.target).entries());

    if (!name || !breed || !age || !weight || !image) {
      return alert('All fields are required!')
    }

    const productData = await post('/data/pets', { name, breed, age, weight, image });
    // console.log(productData);
    ctx.page.redirect('/');
  }
}