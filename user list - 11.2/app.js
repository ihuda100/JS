import usersArr from './json/users.json' assert{type: 'json'}

const list = document.querySelector('#list');

const addUser = (user) =>{
    list.innerHTML += `
    <li class="d-flex p-2">
        <img
            class="me-2 rounded-4"
            src="${user.image}"
            alt="profile"
        />
        <div>
            <h4><b>${user.name}</b></h4>
            <h5>${user.phone}</h5>
        </div>
    </li>
    `
}

usersArr.forEach(addUser);