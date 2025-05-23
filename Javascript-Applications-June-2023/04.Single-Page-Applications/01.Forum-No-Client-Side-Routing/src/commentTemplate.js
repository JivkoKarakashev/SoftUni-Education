import { html } from "../node_modules/lit-html/lit-html.js";

const createCommentTemplate = (comment) => html`
<div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${comment.username}</strong> commented on <time>${comment.date}, ${comment.time}</time></p>
            <div class="post-content">
                <p>${comment.text}</p>
            </div>
        </div>
    </div>
</div>`;

export {
    createCommentTemplate
}