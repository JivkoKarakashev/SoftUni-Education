import { html } from '../node_modules/lit-html/lit-html.js';

import { get, put } from './api.js';

const editTemplate = (gameObj, onSubmit) => html`
        <section id="edit-page" class="auth">
            <form id="edit" @submit=${onSubmit}>
                <div class="container">
        
                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value="${gameObj['title']}">
        
                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value="${gameObj['category']}">
        
                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${gameObj['maxLevel']}">
        
                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value="${gameObj['imageUrl']}">
        
                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value="${gameObj['summary']}"></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">
        
                </div>
            </form>
        </section>
`;

export async function editPage(ctx, next) {
    const gameId = ctx.params.id
    // console.log(gameId);
    const gameObj = await get(`/data/games/${gameId}`)
    ctx.render(editTemplate(gameObj, onSubmit));
    // console.log(allInputElementsArr);
    async function onSubmit(e) {
        e.preventDefault();
        // let isValid = true;
        const userData = JSON.parse(localStorage.getItem('userData'));
        // const token = userData.accessToken;
        if (userData == null) {
            return
        }
        // const allInputElementsArr = Array.from(document.querySelectorAll('div > input'));
        // allInputElementsArr.pop();
        let { title, category, maxLevel, imageUrl, summary } = Object.fromEntries(new FormData(e.target).entries());

        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
            return alert('All fields are required!')
        }

        const gameData = await put(`/data/games/${gameId}`, { title, category, maxLevel, imageUrl, summary });
        // console.log(gameData);
        // e.target.reset();
        ctx.page.redirect(`/catalog/${gameId}`);
    }
}