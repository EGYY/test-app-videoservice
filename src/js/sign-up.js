const signUp = () => {
    const form = document.querySelector('#sign-up-form');
    const signBtn = document.querySelector('#sign-btn');
    const loggedName = document.querySelector('.logged-person');
    const modal = document.querySelector('#sign-up-modal');
    const overlay = document.querySelector('#overlay');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const loggedName = e.target.login.value;
        const password = e.target.password.value;

        const data = {
            login: loggedName,
            password
        }

        localStorage.setItem('personData', JSON.stringify(data));
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        renderLoggedPerson();

    });

    function renderLoggedPerson() {
        signBtn.style.display = 'none';
        const namePerson = JSON.parse(localStorage.getItem('personData')).login;

        const msg = `<div id="name-person">${namePerson}</div> <a id="logout">Выйти</a>`
        loggedName.innerHTML = msg;

        const logout = document.querySelector('#logout');
        const namePersonDiv = document.querySelector('#name-person');

        logout.addEventListener('click', (e) => {
            localStorage.removeItem('personData');
            renderSignBtn();
        });

        namePersonDiv.addEventListener('click', (e) => {
            e.target.innerHTML = `<input id='change-name' type="text" value="${namePerson}">`;
            console.log(e.target);
            const new_name = document.querySelector('#change-name');
            new_name.addEventListener('focusout', (e) => {
                const old_data = JSON.parse(localStorage.getItem('personData'));
                old_data.login = e.target.value;
                localStorage.setItem('personData', JSON.stringify(old_data));
                namePersonDiv.innerHTML = `${e.target.value}`;
                renderLoggedPerson();
            })
        });
    }

    function renderSignBtn() {
        localStorage.clear();
        loggedName.innerHTML = ''
        signBtn.style.display = 'flex';
    }


    const data = localStorage.getItem('personData');

    data ? renderLoggedPerson() : renderSignBtn();
}

export default signUp;