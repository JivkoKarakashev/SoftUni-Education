import page from "../node_modules/page/page.mjs";

const topicTemplate = (html, topic, onDetailsView) => html`
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

function createTopicTemplate(html, topic) {
    return topicTemplate(html, topic, onDetailsView);

    function onDetailsView(e) {
        e.preventDefault();
        page.redirect(`/catalog/${topic._id}`);
    }
}



export {
    createTopicTemplate
}