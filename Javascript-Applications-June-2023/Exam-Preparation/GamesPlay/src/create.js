import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create-page" class="auth">
          <form id="create" @submit=${onSubmit}>
            <div class="container">
        
              <h1>Create Game</h1>
              <label for="leg-title">Legendary title:</label>
              <input type="text" id="title" name="title" placeholder="Enter game title...">
        
              <label for="category">Category:</label>
              <input type="text" id="category" name="category" placeholder="Enter game category...">
        
              <label for="levels">MaxLevel:</label>
              <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">
        
              <label for="game-img">Image:</label>
              <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">
        
              <label for="summary">Summary:</label>
              <textarea name="summary" id="summary"></textarea>
              <input class="btn submit" type="submit" value="Create Game">
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
    let { title, category, maxLevel, imageUrl, summary } = Object.fromEntries(new FormData(e.currentTarget).entries());

    if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
      return alert('All fields are required!')
    }
    const gameData = await post('/data/games', { title, category, maxLevel, imageUrl, summary });
    // console.log(gameData);
    ctx.page.redirect('/');
  }
}