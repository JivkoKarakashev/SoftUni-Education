function editElement(htmlElRef, match, replacer) {
    
    const elContent = htmlElRef.textContent;
    const editedContent = elContent.split(match).join(replacer);
    htmlElRef.textContent = editedContent;
}