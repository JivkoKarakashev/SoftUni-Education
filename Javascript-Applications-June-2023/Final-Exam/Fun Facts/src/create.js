import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
<section id="create">
  <div class="form" @submit=${onSubmit}>
    <h2>Add Fact</h2>
    <form class="create-form">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
      <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
      <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
        cols="50"></textarea>
      <button type="submit">Add Fact</button>
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
    const factData = Object.fromEntries(new FormData(e.target).entries());
    const { category, description } = factData;
    const imageUrl = factData['image-url'];
    const moreInfo = factData['additional-info'];

    // console.log(category);
    // console.log(imageUrl);
    // console.log(description);
    // console.log(moreInfo);
    if (category == '' || description == '' || imageUrl == '' || moreInfo == '') {
      return alert('All fields are required!')
    }

    const factDataReq = await post('/data/facts', { category, imageUrl, description, moreInfo });
    // console.log(factDataReq);
    ctx.page.redirect('/dashboard');
  }
}