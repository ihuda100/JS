const pTime = document.querySelector("#pTime");
let d = new Date();
pTime.innerHTML = d.toLocaleTimeString();

let intervalId = setInterval(() => {
  d = new Date();
  pTime.innerHTML = d.toLocaleTimeString();
}, 1000);

const btnStart = document.querySelector("#btnStart");
btnStart.addEventListener("click", ()=> {
  intervalId = setInterval(() => {
    d = new Date();
    pTime.innerHTML = d.toLocaleTimeString();
  }, 1000);
});

const btnStop = document.querySelector("#btnStop");
btnStop.addEventListener("click", () => {
  clearInterval(intervalId);
});

const btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", () => {
  clearInterval(intervalId);
  pTime.innerHTML = '00:00:00 AM'
});
