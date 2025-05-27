import { html } from '../node_modules/lit-html/lit-html.js';

import { get, del } from './api.js';
import { addLike, getLikes, getUserLike } from './likes.js';

const detailsTemplate = (book, onDelete, onLike) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book['title']}</h3>
            <p class="type">Type: ${book['type']}</p>
            <p class="img"><img src="${book['imageUrl']}"></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${addButtons(book, onDelete, onLike)}
                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->    
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${book['likes']}</span>
                </div>
                <!-- Bonus -->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book['description']}</p>
        </div>
    </section>
    `;

function addButtons(book, onDelete, onLike) {
    return html`   
        <!--Edit and Delete are only for creator-->
        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
        ${book.isOwner ? html`<a class="button" href="${book['_id']}/edit">Edit</a>` : null}
        ${book.isOwner ? html`<a class="button" href="javascript:void(0)" @click=${onDelete}>Delete</a>` : null}
        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${book.canLike ? html`<a class="button" href="javascript:void(0)" @click=${onLike}>Like</a>` : null}
    `
}

export async function detailsPage(ctx) {
    // console.log(ctx);
    const bookId = ctx.params.id;

    const requests = [
        get(`/data/books/${bookId}`),
        getLikes(bookId),
    ];

    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData) {
        requests.push(getUserLike(bookId, userData['_id']));
    }

    const [bookDetails, likes, hasLiked] = await Promise.all(requests);
    // console.log(bookDetails, likes, hasLiked);

    bookDetails.likes = likes;
    // const bookDetails = await get(`/data/books/${bookId}`);
    // console.log(bookDetails);
    if (userData != null) {
        const bookOwnerId = bookDetails['_ownerId'];
        bookDetails.isOwner = userData['_id'] == bookOwnerId;
        bookDetails.canLike = bookDetails.isOwner == false && hasLiked == 0;
    }

    // console.log(bookDetails);
    ctx.render(detailsTemplate(bookDetails, onDelete, onLike));

    async function onDelete(e) {
        // console.log(e.currentTarget);
        const choice = confirm(`Are you sure want to delete book ${bookDetails['book']} ${bookDetails['singer']}`);
        if (choice) {
            await del(`/data/books/${bookId}`);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        addLike(bookId);
        ctx.page.redirect(`/dashboard/${bookId}`);
    }
}