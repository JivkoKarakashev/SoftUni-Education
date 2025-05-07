const url = 'http://localhost:3030/jsonstore/collections/students';
const formElement = document.querySelector('form');
const tbodyElement = document.querySelector('tbody');
// console.log(tbodyElement);
formElement.addEventListener('submit', onSubmit);

const tableRowCreator = (studentObj) => {
    const studentInfoArr = Object.values(studentObj);
    const id = studentInfoArr.pop();
    // console.log(studentInfoArr);
    const trEl = document.createElement('tr');
    studentInfoArr.forEach(prop => {
        const tdEl = document.createElement('td');
        tdEl.textContent = prop;
        trEl.appendChild(tdEl);
    });
    tbodyElement.appendChild(trEl);
};
async function onSubmit(e) {
    e.preventDefault();
    let { firstName, lastName, facultyNumber, grade } = Object.fromEntries(new FormData(e.target).entries());
    if (!firstName || !lastName) {
        return;
    }
    if (isNaN(facultyNumber) || isNaN(grade)) {
        return;
    }
    // console.log(facultyNumber);

    const result = await request(url, { firstName, lastName, facultyNumber, grade }, 'post');
    if (result === 'NetworkError when attempting to fetch resource.') {
        return;
    }
    loadTable();
}
async function loadTable() {
    const studentsObjsArray = Object.values(await request(url));
    // console.log(studentsObjsArray);
    studentsObjsArray.forEach(studentObj => {
        tableRowCreator(studentObj);
    });
}

async function request(url, body, method) {
    try {
        let response;
        if (body && method) {
            const options = {
                method: method,
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(body),
            }
            response = await fetch(url, options);
        } else {
            response = await fetch(url);
        }
        if (!response.ok || response.status !== 200) {
            throw new Error();
        }
        
    } catch (err) {
        return err.message;
    }
    const data = await response.json();
    return data;
}
