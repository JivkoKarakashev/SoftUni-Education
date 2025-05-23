import { getUserData } from "./getUserData.js";

const baseUrl = 'http://localhost:3030/data';

async function getAllTeams() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/teams`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getTeamById(id) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/teams/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getTeamsByMemberId(memberId) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/members?where=_ownerId%3D%22${memberId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getAllMembers() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/members?where=status%3D%22member%22`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getAllMembersByTeamId(teamId) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function getMembersByTeamsIds(teamsIds) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/members?where=teamId IN (${teamsIds}) AND status%3D"member"`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function createTeam(name, logoUrl, description) {
    const { accessToken } = getUserData();
    // console.log(name, logoUrl, description);

    if (!name || !logoUrl || !description) {
        throw new Error('All fields are required!');
    } else if (name.length < 4) {
        throw new Error('Name should be at least 4 characters long!');
    } else if (description.length < 10) {
        throw new Error('Description should be at least 10 characters long!');
    }

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, logoUrl, description }),
    }

    const response = await fetch(`${baseUrl}/teams`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function editTeamById(id, name, logoUrl, description) {
    const { accessToken } = getUserData();
    // console.log(name, logoUrl, description);

    if (!name || !logoUrl || !description) {
        throw new Error('All fields are required!');
    } else if (name.length < 4) {
        throw new Error('Name should be at least 4 characters long!');
    } else if (description.length < 10) {
        throw new Error('Description should be at least 10 characters long!');
    }

    const options = {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, logoUrl, description }),
    }

    const response = await fetch(`${baseUrl}/teams/${id}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function createMembershipRequestByTeamId(teamId) {
    const { accessToken } = getUserData();
    // console.log(teamId);

    const options = {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ teamId }),
    }

    const response = await fetch(`${baseUrl}/members`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

async function approveMembershipRequestByMemberId(memberId) {
    const { accessToken } = getUserData();
    // console.log(memberId);

    const options = {
        method: 'PUT',
        headers: {
            'X-Authorization': accessToken,
            'X-Admin': '',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'member' }),
    }

    const response = await fetch(`${baseUrl}/members/${memberId}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

const declineMembershipRequestByMemberId = leaveTeamByMemberId;

const cancelMembershipRequestByMemberId = leaveTeamByMemberId;

const removeMemberById = leaveTeamByMemberId;

async function leaveTeamByMemberId(memberId) {
    const { accessToken } = getUserData();
    // console.log(memberId);

    const options = {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken,
            'X-Admin': '',
            'Content-Type': 'application/json',
        }
    }

    const response = await fetch(`${baseUrl}/members/${memberId}`, options);
    if (response.ok === false) {
        const error = await response.json();
        throw error;
    }
    return await response.json();
}

export {
    getAllTeams,
    getTeamById,
    getTeamsByMemberId,
    getAllMembers,
    getAllMembersByTeamId,
    getMembersByTeamsIds,
    createTeam,
    editTeamById,
    createMembershipRequestByTeamId,
    approveMembershipRequestByMemberId,
    declineMembershipRequestByMemberId,
    cancelMembershipRequestByMemberId,
    removeMemberById,
    leaveTeamByMemberId
}