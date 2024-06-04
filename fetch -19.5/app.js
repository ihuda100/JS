

const getTodo = () =>{
    const userCard = document.querySelector('#userCard');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) =>{
        userCard.innerHTML = ""
        data.forEach((user) => {

            userCard.innerHTML +=`
            <div class="d-flex justify-content-between sizeWin p-2 border border-1">
            <div class="d-flex flex-column justify-content-between">
                <h4>User name: ${user.username}</h4>
                <h6>Mail: <a href="mailto:${user.email}">${user.email}</a></h6>
                <h6>WebSite: <a href="">${user.website}</a></h6>
            </div>
            <div class="d-flex flex-column justify-content-between align-items-end" >
                <h6>Address:</h6>
                <h6>City: ${user.address.street}</h6>
                <h6>Street: ${user.address.city} </h6>
            </div>
            </div>
            `
        })
        // for(i=0; i<da)
        console.log(data[0].username)
    })
        
    .catch((err) => console.error(err))
} 

getTodo();