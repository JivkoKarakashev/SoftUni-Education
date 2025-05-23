import { html, render } from "../node_modules/lit-html/lit-html.js";

import { rootElRef } from "./app.js";
import { getCommentsByTopicId } from "./api.js";
import { createNavTemplate } from "./navTemplate.js";
import { createCommentFormTemplate } from "./commentFormTemplate.js";
import { createCommentTemplate } from "./commentTemplate.js";

const detailsTemplate = (topic, commentsArr) => html`
${createNavTemplate()}
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
            ${commentsArr.length ? commentsArr.map(comment => createCommentTemplate(comment)) : null}
        </div>
        <!-- comment-Form  -->
        ${createCommentFormTemplate(topic._id)}
    </div>
</div>`;

async function renderDetailsPage(id) {
    // console.log(id);
    getCommentsByTopicId(id)
        .then(({ topic, commentsArr }) => {
            // console.log(topic, commentsArr);
            render(detailsTemplate(topic, commentsArr), rootElRef);
        })
        .catch(err => {
            return alert(err.message);
        });
}

export {
    renderDetailsPage
}