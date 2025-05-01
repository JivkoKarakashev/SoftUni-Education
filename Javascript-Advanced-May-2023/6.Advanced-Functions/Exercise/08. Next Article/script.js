function getArticleGenerator(articles) {
    let index = 0;
    const articlesArr = articles;
    const articlesArrLength = articlesArr.length;
    const divElement = document.querySelector('div#content');
    return function article() {
        if (index < articlesArrLength) {
            const articleElement = document.createElement('article');
            divElement.appendChild(articleElement);
            articleElement.textContent = articlesArr[index];
            index++;            
        }
    }
}
