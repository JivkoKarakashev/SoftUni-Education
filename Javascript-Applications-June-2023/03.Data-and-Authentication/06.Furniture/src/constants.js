import { onLogin, onRegister } from "./auth.js";
import { onCreateProduct } from "./eventHandlers.js";

const baseUrl = 'http://localhost:3030';

const rootEl = document.querySelector('.col-md-12');
const navEL = document.querySelector('header > nav');

const publishingFormConfig = {
    form: {
        formAttributes: {
            action: '',
            method: 'post'
        },
        eventListener: onCreateProduct
    },
    labels: [
        {
            labelText: 'Name: ',
            inputAttributes: {
                type: 'text',
                name: 'name'
            }
        },
        {
            labelText: 'Price: ',
            inputAttributes: {
                type: 'text',
                name: 'price'
            }
        },
        {
            labelText: 'Factor: ',
            inputAttributes: {
                type: 'text',
                name: 'factor'
            }
        },
        {
            labelText: 'Img: ',
            inputAttributes: {
                type: 'text',
                name: 'img'
            }
        }

    ],
    button: {
        buttonText: 'Create'
    }
}

const tableHeadersText = [
    'Image',
    'Name',
    'Price',
    'Decoration factor',
    'Mark'
];

const registerFormConfig = {
    form: {
        formAttributes: {
            action: './register',
            method: 'post'
        },
        eventListener: onRegister
    },
    labels: [
        {
            labelText: 'E-mail: ',
            inputAttributes: {
                type: 'text',
                name: 'email'
            }
        },
        {
            labelText: 'Password: ',
            inputAttributes: {
                type: 'password',
                name: 'password'
            }
        },
        {
            labelText: 'Repeat: ',
            inputAttributes: {
                type: 'password',
                name: 'rePass'
            }
        }

    ],
    button: {
        buttonText: 'Register'
    }
}

const loginFormConfig = {
    form: {
        formAttributes: {
            action: './login',
            method: 'post'
        },
        eventListener: onLogin
    },
    labels: [
        {
            labelText: 'E-mail: ',
            inputAttributes: {
                type: 'text',
                name: 'email'
            }
        },
        {
            labelText: 'Password: ',
            inputAttributes: {
                type: 'password',
                name: 'password'
            }
        }
    ],
    button: {
        buttonText: 'Login'
    }
}

export {
    baseUrl,
    rootEl,
    navEL,
    publishingFormConfig,
    tableHeadersText,
    registerFormConfig,
    loginFormConfig
}