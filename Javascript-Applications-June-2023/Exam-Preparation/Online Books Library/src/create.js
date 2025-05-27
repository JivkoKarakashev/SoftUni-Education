import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create-page" class="create">
          <form id="create-form" action="" method="" @submit=${onSubmit}>
            <fieldset>
              <legend>Add new Book</legend>
              <p class="field">
                <label for="title">Title</label>
                <span class="input">
                  <input type="text" name="title" id="title" placeholder="Title">
                </span>
              </p>
              <p class="field">
                <label for="description">Description</label>
                <span class="input">
                  <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
              </p>
              <p class="field">
                <label for="image">Image</label>
                <span class="input">
                  <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
              </p>
              <p class="field">
                <label for="type">Type</label>
                <span class="input">
                  <select id="type" name="type">
                    <option value="Fiction">Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mistery">Mistery</option>
                    <option value="Classic">Clasic</option>
                    <option value="Other">Other</option>
                  </select>
                </span>
              </p>
              <input class="button submit" type="submit" value="Add Book">
            </fieldset>
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
    const { title, description, imageUrl, type } = Object.fromEntries(new FormData(e.currentTarget).entries());

    if (title == '' || description == '' || imageUrl == '' || type == '') {
      return alert('All fields are required!')
    }

    const bookData = await post('/data/books', { title, description, imageUrl, type });
    // console.log(bookData);
    ctx.page.redirect('/dashboard');
  }
}