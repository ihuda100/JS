const BASE_URL = "https://reqres.in/api/users/";
document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
});
const idInput = document.querySelector("#idInput");
const FirstNameInput = document.querySelector("#FirstNameInput");
const LastNemeInput = document.querySelector("#LastNemeInput");
const emailInput = document.querySelector("#emailInput");
const avatarInput = document.querySelector("#avatarInput");

const messageP = document.querySelector("#messageP");

const fetchBtn = document.querySelector("#fetchBtn");
const createBtn = document.querySelector("#createBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const updateBtn = document.querySelector("#updateBtn");
// console.log(updateBtn)



fetchBtn.addEventListener("click", async () => {
  let id = idInput.value;
  try {
    let { first_name, last_name, email, avatar } = await getRequest(id);
    FirstNameInput.value = first_name;
    LastNemeInput.value = last_name;
    emailInput.value = email;
    avatarInput.value = avatar;
  } catch (error) {
    console.error(error);
  }
});
createBtn.addEventListener("click", () => {
        postRequest();
});
deleteBtn.addEventListener('click', () => {
    let id = idInput.value;
    deleteRequest(id);
})
updateBtn.addEventListener('click', () => {
  let id = idInput.value;
  putRequest(id);
})
// const getRequest = async (id) => {
//     try {
//         const res = await fetch(`https://reqres.in/api/users/${id}`)
//         let {data} = await res.json();
//         return data;
//     } catch (error) {
//     }
// }
const getRequest = async (id) => {
  try {
    messageP.innerHTML = "";
    const {data: { data }} = await axios.get(`${BASE_URL}${id}`);
    if (id == "") throw new Error("User ID is required");
    return data;
  } catch (error) {
    console.error(error);
    if (error.message) messageP.innerHTML = error.message;
  }
};
const postRequest = async () => {
  try {
    const {data:{data}}  = await axios.post(BASE_URL, {
      first_name: FirstNameInput.value,
      last_name: LastNemeInput.value,
      email: emailInput.value,
      avatar: avatarInput.value,
    });
    let edit = 'create'
    fieldValidition(edit)
    // if(FirstNameInput.value == '' || LastNemeInput.value == '' || emailInput.value == '' || avatarInput.value == ''){
    //     throw new Error('Can not create user with one field are empty');
    // }
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const deleteRequest = async (id) => {
  try {
    const data = await axios.delete(`${BASE_URL}${id}`)
    let edit = 'delete'
    findIdValidition(edit)
    if(id < 1 || id > 12) throw new Error('ID not found for delete')
    console.log('delete user');
    console.log(data)
  } catch (error) {
    console.error(error);
  }
};

const putRequest = async (id) => {
  try {
    const {data} = await axios.put(`${BASE_URL}${id}`,{
      first_name: FirstNameInput.value,
      last_name: LastNemeInput.value,
      email: emailInput.value,
      avatar: avatarInput.value,
    })
    let edit = 'update'
    fieldValidition(edit)
    findIdValidition(edit)
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

const fieldValidition = (edit) => {
  if(FirstNameInput.value == '' || LastNemeInput.value == '' || emailInput.value == '' || avatarInput.value == ''){
    throw new Error(`Can not ${edit} user with one field are empty`);
  }
}
const findIdValidition = (edit) => {
  if(id < 1 || id > 12) throw new Error(`ID not found for ${edit}`)
}
