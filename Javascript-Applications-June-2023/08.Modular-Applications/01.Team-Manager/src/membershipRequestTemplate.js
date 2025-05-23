import { approveMembershipRequestByMemberId, declineMembershipRequestByMemberId } from "./api.js";

const membershipRequestTemplate = (html, sortedMembersArr, onApprove, onDecline) => {
    const pendingMembersArr = sortedMembersArr.filter(member => member.status === 'pending');
    if (pendingMembersArr.length) {
        return html`
        <div class="pad-large">
            <h3>Membership Requests</h3>
            <ul class="tm-members">
                ${pendingMembersArr.map(member => html`
                <li>${member.user.username}<a href="/details/team/${member.teamId}/approve" class="tm-control action" data-member-id=${member._id} @click=${onApprove}>Approve</a><a href="/details/team/${member.teamId}/decline" class="tm-control action" data-member-id=${member._id} @click=${onDecline}>Decline</a></li>
                `)} 
            </ul>
        </div>`;
    }
};

function createMembershipRequestTemplate(ctx, sortedMembersArr) {
    return membershipRequestTemplate(ctx.html, sortedMembersArr, onApprove, onDecline);

    async function onApprove(e) {
        e.preventDefault();
        const memberId = e.target.getAttribute('data-member-id');
        // console.log(memberId);
        approveMembershipRequestByMemberId(memberId)
            .then(() => {
                const teamId = ctx.params.id;
                ctx.page.redirect(`/details/team/${teamId}`);
            })
            .catch(err => alert(err.message));
    }

    async function onDecline(e) {
        e.preventDefault();
        const memberId = e.target.getAttribute('data-member-id');
        // console.log(memberId);
        declineMembershipRequestByMemberId(memberId)
            .then(() => {
                const teamId = ctx.params.id;
                ctx.page.redirect(`/details/team/${teamId}`);
            })
            .catch(err => alert(err.message));
    }
}

export {
    createMembershipRequestTemplate
}