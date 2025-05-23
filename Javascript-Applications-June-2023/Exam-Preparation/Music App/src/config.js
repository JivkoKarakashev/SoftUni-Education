function configCtx(html, render, root, ctx, next) {
    // console.log(html);
    // console.log(render);
    // console.log(root);
    // console.log(ctx);
    // console.log(next);
    ctx.html = html;
    ctx.render = render;
    ctx.root = root;
    // console.log(ctx);
    next();
}

export {
    configCtx
}