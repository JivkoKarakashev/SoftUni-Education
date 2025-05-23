import { html } from '../node_modules/lit-html/lit-html.js';

import { get } from './api.js';

const catalogTemplate = (furnsArr) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${furnsArr.map((furn) => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${furn['img']}" />
                    <p>${furn['description']}</p>
                    <footer>
                        <p>Price: <span>${furn['price']} $</span></p>
                    </footer>
                    <div>
                        <a href="furniture/${furn['_id']}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
        `)}
    </div>
`;

export async function catalogPage(ctx) {
    // console.log(ctx);
    // divContainerElement.replaceChildren();
    const furnsArr = await get('/data/catalog');
    // console.log(furnsArr);
    ctx.render(catalogTemplate(furnsArr));

}
