import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input type="text" name="title" id="job-title" placeholder="Title" />
              <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
              <input type="text" name="category" id="job-category" placeholder="Category" />
              <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
              <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"></textarea>
              <input type="text" name="salary" id="job-salary" placeholder="Salary" />
        
              <button type="submit">post</button>
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
    const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(new FormData(e.target).entries());

    if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
      return alert('All fields are required!')
    }

    const productData = await post('/data/offers', { title, imageUrl, category, description, requirements, salary });
    // console.log(productData);
    ctx.page.redirect('/dashboard');
  }
}