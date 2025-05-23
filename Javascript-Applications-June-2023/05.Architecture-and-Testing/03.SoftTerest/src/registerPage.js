import { register } from './api.js';

const registerTemplate = (html, onFormSubmit) => html`
<div class="container home wrapper  my-md-5 pl-md-5">
    <div class="row-form d-md-flex flex-mb-equal ">
        <div class="col-md-4">
            <img class="responsive" src="../images/idea.png" alt="">
        </div>
        <form class="form-user col-md-7" @submit=${onFormSubmit}>
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            </div>
            <div class="form-label-group">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" class="form-control" placeholder="Email" required=""
                    autofocus="">
            </div>
            <div class="form-label-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" class="form-control"
                    placeholder="Password" required="">
            </div>
            <div class="form-label-group">
                <label for="inputRepeatPassword">Repeat Password</label>
                <input type="password" id="inputRepeatPassword" name="repeatPassword" class="form-control"
                    placeholder="Repeat Password" required="">
            </div>
            <button class="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>
            <div class="text-center mb-4">
                <p class="alreadyUser"> Don't have account? Then just
                    <a href="/login">Sign-In</a>!
                </p>
            </div>
            <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
        </form>
    </div>
</div>`;

function renderRegisterPage(ctx) {
    ctx.render(registerTemplate(ctx.html, onFormSubmit), ctx.root);
    // console.log(ctx['path']);

    async function onFormSubmit(e) {
        // console.log(e);
        e.preventDefault();
        const { email, password, repeatPassword } = Object.fromEntries(new FormData(e.currentTarget).entries());
        // console.log(email, password, repeatPassword);
        if (!email || !password) {
            return alert('Email, Password and Repeat Password are required!');
        } else if (email.length < 3 || password.length < 3) {
            return alert('Email, Password and Repeat Password should be at least 3 characters long!');
        } else if (password !== repeatPassword) {
            return alert('Repeat Password should be equal to the Password!');
        }

        register(email, password, repeatPassword)
            .then(userData => {
                // console.log(userData);
                const serializedUserData = JSON.stringify(userData);
                localStorage.setItem('userData', serializedUserData);
                ctx.page.redirect('/');
            })
            .catch(err => alert(err.message));
    }
};


export {
    renderRegisterPage
}