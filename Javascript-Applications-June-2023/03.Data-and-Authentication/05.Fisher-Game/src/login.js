window.addEventListener('load', () => {

    const url = 'http://localhost:3030/users/login';
    const formElement = document.querySelector('form#login');
    formElement.addEventListener('submit', onSubmit);
    const logoutButton = document.querySelector('#logout');
    logoutButton.addEventListener('click', onLogout);
    // console.log(logoutButton);

    function loginCheck() {
        const email = localStorage.getItem('email');
        const divGuestElement = document.querySelector('div#guest');
        const divUserElement = document.querySelector('div#user');
        if (email) {
            divGuestElement.style.display = 'none';
            const spanGuestElement = document.querySelector('p.email span');
            spanGuestElement.textContent = email;
        } else {
            divUserElement.style.display = 'none';
        }
    }
    async function onSubmit(e) {
        localStorage.clear();
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData);
        const email = formData.get('email');
        const password = formData.get('password');
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }
        try {
            const response = await fetch(url, options);
            if (response.ok === false) {
                const error = await response.json();
                throw error;
            }
            const data = await response.json();
            const userDataArr = Object.keys(data);
            userDataArr.forEach(prop => {
                localStorage.setItem(prop, data[prop]);
            });
            window.location = './index.html';
        } catch (err) {
            return alert(err.message);
        }
    }
    async function onLogout(e) {
        // e.preventDefault();
        const logoutUrl = 'http://localhost:3030/users/logout';
        const accessToken = localStorage.getItem('accessToken');
        const options = {
            method: 'get',
            headers: {
                'X-Authorization': accessToken,
            }
        };
        try {
            const response = await fetch(logoutUrl, options);
            if (response.ok == false) {
                const error = response;
                throw error;
            }
            localStorage.clear();
            window.location = './index.html';
        } catch (err) {
            return alert(err.message);
        }
    }
    loginCheck()
});