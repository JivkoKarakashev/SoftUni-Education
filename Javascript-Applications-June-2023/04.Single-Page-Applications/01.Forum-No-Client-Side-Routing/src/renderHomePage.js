import { html, render } from "../node_modules/lit-html/lit-html.js";

import { rootElRef } from "./app.js";
import { createNavTemplate } from "./navTemplate.js";
import { createTopic, getTopicsData } from "./api.js";
import { createDateTimeStamp } from "./createDateTimeStamp.js";
import { createTopicTemplate } from "./topicTemplate.js";

const homeTemplate = (onFormSubmit, onFormClear, topicsArr) => html`
${createNavTemplate()}

<div class="container">
    <main>
        <div class="new-topic-border">
            <div class="header-background">
                <span>New Topic</span>
            </div>
            <form @submit=${onFormSubmit}>
                <div class="new-topic-title">
                    <label for="topicName">Title <span class="red">*</span></label>
                    <input type="text" name="topicName" id="topicName">
                </div>
                <div class="new-topic-title">
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <div class="new-topic-content">
                    <label for="postText">Post <span class="red">*</span></label>
                    <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
                </div>
                <div class="new-topic-buttons">
                    <button class="cancel" @click=${onFormClear}>Cancel</button>
                    <button class="public">Post</button>
                </div>
            </form>
        </div>
        <div class="topic-title">
            <!-- topic component  -->
            ${topicsArr.length ? topicsArr.map(topic => createTopicTemplate(topic)) : null}  
        </div>         
    </main>
</div>

<footer>
    <p>This site is designed to be used for training purposes at SoftUni.</p>
    <p>You can find the real SoftUni forum at this link:</p>
    <p><span><a href="https://softuni.bg/forum">https://softuni.bg/forum</a></span></p>
</footer>`;

function renderHomePage() {
    getTopicsData()
        .then(topicsData => {
            const topicsArr = Object.values(topicsData);
            // console.log(topicsArr);
            render(homeTemplate(onFormSubmit, onFormClear, topicsArr), rootElRef);
        })
        .catch(err => {
            return alert(err.message);
        });

    async function onFormSubmit(e) {
        e.preventDefault();
        const formRef = e.currentTarget;

        const { topicName, username, postText } = Object.fromEntries(new FormData(e.currentTarget).entries());
        if (!topicName || !username || !postText) {
            return alert('All fields are required!');
        }
        const { date, time } = createDateTimeStamp('topic');
        // console.log(topicName, username, postText);
        createTopic(topicName, username, postText, date, time)
            .then(topic => {
                // console.log(topic);
                onFormClear(null, formRef);
                renderHomePage();
            })
            .catch(err => {
                return alert(err.message);
            });
    }

    function onFormClear(e, formElRef) {
        // console.log(formElRef);
        if (e) {
            e.preventDefault();
            formElRef = document.querySelector('form');
            // console.log(formElRef);
        }
        formElRef.reset()
    };
}


export {
    renderHomePage
}