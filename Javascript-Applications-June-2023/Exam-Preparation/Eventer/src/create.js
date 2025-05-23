import { html } from '../node_modules/lit-html/lit-html.js';
import { post } from './api.js';

const createTemplate = (onSubmit) => html`
        <section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input type="text" name="name" id="name" placeholder="Event" />
              <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
              <input type="text" name="category" id="event-category" placeholder="Category" />
        
        
              <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
        
              <input type="text" name="date" id="date" placeholder="When?" />
        
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
    const { name, imageUrl, category, description, date } = Object.fromEntries(new FormData(e.target).entries());

    if (name == '' || imageUrl == '' || category == '' || description == '' || date == '') {
      return alert('All fields are required!')
    }

    const eventData = await post('/data/events', { name, imageUrl, category, description, date });
    // console.log(eventData);
    ctx.page.redirect('/dashboard');
  }
}