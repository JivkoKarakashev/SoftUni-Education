import { html } from "../node_modules/lit-html/lit-html.js";

import { renderHomePage } from "./renderHomePage.js";

const navTemplate = (onNavigateHome) => html`
<header>
    <div class="mini-navbar-wrap">
        <div class="logo-wrap">
            <p class="logo"><span class="logo">SoftUni Forum</span></p>
        </div>
        <div class="mini-navbar">
        </div>
    </div>
    <nav>
        <ul>
            <li>
                <a href="/" @click=${onNavigateHome}>Home</a>
            </li>
        </ul>
    </nav>
</header>`;

function createNavTemplate() {
    return navTemplate(onNavigateHome);

    function onNavigateHome(e) {
        e.preventDefault();
        renderHomePage();
    }
}

export {
    createNavTemplate
}