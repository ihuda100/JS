const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const usersDiv = document.querySelector('#usersDiv');
const selectBtn = document.querySelector('#selectBtn');
const pageInput = document.querySelector('#pageInput');
const pageNum = document.querySelector('#pageNum');
let page = 1;
let manyPages;
let perPage;


selectBtn.addEventListener('click', ()=>{
    perPage = pageInput.value
    pageInput.value = ''
    page = 1;
    getUser(page, perPage)
})
nextBtn.addEventListener('click', ()=>{
    page++;
    if(page % (manyPages+1) == 0) page=1;
    getUser(page, perPage)
})
prevBtn.addEventListener('click', ()=>{
    page--;
    if(page == 0) page=2;
    getUser(page, perPage)
})
// Math.ceil(12/manyPages+1)
const getUser = async (page, perPage)=>{
    try{
        let res = await fetch(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`);
        let user = await res.json();
        manyPages = user.total_pages;
        pageNum.innerHTML = page;
        let userList = user.data;
        usersDiv.innerHTML = ''
        userList.forEach(({avatar, email, first_name}) => {
            usersDiv.innerHTML += `
            <div class="text-center">
                <h4><strong>${first_name}</strong></h4>
                <h5>${email}</h5>
                <img src="${avatar}" alt="photos" >
            </div>
            `   
        });
    }catch(err){
        console.error(err);
    }

}
getUser(page, perPage)