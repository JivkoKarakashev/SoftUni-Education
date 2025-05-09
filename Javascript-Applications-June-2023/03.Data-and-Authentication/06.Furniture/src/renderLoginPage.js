import { loginFormConfig, registerFormConfig, rootEl } from "./constants.js";
import { createFormElement, createH2Element, createHrElement } from "./domElementsFactory.js";
import { switchActiveButtons } from "./updateNav.js";

function renderLoginPage(event) {
    event.preventDefault();
    switchActiveButtons('login');
    const h2RegisterEl = createH2Element('Register');
    const registerForm = createFormElement(registerFormConfig);
    const hrEl = createHrElement();
    const h2LoginEl = createH2Element('Login');
    const loginForm = createFormElement(loginFormConfig);
    rootEl.replaceChildren(h2RegisterEl, registerForm, hrEl, h2LoginEl, loginForm);
}

export {
    renderLoginPage
}