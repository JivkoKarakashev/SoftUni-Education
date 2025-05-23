import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';

import { configCtx } from './configCtx.js';
import { renderHomePage } from './renderHomePage.js';
import { renderDetailsPage } from './renderDetailsPage.js';

const rootEl = document.querySelector('body');

page(configCtx.bind(null, rootEl, html, render));
page('/index.html', '/');
page('/', renderHomePage);
page('/catalog/:id', renderDetailsPage);

page.start();