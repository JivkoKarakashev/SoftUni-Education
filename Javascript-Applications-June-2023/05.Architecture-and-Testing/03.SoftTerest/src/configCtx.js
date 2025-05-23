function configCtx(rootElRef, htmlRef, renderRef, ctx, next) {
    // console.log(rootElRef);
    // console.log(htmlRef);
    // console.log(renderRef);
    // console.log(ctx);
    // console.log(next);
    ctx.root = rootElRef;
    ctx.html = htmlRef;
    ctx.render = renderRef;
    next();
}

export {
    configCtx
}