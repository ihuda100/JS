const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

const Submit = document.querySelector('#Submit');
const color = document.querySelector('#color');

Submit.addEventListener('click', ()=>{
    color.style.background = `rgb(${red.value},${green.value},${blue.value})`
})
