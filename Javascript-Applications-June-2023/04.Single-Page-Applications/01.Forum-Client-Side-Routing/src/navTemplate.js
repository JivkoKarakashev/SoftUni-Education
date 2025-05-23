const navTemplate = (html, onNavigateHome) => html`
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

function createNavTemplate(ctx) {
    return navTemplate(ctx.html, onNavigateHome);

    function onNavigateHome(e) {
        e.preventDefault();
        ctx.page.redirect('/');
    }
}

export {
    createNavTemplate
}