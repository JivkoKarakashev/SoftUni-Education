import { html } from '../node_modules/lit-html/lit-html.js';

import { post } from './api.js';

const createTemplate = (onSubmit) => html`
<section id="create">
  <div class="form">
    <h2>Add Album</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
      <input type="text" name="album" id="album-album" placeholder="Album" />
      <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
      <input type="text" name="release" id="album-release" placeholder="Release date" />
      <input type="text" name="label" id="album-label" placeholder="Label" />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" />

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
    let { singer, album, imageUrl, release, label, sales } = Object.fromEntries(new FormData(e.currentTarget).entries());

    if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
      return alert('All fields are required!')
    }

    const shoesData = await post('/data/albums', { singer, album, imageUrl, release, label, sales });
    // console.log(shoesData);
    ctx.page.redirect('/dashboard');
  }
}