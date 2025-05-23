import { cancelMembershipRequestByMemberId, createMembershipRequestByTeamId, getAllMembersByTeamId, getTeamById, leaveTeamByMemberId } from "./api.js";
import { createFooterTemplate } from "./footerTemplate.js";
import { getUserData } from "./getUserData.js";
import { createMemberTemplate } from "./memberTemplate.js";
import { createMembershipRequestTemplate } from "./membershipRequestTemplate.js";
import { createNavTemplate } from "./navTemplate.js";
import { renderConfirmModal, renderErrorModal } from "./renderModal.js";
import { defineRole, sortTeamMembersArr } from "./utils.js";

const detailsTemplate = (ctx, team, sortedMembersArr, role, onEdit, onJoin, onLeave, onCancelReq) => ctx.html`
<div id="content">
    ${createNavTemplate(ctx)}
    <main>
        <section id="team-home">
            <article class="layout">
                <img src="${team.logoUrl}" class="team-logo left-col">
                <div class="tm-preview">
                    <h2>${team.name}</h2>
                    <p>${team.description}</p>
                    <span class="details">${team.members} Members</span>
                    ${role.user ? ctx.html`
                    <div>
                        ${role.isOwner ? ctx.html`<a href="/details/team/${team._id}/edit" class="action" @click=${onEdit}>Edit team</a>` : null}
                        ${role.canJoin ? ctx.html`<a href="/details/team/${team._id}/join" class="action" @click=${onJoin}>Join team</a>` : null}
                        ${role.canLeave ? ctx.html`<a href="/details/team/${team._id}/leave" class="action invert" @click=${onLeave}>Leave team</a>` : null}
                        ${role.canCancel ? ctx.html`Membership pending. <a href="/details/team/${team._id}/cancel" @click=${onCancelReq}>Cancel request</a>` : null}
                    </div>`
        : null}
                </div>
                <div class="pad-large">
                    <h3>Members</h3>
                    <ul class="tm-members">
                        ${sortedMembersArr.map(member => createMemberTemplate(ctx, role, member, team))}
                    </ul>
                </div>
                ${role.isOwner ? createMembershipRequestTemplate(ctx, sortedMembersArr) : null}
            </article>
        </section>
    </main>
    ${createFooterTemplate(ctx.html)}
</div>`;

function renderDetailsPage(ctx) {
    const id = ctx.params.id;
    // console.log(id);
    Promise.all([getTeamById(id), getAllMembersByTeamId(id)])
        .then(([team, membersArr]) => {
            // console.log(team, membersArr);
            team['members'] = membersArr.filter(member => member.status === 'member').length;
            const role = defineRole(membersArr, team._ownerId);
            // console.log(role);
            const sortedMembersArr = sortTeamMembersArr(membersArr, team._ownerId, role.isOwner);
            // console.log(sortedMembersArr);
            ctx.render(detailsTemplate(ctx, team, sortedMembersArr, role, onEdit, onJoin, onLeave.bind(null, membersArr), onCancelReq.bind(null, membersArr)), ctx.root);
        })
        .catch(err => {
            alert(err.message);
        });

    function onEdit(e) {
        e.preventDefault();
        ctx.page.redirect(`/details/team/${id}/edit`);
    }

    async function onJoin(e) {
        e.preventDefault();
        createMembershipRequestByTeamId(id)
            .then(() => ctx.page.redirect(`/details/team/${id}`))
            .catch(err => alert(err.message));
    }

    async function onLeave(membersArr, e) {
        e.preventDefault();

        renderConfirmModal(ctx, 'You are about to leave the team...', onConfirm);

        function onConfirm(e) {
            e.preventDefault();
            const { email } = getUserData();
            const memberId = membersArr.filter(member => member.user.email === email).at(0)['_id'];
            leaveTeamByMemberId(memberId)
                .then(() => {
                    ctx.root.querySelector('div.overlay').remove();
                    ctx.page.redirect(`/details/team/${id}`);
                })
                .catch(err => renderErrorModal(ctx, err.message));
        }
    }

    async function onCancelReq(membersArr, e) {
        e.preventDefault();

        renderConfirmModal(ctx, 'You are about to cancel your membership request..', onConfirm);

        async function onConfirm(e) {
            e.preventDefault();

            const { email } = getUserData();
            const memberId = membersArr.filter(member => member.user.email === email).at(0)['_id'];
            cancelMembershipRequestByMemberId(memberId)
                .then(() => {
                    ctx.root.querySelector('div.overlay').remove();
                    ctx.page.redirect(`/details/team/${id}`);
                })
                .catch(err => {
                    renderErrorModal(ctx, err.message);
                });
        }

    }

}

export {
    renderDetailsPage
}