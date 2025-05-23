import { render } from '../node_modules/lit-html/lit-html.js';

const mainElement = document.querySelector('main');

export function addRender(ctx, next) {
    // console.log(ctx['pathname']);
    const pathname = ctx['pathname'];
    // console.log(pathname);
    ctx.render = renderViews(pathname);
    // console.log(ctx.render);
    next();
}

function renderViews(path) {
    // console.log(path);
    const renderView = {
        // '/': (content) => render(content, divContainerElement),
        // '/login': (content) => render(content, divContainerElement),
        // '/create': (content) => render(content, divContainerElement),
        // '/my-furniture': (content) => render(content, divContainerElement),
        [path]: (content) => render(content, mainElement),
    }
    // console.log(renderView[path])
    return renderView[path];
}