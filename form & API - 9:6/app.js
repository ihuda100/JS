document.querySelector('#form').addEventListener("submit", (e)=>{e.preventDefault()})
const idInput = document.querySelector('#idInput');
const FirstNameInput = document.querySelector('#FirstNameInput');
const LastNemeInput = document.querySelector('#LastNemeInput');
const emailInput = document.querySelector('#emailInput');
const avatarInput = document.querySelector('#avatarInput');

const messageP = document.querySelector('#messageP');

const fetchBtn = document.querySelector('#fetchBtn');
const createBtn = document.querySelector('#createBtn');






fetchBtn.addEventListener('click', async()=>{
    let id = idInput.value
    try {
        let {first_name, last_name, email, avatar} = await getRequest(id)
        FirstNameInput.value = first_name;
        LastNemeInput.value = last_name;
        emailInput.value = email;
        avatarInput.value = avatar
    } catch (error) {
        console.error(error);
    }
    
})
// const getRequest = async (id) => {
//     try {
//         const res = await fetch(`https://reqres.in/api/users/${id}`)
//         let {data} = await res.json();
//         return data; 
//     } catch (error) {
//     }  
// }
const getRequest = async(id)=>{ 
    try {
        messageP.innerHTML = ''
        const {data:{data}} = await axios.get(`https://reqres.in/api/users/${id}`)
        if (id == '') throw new Error("id is requier")
        return data; 

    } catch (error) {
        console.error(error);
        if(error.message) messageP.innerHTML = error.message
    }
} 
const postRequest = async()=>{ 
    try {
        const {data:{data}} = await axios.get(`https://reqres.in/api/users/`, {
            first_name: FirstNameInput.value ,
            last_name: LastNemeInput.value,
            email: emailInput.value, 
            avatar: avatarInput.value 
          })
          
    } catch (error) {
        console.error(error);
    }
} 
postRequest()


