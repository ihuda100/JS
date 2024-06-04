const userId = document.querySelector('#userId');
const submitBtn = document.querySelector('#submitBtn');
const postList = document.querySelector('#postList');
let id;

submitBtn.addEventListener('click', ()=>{
    id = userId.value;
    getPost()
})

const getPost = async () => {
  try {
    if(id == undefined || id < 1 || id > 2) throw console.error("it's not valid");
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    let post = await response.json();
    postList.innerHTML = ""
    post.forEach(({body,title}) => {
        console.log(title)
        postList.innerHTML += `
        <div class="border border-1 rounded-3">
          <p class="pb-2"><strong>Title:</strong> ${title}</p>
          <p><strong>Body:</strong> ${body}</p>
        </div>
        `  
    });
    console.log(post);
  } catch(err) {
    console.error(err);
  }
};
