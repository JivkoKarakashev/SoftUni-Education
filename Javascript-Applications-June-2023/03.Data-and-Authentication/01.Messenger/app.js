// window.onload = attachEvents();
// window.addEventListener('load', attachEvents());

const url = 'http://localhost:3030/jsonstore/messenger';
const refreshButton = document.querySelector('#refresh');
const sendButton = document.querySelector('#submit');
const textAreaElement = document.querySelector('#messages');
textAreaElement.value = '';

const inputAuthorElement = document.querySelector('input[name=author]');
const inputContentElement = document.querySelector('input[name=content]');

function attachEvents() {
    refreshButton.addEventListener('click', refreshButtonEventHandler());
    sendButton.addEventListener('click', sendButtonEventHandler);
}

async function onRefresh() {
    const options = {
        method: 'get',
        headers: {
            'content-type': 'application/json',
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
async function onSend() {
    const author = inputAuthorElement.value;
    const content = inputContentElement.value;
    if (author === '' || content === '') {
        return alert('All fields are requiered');
    }
    const options = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ author, content }),
    }
    const response = await fetch(url, options);
    const data = await response.json();
    textAreaElement.value += `\n${author}: ${content}`;
    inputAuthorElement.value = '';
    inputContentElement.value = '';
    return data;
};

async function refreshButtonEventHandler() {
    const ouputMsgsArr = [];
    const messagesObjs = await onRefresh();
    const messagesObjsArray = Object.entries(messagesObjs);
    // console.log(messagesObjsArray);
    messagesObjsArray.forEach(msgObj => {
        const { author, content } = msgObj[1];
        ouputMsgsArr.push(`${author}: ${content}`);
    });
    textAreaElement.value = ouputMsgsArr.join('\n');
};
async function sendButtonEventHandler() {
    const retrunedData = await onSend();
    // console.log(retrunedData);
};

attachEvents();