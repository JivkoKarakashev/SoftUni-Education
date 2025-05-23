import { hasUser } from './getUserData.js';

const createNavTemplate = (html) => html`
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container">
        <a class="navbar-brand" href="/">
            <img src="../images/idea.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/ideas">Dashboard</a>
                </li>
                ${hasUser() ? html`
                <li class="nav-item">
                    <a class="nav-link" href="/ideas/create">Create</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logout">Logout</a>
                </li>` : null}
                ${!hasUser() ? html`<li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>` : null}
            </ul>
        </div>
    </div>
</nav>`;

const switchActiveLink = (string, rootel) => {
    // console.log(rootel);
    const dashboardLinkEl = rootel.querySelector("li > a[href='/ideas']");
    // console.log(dashboardLinkEl);
    switch (string) {
        case 'dashboard': {
            dashboardLinkEl.classList.add('active');
            if (hasUser()) {
                const createIdeasLinkEl = rootel.querySelector("li > a[href='/ideas/create']");
                // console.log(createIdeasLinkEl);
                createIdeasLinkEl.classList.remove('active');
            }
            break;
        }
        case 'create': {
            dashboardLinkEl.classList.remove('active');
            const createIdeasLinkEl = rootel.querySelector("li > a[href='/ideas/create']");
            createIdeasLinkEl.classList.add('active');
            break;
        }
    };
};

export {
    createNavTemplate,
    switchActiveLink
}