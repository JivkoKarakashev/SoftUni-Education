window.onload = attachEvents();

function attachEvents() {

    const buttonLoadPosts = document.querySelector('#btnLoadPosts');
    const postsElement = document.querySelector('#posts');
    const buttonView = document.querySelector('#btnViewPost');
    // console.log(buttonView);
    const h1PostTitleElement = document.querySelector('#post-title');
    const pPostBodyElement = document.querySelector('#post-body');
    const ulPostCommentsElement = document.querySelector('#post-comments');

    const urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
    const urlComments = 'http://localhost:3030/jsonstore/blog/comments';

    const createElement = (tag, content, attributesArr = []) => {
        const element = document.createElement(tag);
        if (content) {
            element.textContent = content;
        }
        if (attributesArr.length !== 0) {
            for (let i = 0; i < attributesArr.length; i += 2) {
                element.setAttribute(attributesArr[i], attributesArr[i + 1]);
            }
        }
        return element;
    };

    const buttonLoadPostsEventHandler = (e) => {
        // console.log(e.currentTarget);
        const response = fetch(urlPosts, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        response
            .then((resp) => resp.json())
            .then(postObjs => {
                const postObjsArray = Object.entries(postObjs);
                // console.log(postObjsArray);
                postObjsArray.forEach(postObj => {
                    const { body, id, title } = postObj[1];
                    const optionEl = createElement('option', title, ['value', id, 'data-content', body]);
                    postsElement.appendChild(optionEl);
                });
            });

    };
    const buttonViewEventHandler = (e) => {
        // console.log(postsElement.value);
        const selectedPostId = postsElement.value;
        const selectedIndex = postsElement.options.selectedIndex;
        const selectedIndexTitle = postsElement.options[selectedIndex].textContent;
        const selectedContent = postsElement.options[selectedIndex].dataset.content;

        // console.log(selectedContent);

        const response = fetch(urlComments, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        response
            .then((resp) => resp.json(resp))
            .then(postsCommentObjs => {
                const allCommentsObjsArr = Object.entries(postsCommentObjs);
                const commnetsObjsArr = allCommentsObjsArr.filter((postObj) => postObj[1].postId === selectedPostId);
                // const commnetsObjsArrLength = commnetsObjsArr.length;
                // console.log(commnetsObjsArr);
                h1PostTitleElement.textContent = selectedIndexTitle;
                pPostBodyElement.textContent = selectedContent;
                ulPostCommentsElement.replaceChildren();

                commnetsObjsArr.forEach(commentsObjsArr => {
                    const { id, text } = commentsObjsArr[1];
                    const liEl = createElement('li', text, ['id', id]);
                    ulPostCommentsElement.appendChild(liEl);
                });
            });
    };

    buttonLoadPosts.addEventListener('click', buttonLoadPostsEventHandler);
    buttonView.addEventListener('click', buttonViewEventHandler);
}

// attachEvents();