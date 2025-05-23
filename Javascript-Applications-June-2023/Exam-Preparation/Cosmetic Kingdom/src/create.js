import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input type="text" name="name" id="name" placeholder="Product Name" />
              <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
              <input type="text" name="category" id="product-category" placeholder="Category" />
              <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
        
              <input type="text" name="price" id="product-price" placeholder="Price" />
        
              <button type="submit">Add</button>
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
    const { name, imageUrl, category, description, price } = Object.fromEntries(new FormData(e.target).entries());

    if (name == '' || imageUrl == '' || category == '' || description == '' || price == '') {
      return alert('All fields are required!')
    }

    const productData = await post('/data/products', { name, imageUrl, category, description, price });
    // console.log(productData);
    ctx.page.redirect('/dashboard');
  }
}