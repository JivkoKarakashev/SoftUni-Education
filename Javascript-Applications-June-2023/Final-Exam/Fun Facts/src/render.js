import { render } from '../node_modules/lit-html/lit-html.js';

// const allViewsArray = Array.from(document.querySelectorAll('div#container > :nth-child(1n + 3)'));
// allViewsArray.pop();
const mainElement = document.querySelector('main');

export function addRender(ctx, next) {
    // console.log(ctx['pathname']);
    // allViewsArray.forEach(view => view.remove());
    // console.log(allViewsArray);
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