import { html } from "../node_modules/lit-html/lit-html.js";

import { createCommentByTopicId } from "./api.js";
import { createDateTimeStamp } from "./createDateTimeStamp.js";
import { renderDetailsPage } from "./renderDetailsPage.js";

const commentFormTemplate = (onCommentFormSubmit) => html`
<div class="answer-comment">
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form @submit=${onCommentFormSubmit}>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div>
</div>`;

function createCommentFormTemplate(postId) {
    return commentFormTemplate(onCommentFormSubmit);

    async function onCommentFormSubmit(e) {
        e.preventDefault();
        const { postText, username } = Object.fromEntries(new FormData(e.currentTarget).entries());
        const { date, time } = createDateTimeStamp('comment');
        // console.log(postText, username, postId, date, time);

        createCommentByTopicId(postText, username, postId, date, time)
            .then(comment => {
                console.log(comment);
                renderDetailsPage(postId);
            })
            .catch(err => {
                return alert(err.message);
            });
    };
}

export {
    createCommentFormTemplate
}