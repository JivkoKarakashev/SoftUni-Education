import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create-page" class="auth">
          <form id="create" @submit=${onSubmit}>
            <h1 class="title">Create Post</h1>
        
            <article class="input-group">
              <label for="title">Post Title</label>
              <input type="title" name="title" id="title">
            </article>
        
            <article class="input-group">
              <label for="description">Description of the needs </label>
              <input type="text" name="description" id="description">
            </article>
        
            <article class="input-group">
              <label for="imageUrl"> Needed materials image </label>
              <input type="text" name="imageUrl" id="imageUrl">
            </article>
        
            <article class="input-group">
              <label for="address">Address of the orphanage</label>
              <input type="text" name="address" id="address">
            </article>
        
            <article class="input-group">
              <label for="phone">Phone number of orphanage employee</label>
              <input type="text" name="phone" id="phone">
            </article>
        
            <input type="submit" class="btn submit" value="Create Post">
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
    const { title, description, imageUrl, address, phone } = Object.fromEntries(new FormData(e.target).entries());

    if (!title || !description || !imageUrl || !address || !phone) {
      return alert('All fields are required!')
    }

    const productData = await post('/data/posts', { title, description, imageUrl, address, phone });
    // console.log(productData);
    ctx.page.redirect('/dashboard');
  }
}