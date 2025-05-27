import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const dashboardTemplate = (booksArr) => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <!-- Display ul: with list-items for All books (If any) -->
        <ul class="other-books-list">
            ${booksArr.length != 0 ? booksArr.map((book) => html`
            <li class="otherBooks">
                <h3>${book['title']}</h3>
                <p>Type: ${book['type']}</p>
                <p class="img"><img src="${book['imageUrl']}"></p>
                <a class="button" href="/dashboard/${book['_id']}">Details</a>
            </li>
            `) : null}
        </ul>
        <!-- Display paragraph: If there are no books in the database -->
        ${booksArr.length == 0 ? html`<p class="no-books">No books in database!</p>` : null}
    </section>
`;

export async function dashboardPage(ctx, next) {
    // console.log(ctx);
    const booksArr = await get('/data/books?sortBy=_createdOn%20desc');
    // const booksArr = [];
    // console.log(booksArr);
    ctx.render(dashboardTemplate(booksArr));
}