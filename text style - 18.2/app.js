const ele = document.querySelector("#ele");
const bgColor = document.querySelector("#bgColor");
const size = document.querySelector("#size");
const color = document.querySelector("#color");
console.log('size', size)
console.log('hello world')
bgColor.addEventListener("input", () => {
  ele.style.background = bgColor.value;
});

const addToAddClass = () => {
  
  if (size.checked) {
    ele.classList.add("addClass");
  } else {
    ele.classList.remove("addClass");
  }
};
size.addEventListener("change", addToAddClass);

color.addEventListener("input", () => {
  ele.style.color = color.value;
});
