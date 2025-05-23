const baseUrl = 'http://localhost:3030/jsonstore/collections/myboard';

async function getTopicsData() {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/posts`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getCommentsData() {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/comments`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function createTopic(title, username, content, date, time) {
    // console.log(title, username, content);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, username, content, date, time })
    }

    const response = await fetch(`${baseUrl}/posts`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getTopicById(id) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/posts/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getCommentsByTopicId(id) {
    // console.log(id);
    const [topic, commentsData] = await Promise.all([getTopicById(id), getCommentsData()]);

    const commentsArr = Object.values(commentsData).filter(c => c.postId === topic._id);
    // console.log(topic);
    // console.log(commentsArr);

    return {
        topic,
        commentsArr
    }
}

async function createCommentByTopicId(text, username, postId, date, time) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, username, postId, date, time })
    }

    const response = await fetch(`${baseUrl}/comments`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

export {
    getTopicsData,
    createTopic,
    getCommentsByTopicId,
    createCommentByTopicId
}