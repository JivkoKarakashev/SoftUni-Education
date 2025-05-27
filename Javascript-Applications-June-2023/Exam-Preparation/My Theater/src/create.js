import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="createPage">
          <form class="create-form" @submit=${onSubmit}>
            <h1>Create Theater</h1>
            <div>
              <label for="title">Title:</label>
              <input id="title" name="title" type="text" placeholder="Theater name" value="">
            </div>
            <div>
              <label for="date">Date:</label>
              <input id="date" name="date" type="text" placeholder="Month Day, Year">
            </div>
            <div>
              <label for="author">Author:</label>
              <input id="author" name="author" type="text" placeholder="Author">
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea id="description" name="description" placeholder="Description"></textarea>
            </div>
            <div>
              <label for="imageUrl">Image url:</label>
              <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
            </div>
            <button class="btn" type="submit">Submit</button>
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
    const { title, date, author, imageUrl, description } = Object.fromEntries(new FormData(e.currentTarget).entries());

    if (title == '' || date == '' || author == '' || imageUrl == '' || description == '') {
      return alert('All fields are required!')
    }

    const theaterData = await post('/data/theaters', { title, date, author, imageUrl, description });
    // console.log(theaterData);
    ctx.page.redirect('/');
  }
}