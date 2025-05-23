const footerTemplate = (html) => html`
<footer class="page-footer font-small">
    <div class="footer-copyright text-center py-3">
      &copy; 2020
      <a href="#" class="text-dark">JS Applications</a>
    </div>
</footer>`;

function createFooterTemplate(html) {
    return footerTemplate(html);
}

export {
    createFooterTemplate
}