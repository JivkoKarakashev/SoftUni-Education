import { login } from "./api.js";

const loginTemplate = (html, onFormSubmit) => html`
<div class="container home wrapper  my-md-5 pl-md-5">
    <div class="row-form d-md-flex flex-mb-equal ">
        <div class="col-md-4">
            <img class="responsive" src="../images/idea.png" alt="">
        </div>
        <form class="form-user col-md-7" @submit=${onFormSubmit}>
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Login</h1>
            </div>
            <div class="form-label-group">
                <label for="inputEmail">Email</label>
                <input type="text" id="inputEmail" name="email" class="form-control" placeholder="Email" required=""
                    autofocus="">
            </div>
            <div class="form-label-group">
                <label for="inputPassword">Password</label>
                <input type="password" id="inputPassword" name="password" class="form-control"
                    placeholder="Password" required="">
            </div>
            <div class="text-center mb-4 text-center">
                <button class="btn btn-lg btn-dark btn-block" type="submit">Sign In</button>
                <p class="alreadyUser"> Don't have account? Then just
                    <a href="/register">Sign-Up</a>!
                </p>
            </div>
            <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
        </form>
    </div>
</div>`;

const clearLoginForm = (formElRef) => formElRef.reset();

function renderLoginPage(ctx) {
    ctx.render(loginTemplate(ctx.html, onFormSubmit), ctx.root);
    // console.log(ctx['path']);

    async function onFormSubmit(e) {
        // console.log(e.currentTarget);
        const formRef = e.currentTarget;
        e.preventDefault();
        // const inputsArr = Array.from(e.currentTarget.querySelectorAll('input'));
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(email, password);
        if (!email || !password) {
            return alert('Email and Password are required!');
        }
        login(email, password)
            .then(userData => {
                // console.log(userData);
                const serializedUserData = JSON.stringify(userData);
                localStorage.setItem('userData', serializedUserData);
                clearLoginForm(formRef);
                ctx.page.redirect('/');
            })
            .catch(err => alert(err.message));
    }
};

export {
    renderLoginPage
}