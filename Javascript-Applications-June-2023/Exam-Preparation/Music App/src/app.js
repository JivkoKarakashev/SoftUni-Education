import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';

import { configCtx } from './config.js';
import { renderLoginPage } from './renderLoginPage.js';
import { renderHomePage } from './renderHomePage.js';
import { renderRegisterPage } from './renderRegisterPage.js';
import { renderCatalogPage } from './renderCatalogPage.js';
import { renderDetailsPage } from './renderDetailsPage.js';
import { renderCreateTemplate } from './renderCreatePage.js';
import { renderEditPage } from './renderEditPage.js';
import { renderSearchPage } from './renderSearchPage.js';

const root = document.querySelector('div#box');

page(configCtx.bind(null, html, render, root));
page('/index.html', '/');
page('/', renderHomePage);
page('/auth/login', renderLoginPage);
page('/auth/register', renderRegisterPage);
page('/catalog/search', renderSearchPage);
page('/catalog', renderCatalogPage);
page('/details/:id/edit', renderEditPage);
page('/details/:id', renderDetailsPage);
page('/create', renderCreateTemplate);

page.start();