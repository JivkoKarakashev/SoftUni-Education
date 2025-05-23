const footerTemplate = (html) => html`
<footer id="footer">
    SoftUni &copy; 2014-2021
</footer>`;

function createFooterTemplate(html) {
    return footerTemplate(html);
}

export {
    createFooterTemplate
}