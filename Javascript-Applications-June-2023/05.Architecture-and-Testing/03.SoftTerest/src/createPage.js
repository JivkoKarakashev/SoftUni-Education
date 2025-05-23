import { createIdea } from "./api.js";
import { createNavTemplate, switchActiveLink } from "./navTemplate.js";

const createTemplate = (html, onFormSubmit) => html`
${createNavTemplate(html)}
<div class="container home wrapper  my-md-5 pl-md-5">
    <div class=" d-md-flex flex-mb-equal ">
        <div class="col-md-6">
            <img class="responsive-ideas create" src="../images/creativity_painted_face.jpg" alt="">
        </div>
        <form class="form-idea col-md-5" action="#/create" method="post" @submit=${onFormSubmit}>
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
            </div>
            <div class="form-label-group">
                <label for="ideaTitle">Title</label>
                <input type="text" id="ideaTitle" name="title" class="form-control" placeholder="What is your idea?"
                    required="" autofocus="">
            </div>
            <div class="form-label-group">
                <label for="ideaDescription">Description</label>
                <textarea type="text" name="description" class="form-control" placeholder="Description"
                    required=""></textarea>
            </div>
            <div class="form-label-group">
                <label for="inputURL">Add Image</label>
                <input type="text" id="inputURL" name="imageURL" class="form-control" placeholder="Image URL"
                    required="">
            </div>
            <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>
            <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
        </form>
    </div>
</div>`;

function renderCreatePage(ctx) {
    ctx.render(createTemplate(ctx.html, onFormSubmit), ctx.root);
    switchActiveLink('create', ctx.root);

    async function onFormSubmit(e) {
        // console.log(e.currentTarget);
        e.preventDefault();
        const formRef = e.currentTarget;
        const { title, description, imageURL } = Object.fromEntries(new FormData(e.currentTarget).entries());
        const img = imageURL;
        // console.log(title, description, imageURL);
        if (!title || !description || !imageURL) {
            return alert('Title, Description and ImageURL are required!');
        } else if (title.length < 6) {
            return alert('Title should be at least 6 characters long!');
        } else if (description.length < 10) {
            return alert('Description should be at least 10 characters long!');
        } else if (imageURL.length < 5) {
            return alert('ImageUrl should be at least 5 characters long!');
        }
        createIdea(title, description, img)
            .then(idea => {
                console.log(idea);
                clearCreateForm(formRef);
                ctx.page.redirect('/ideas');
            })
            .catch(err => alert(err.message));
    }
}

const clearCreateForm = (formElRef) => formElRef.reset();

export {
    renderCreatePage
}