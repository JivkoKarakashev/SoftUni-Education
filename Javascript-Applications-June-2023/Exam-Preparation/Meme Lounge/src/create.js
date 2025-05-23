import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';
import { updateActive } from './app.js';
import { notification } from './notification.js';

const createTemplate = (onSubmit) => html`
        <section id="create-meme">
          <form id="create-form" @submit=${onSubmit}>
            <div class="container">
              <h1>Create Meme</h1>
              <label for="title">Title</label>
              <input id="title" type="text" placeholder="Enter Title" name="title">
              <label for="description">Description</label>
              <textarea id="description" placeholder="Enter Description" name="description"></textarea>
              <label for="imageUrl">Meme Image</label>
              <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
              <input type="submit" class="registerbtn button" value="Create Meme">
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
    const { title, description, imageUrl } = Object.fromEntries(new FormData(e.target).entries());

    try {
      if (!title || !description || !imageUrl) {
        throw new Error('All fields are required!');
      }
      const memeData = await post('/data/memes', { title, description, imageUrl });
      // console.log(memeData);
    } catch (err) {
      notification(err);
      return;
    }
    updateActive();
    ctx.page.redirect('/dashboard');
  }
}