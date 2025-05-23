import { html, render } from '../node_modules/lit-html/lit-html.js';
import { onLoad } from './load.js';
import { onAdd } from './add.js';

const bodyEl = document.querySelector('body');

const homeViewTemplate = () => html`
    <button id="loadBooks" @click=${onLoad}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    
        </tbody>
    </table>
    
    <form id="add-form" @submit=${onAdd}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
`;
export function homeView() {
    render(homeViewTemplate(), bodyEl);
}
homeView();