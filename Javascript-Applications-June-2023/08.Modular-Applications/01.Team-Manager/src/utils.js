import { getUserData, hasUser } from "./getUserData.js";

function countMembersPerTeam(teamsArr, membersArr) {
    const countedMembersTeamArr = [...teamsArr];
    teamsArr.forEach((team, idx) => {
        let counter = 0;
        membersArr.forEach(member => {
            if (team._id === member.teamId) {
                counter++;
            }
        });
        countedMembersTeamArr[idx]['members'] = counter;
    });
    // console.log(countedMembersTeamArr);
    return countedMembersTeamArr;
}

function defineRole(membersArr, teamOwnerId) {
    const user = hasUser();
    let member = false;
    let isOwner = false;
    let canLeave = false;
    let canCancel = false;

    const appliedForApproval = (userId, membersArr) => {
        const idx = membersArr.findIndex(member => member._ownerId === userId);
        return membersArr[idx].status === 'pending';
    }

    const approvedMember = (userId, membersArr) => {
        const idx = membersArr.findIndex(member => member._ownerId === userId);
        return membersArr[idx].status === 'member';
    }

    if (user) {
        const { _id } = getUserData();
        member = membersArr.map(member => member._ownerId).includes(_id);
        isOwner = teamOwnerId === _id;
        canLeave = Boolean(member && approvedMember(_id, membersArr) && !isOwner);
        canCancel = Boolean(member && appliedForApproval(_id, membersArr));
    }

    return {
        user,
        member,
        isOwner,
        canJoin: user && !member,
        canLeave,
        canCancel
    }
}

function sortTeamMembersArr(membersArr, teamOwnerId, isOwner) {
    if (isOwner) {
        const ownerIdx = membersArr.findIndex(member => member._ownerId === teamOwnerId);
        return [{ ...membersArr[ownerIdx] }, ...membersArr.filter((_, i) => i !== ownerIdx)];
    }
    return [...membersArr];
}

export {
    countMembersPerTeam,
    defineRole,
    sortTeamMembersArr
}