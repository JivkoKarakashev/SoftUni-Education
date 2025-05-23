import { html } from "../node_modules/lit-html/lit-html.js";

import { renderDetailsPage } from "./renderDetailsPage.js";

const topicTemplate = (topic, onDetailsView) => html`
<div class="topic-container">
    <div class="topic-name-wrapper" data-id="${topic._id}">
        <div class="topic-name">
            <a href="/catalog/${topic._id}" class="normal" @click=${onDetailsView}>
                <h2>${topic.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${topic.date} ${topic.time}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

function createTopicTemplate(topic) {
    return topicTemplate(topic, onDetailsView);

    function onDetailsView(e) {
        e.preventDefault();
        renderDetailsPage(topic._id);
    }
}



export {
    createTopicTemplate
}