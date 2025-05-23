const footerTemplate = (html) => html`
<footer>
    <div>
        &copy;SoftUni Team 2021. All rights reserved.
    </div>
</footer>`;

function createFooterTemplate(html) {
    return footerTemplate(html);
}

export {
    createFooterTemplate
}