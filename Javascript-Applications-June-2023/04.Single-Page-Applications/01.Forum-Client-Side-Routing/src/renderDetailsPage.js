import { getCommentsByTopicId } from "./api.js";
import { createCommentFormTemplate } from "./commentFormTemplate.js";
import { createCommentTemplate } from "./commentTemplate.js";
import { createNavTemplate } from "./navTemplate.js";

const detailsTemplate = (ctx, topic, commentsArr) => ctx.html`
${createNavTemplate(ctx)}
<div class="container">
    <!-- theme content  -->
    <div class="theme-content">
        <!-- theme-title  -->
        <div class="theme-title">
            <div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>${topic.title}</h2>
                </div>
            </div>
        </div>

        <div class="comment">
            <div class="header">
                <img src="../static/profile.png" alt="avatar">
                <p><span>${topic.username}</span> posted on <time>${topic.date} ${topic.time}</time></p>

                <p class="post-content">${topic.content}</p>
            </div>
            ${commentsArr.length ? commentsArr.map(comment => createCommentTemplate(ctx.html, comment)) : null}
        </div>
        <!-- comment-Form  -->
        ${createCommentFormTemplate(ctx.html, topic._id)}
    </div>
</div>`;

async function renderDetailsPage(ctx) {
    const id = ctx.params.id;
    // console.log(id);
    getCommentsByTopicId(id)
        .then(({ topic, commentsArr }) => {
            // console.log(topic, commentsArr);
            ctx.render(detailsTemplate(ctx, topic, commentsArr), ctx.root);
        })
        .catch(err => {
            return alert(err.message);
        });
}

export {
    renderDetailsPage
}