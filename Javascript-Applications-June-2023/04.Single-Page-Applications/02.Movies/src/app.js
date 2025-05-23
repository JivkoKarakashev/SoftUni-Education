import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { config } from "./config.js";
import { renderHomePage } from "./renderHomePage.js";
import { renderRegisterPage } from "./renderRegisterPage.js";
import { renderLoginPage } from "./renderLoginPage.js";
import { renderCreatePage } from "./renderCreatePage.js";
import { renderDetailsPage } from "./renderDetailsPage.js";
import { renderEditPage } from "./renderEditPage.js";

const rootElRef = document.querySelector('body > #container');

page(config.bind(null, html, render));
page('/index.html', '/');
page('/', renderHomePage);
page('/register', renderRegisterPage);
page('/login', renderLoginPage);
page('/create', renderCreatePage);
page('/details/:id/edit', renderEditPage);
page('/details/:id', renderDetailsPage);

page.start();

export {
    rootElRef
}