function config(html, render, ctx, next) {
    ctx.html = html;
    ctx.render = render;
    next();
}

export {
    config
}