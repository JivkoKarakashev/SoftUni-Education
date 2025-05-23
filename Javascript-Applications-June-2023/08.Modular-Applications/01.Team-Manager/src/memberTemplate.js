import { removeMemberById } from "./api.js";
// import { createModalTemplate } from "./renderModal.js";

const memberTemplate = (html, role, member, team, onRemove) => {
    if (member.status === 'pending') {
        return;
    }

    if (member._ownerId === team._ownerId || role.isOwner === false) {
        return html`<li>${member.user.username}</li>`;
    }
    else {
        return html`<li>${member.user.username}<a href="/details/team/${team._id}/remove" class="tm-control action" data-member-id=${member._id} @click=${onRemove}>Remove from team</a></li>`;
    };
}

function createMemberTemplate(ctx, role, member, team) {

    return memberTemplate(ctx.html, role, member, team, onRemove);

    async function onRemove(e) {
        e.preventDefault();

        const boundOnConfirm = onConfirm.bind({ event: e });

        const confirmConfig = {
            message: 'You are about to remove member..',
            buttons: [
                {
                    href: 'confirm',
                    text: 'Confirm',
                    event: boundOnConfirm
                },
                {
                    href: 'cancel',
                    text: 'Cancel',
                    event: onCancel
                }
            ]
        };

        ctx.root.appendChild(createModalTemplate(confirmConfig));

        async function onConfirm(e) {
            e.preventDefault();
            const memberId = this.event.target.getAttribute('data-member-id');
            // console.log(memberId);

            removeMemberById(memberId)
                .then(() => {
                    ctx.root.querySelector('div.overlay').remove();
                    ctx.page.redirect(`/details/team/${team._id}`);
                })
                .catch(err => {
                    // alert(err.message);
                    const errorConfig = {
                        message: err.message,
                        buttons: [
                            {
                                href: 'ok',
                                text: 'Ok',
                                event: onCancel
                            }
                        ]
                    };
                    ctx.root.querySelectorAll('div.overlay').forEach(modal => modal.remove());
                    ctx.root.appendChild(createModalTemplate(errorConfig));
                });
        }

        function onCancel(e) {
            e.preventDefault();
            ctx.root.querySelector('div.overlay').remove();
        }

    }
}

export {
    createMemberTemplate
}