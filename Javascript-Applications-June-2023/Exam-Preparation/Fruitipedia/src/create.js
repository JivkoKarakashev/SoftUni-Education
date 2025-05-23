import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create">
        <div class="form" @submit=${onSubmit}>
          <h2>Add Fruit</h2>
          <form class="create-form">
            <input type="text" name="name" id="name" placeholder="Fruit Name" />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
              cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
            <button type="submit">Add Fruit</button>
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
    const { name, imageUrl, description, nutrition } = Object.fromEntries(new FormData(e.target).entries());

    if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
      return alert('All fields are required!')
    }

    const fruitData = await post('/data/fruits', { name, imageUrl, description, nutrition });
    // console.log(fruitData);
    ctx.page.redirect('/catalog');
  }
}