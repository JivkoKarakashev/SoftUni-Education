import page from "../node_modules/page/page.mjs";
import { html, render } from '../node_modules/lit-html/lit-html.js';

import { configCtx } from "./configCtx.js";
import { renderHomePage } from "./homePage.js";
import { renderRegisterPage } from "./registerPage.js";
import { renderLoginPage } from "./loginPage.js";
import { logout } from "./api.js";
import { renderDashboardPage } from "./dashboardPage.js";
import { renderDetailsPage } from "./detailsPage.js";
import { renderCreatePage } from "./createPage.js";

const rootEl = document.querySelector('body');

page(configCtx.bind(null, rootEl, html, render));
page('/index.html', '/');
page('/', renderHomePage);
page('/register', renderRegisterPage);
page('/login', renderLoginPage);
page('/logout', logout);
page('/ideas', renderDashboardPage);
page('/ideas/create', renderCreatePage);
page('/ideas/:id', renderDetailsPage);

page.start();
