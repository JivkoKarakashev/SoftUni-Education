import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";

import { configCtx } from "./config.js";
import { renderHomePage } from "./renderHomePage.js";
import { renderTeamsPage } from "./renderTeamsPage.js";
import { renderLoginPage } from "./renderLoginPage.js";
import { renderRegisterPage } from "./renderRegisterPage.js";
import { renderCreateTeamTemplate } from "./renderCreatePage.js";
import { renderEditTeamPage } from "./renderEditPage.js";
import { renderDetailsPage } from "./renderDetailsPage.js";
import { renderMyTeamsPage } from "./renderMyteamsPage.js";

const root = document.querySelector('body');

page(configCtx.bind(null, html, render, root));
page('/index.html', '/');
page('/', renderHomePage);
page('/teams', renderTeamsPage);
page('/login', renderLoginPage);
page('/register', renderRegisterPage);
page('/create', renderCreateTeamTemplate);
page('/details/team/:id/edit', renderEditTeamPage);
page('/details/team/:id', renderDetailsPage);
page('/myteams', renderMyTeamsPage);

page.start();