const getTaxi = () => new Promise((res, rej) => {
    setTimeout(() => {
        const isFound = true;
        if (!isFound) rej(new Error("Taxi not found"))

        const data = {
            tel: "0123456789",
            name: "Name"
        }

        res(data)
    }, 2000)
});

const waitForTaxi = () => new Promise((res, rej) => {
    setTimeout(() => {
        res("Taxi arrived")
    }, 1000)
})

const getToDestination = () => new Promise((res, rej) => {
    setTimeout(() => {
        res("End of drive")
    }, 3000)
})

const getToHome = async () =>{
    try{
        let data = await getTaxi();
        console.log(data);
        data = await waitForTaxi();
        console.log(data);
        data = await getToDestination(); 
        console.log(data);
    } catch(Error){
        console.error(Error);
    } finally {
        console.log("Rate 5 star")
    }
}
getToHome()