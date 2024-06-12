const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const postRequest = async () => {
    try {
        const res = await fetch(BASE_URL,{
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 2,
                title: 'New one',
                body: 'New one'
            })
        })
        const data = await res.json()
        console.log(data)

    } catch (error) {
        console.error(error);
    }
}


const putRequest = async (id) => {
    try {
        const res = await fetch (`${BASE_URL}/${id}`,{
            method: 'PUT',
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userId: '4',
                title: "enim quo cumque",
                body: "update"
            })
        }) 
        const data = await res.json()  
        console.log(data)
    } catch (error) {
        console.error(error);
    }
}
const deleteRequest = async (id) => {
    try {
        const res = await fetch (`${BASE_URL}/${id}`,{
            method: 'DELETE',
        }) 
        const data = await res.json()  
        console.log(data)
    } catch (error) {
        console.error(error);
    }
}
deleteRequest(40)
