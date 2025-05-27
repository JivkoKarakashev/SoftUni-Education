import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const myBooksTemplate = (booksArr) => html`
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        <!-- Display ul: with list-items for every user's books (if any) -->
        <ul class="my-books-list">
            ${booksArr.length != 0 ? booksArr.map((book) => html`
            <li class="otherBooks">
                <h3>${book['title']}</h3>
                <p>Type: ${book['type']}</p>
                <p class="img"><img src="${book['imageUrl']}"></p>
                <a class="button" href="dashboard/${book['_id']}">Details</a>
            </li>
            `) : null}
        </ul>
    
        <!-- Display paragraph: If the user doesn't have his own books  -->
        ${booksArr.length == 0 ? html`<p class="no-books">No books in database!</p>` : null}
    </section>
    `;

export async function myBooksPage(ctx) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        return;
    }
    const userId = userData['_id'];
    const booksArr = await get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    // console.log(booksArr);
    // console.log(userData);
    ctx.render(myBooksTemplate(booksArr));
    // console.log(ctx);
}