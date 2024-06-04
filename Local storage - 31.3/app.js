// localStorage.setItem("num", 5)
// console.log(localStorage.getItem("num"))

// localStorage.setItem("name", "Juda")
// console.log(localStorage.name)

// let arr = [1,"2",{name: "Juda"},4,5];

// localStorage.setItem("arr", JSON.stringify(arr));
// console.log(localStorage.arr)
// console.log(JSON.parse(localStorage.arr))


let count = localStorage.getItem("count") || 0;
const countH1 = document.querySelector('#countH1');
const increaseBtn = document.querySelector('#increaseBtn');
const resetBtn = document.querySelector('#resetBtn');

countH1.innerText = count;

increaseBtn.addEventListener('click', ()=>{
    count++
    countH1.innerText = count;
    localStorage.setItem("count", count);
})
resetBtn.addEventListener('click', ()=>{
    count = 0
    countH1.innerText = count;
    localStorage.setItem("count", count);
})








