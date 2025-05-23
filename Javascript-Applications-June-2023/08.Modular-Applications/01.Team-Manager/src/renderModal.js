const createConfirmConfig = (message, onConfirm, onCancel) => {
    return {
        message,
        buttons: [
            {
                href: 'confirm',
                text: 'Confirm',
                event: onConfirm
            },
            {
                href: 'cancel',
                text: 'Cancel',
                event: onCancel
            }
        ]
    }
}

const createErrorConfig = (message, onCancel) => {
    return {
        message,
        buttons: [
            {
                href: 'ok',
                text: 'Ok',
                event: onCancel
            }
        ]
    }
}

const modalTemplate = (modalConfig) => {

    const { message, buttons } = modalConfig;
    // console.log(modalConfig);

    const divOverlay = document.createElement('div');
    divOverlay.classList.add('overlay');

    const divModal = document.createElement('div');
    divModal.classList.add('modal');

    const pEl = document.createElement('p');
    pEl.textContent = message;
    divModal.append(pEl);

    buttons.forEach(btn => {
        const { href, text, event } = btn;
        const anchor = document.createElement('a');
        anchor.setAttribute('href', href);
        anchor.classList.add('action');
        anchor.textContent = text;
        anchor.addEventListener('click', event);
        divModal.appendChild(anchor);
    });

    divOverlay.appendChild(divModal);

    return divOverlay;
}

const boundOnCancel = (ctx) => {
    return onCancel.bind({ ctx });

    function onCancel(e) {
        e.preventDefault();
        ctx.root.querySelectorAll('div.overlay').forEach(modal => modal.remove());
    }
}

function renderConfirmModal(ctx, message, onConfirm) {
    const onCancel = boundOnCancel(ctx);
    const modalConfig = createConfirmConfig(message, onConfirm, onCancel);
    ctx.root.appendChild(modalTemplate(modalConfig));
}

function renderErrorModal(ctx, message) {
    const onCancel = boundOnCancel(ctx);
    const modalConfig = createErrorConfig(message, onCancel);
    // ctx.root.querySelectorAll('div.overlay').forEach(modal => modal.remove());
    ctx.root.appendChild(modalTemplate(modalConfig));
}

export {
    renderConfirmModal,
    renderErrorModal
}