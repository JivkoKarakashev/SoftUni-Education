import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (theaterObj, onSubmit) => html`
        <section id="editPage">
            <form class="theater-form" @submit=${onSubmit}>
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value="${theaterObj['title']}">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value="${theaterObj['date']}">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author" .value="${theaterObj['author']}">
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description" placeholder="Description" .value="${theaterObj['description']}"></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value="${theaterObj['imageUrl']}">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`;

export async function editPage(ctx, next) {
    const theaterId = ctx.params.id
    // console.log(theaterId);
    const theaterObj = await get(`/data/theaters/${theaterId}`)
    ctx.render(editTemplate(theaterObj, onSubmit));
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        // let isValid = true;
        const userData = JSON.parse(localStorage.getItem('userData'));
        // const token = userData.accessToken;
        if (userData == null) {
            return
        }
        // const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
        // allInputElementsArr.pop();
        const { title, date, author, imageUrl, description } = Object.fromEntries(new FormData(e.target).entries());

        if (title == '' || date == '' || author == '' || imageUrl == '' || description == '') {
            return alert('All fields are required!')
        }

        const theaterData = await put(`/data/theaters/${theaterId}`, { title, date, author, imageUrl, description });
        // console.log(theaterData);
        // e.target.reset();
        ctx.page.redirect(`/dashboard/${theaterId}`);
    }
}