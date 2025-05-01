window.addEventListener("load", solve);

function solve() {

  const titleElement = document.querySelector('body form.newPostContent input#post-title');
  const categoryElement = document.querySelector('body form.newPostContent input#post-category');
  const contentElement = document.querySelector('body form.newPostContent textarea#post-content');
  const publishButtonElement = document.querySelector('body form.newPostContent button#publish-btn');

  const ulReviewElement = document.querySelector('body div#middle-container div#relatedPosts ul#review-list');

  const ulPublishedElement = document.querySelector('body div#middle-container div#published-container div.container ul#published-list');

  const clearButtonElement = document.querySelector('body div#middle-container div#published-container div.container button#clear-btn');

  const inputFieldsValidation = () => {
    const titleInput = titleElement.value;
    const categoryInput = categoryElement.value;
    const contentInput = contentElement.value;
    if (!titleInput || !categoryInput || !contentInput) {
      return;
    }
    const liEl = document.createElement('li');
    liEl.classList.add('rpost');
    const articleEl = document.createElement('article');
    const h4El = document.createElement('h4');
    h4El.textContent = titleInput;
    const pEl = document.createElement('p');
    pEl.textContent = `Category: ${categoryInput}`;
    const p1El = document.createElement('p');
    p1El.textContent = `Content: ${contentInput}`;
    articleEl.appendChild(h4El);
    articleEl.appendChild(pEl);
    articleEl.appendChild(p1El);
    const editButEl = document.createElement('button');
    editButEl.className = 'action-btn edit';
    editButEl.textContent = 'Edit';
    const approveButEl = document.createElement('button');
    approveButEl.className = 'action-btn approve';
    approveButEl.textContent = 'Approve';
    liEl.appendChild(articleEl);
    liEl.appendChild(approveButEl);
    liEl.appendChild(editButEl);
    ulReviewElement.appendChild(liEl);
    editButEl.addEventListener('click', editButtonEventHandler);
    approveButEl.addEventListener('click', approveButtonEventHandler);
    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';
  };

  const publishButtonEventHandler = (e) => {
    e.preventDefault();
    inputFieldsValidation();
  };
  const clearButtonEventHandler = () => {
    const allPostsElementsArr = Array.from(document.querySelectorAll('body div#middle-container div#published-container div.container ul#published-list > li.rpost'));
    allPostsElementsArr.forEach(el => el.remove());
  };
  const editButtonEventHandler = (e) => {
    // console.log(e.currentTarget);
    titleElement.value = e.currentTarget.parentElement.children[0].children[0].textContent;
    categoryElement.value = e.currentTarget.parentElement.children[0].children[1].textContent.replace('Category: ', '');
    contentElement.value = e.currentTarget.parentElement.children[0].children[2].textContent.replace('Content: ', '');
    e.currentTarget.parentElement.remove();
  };
  const approveButtonEventHandler = (e) => {
    const postEl = e.currentTarget.parentElement;
    const approveBtn = e.currentTarget.parentElement.children[1];
    const editBtn = e.currentTarget.parentElement.children[2];
    approveBtn.remove()
    editBtn.remove()
    ulPublishedElement.appendChild(postEl);
  };
  publishButtonElement.addEventListener('click', publishButtonEventHandler);
  clearButtonElement.addEventListener('click', clearButtonEventHandler);
}
