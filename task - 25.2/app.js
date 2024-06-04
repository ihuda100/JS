const taskInput = document.querySelector("#taskInput");

taskInput.addEventListener("input", () => {
  console.log(taskInput.value);
});

let globalTasks = [
  { text: "Buy groceries", completed: false },
  { text: "Do laundry", completed: true },
  { text: "Study JavaScript", completed: false },
];

const list = document.querySelector("#list");
const displayTasks = (tasks) => {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <h6 class="px-1">${task.text}</h6>
              <h6>${task.completed ? "Complete" : "InComplete"}</h6>
            </div>
            <div>
              <button onclick="completeTask(${index})">Complete</button>
              <button onclick="removeTask(${index})">Remove</button>
            </div>
          </li>`;
  });
};

const completeTask = (index) => {
  globalTasks[index].completed = globalTasks[index].completed = true;
  displayTasks(globalTasks);
};
const removeTask = (index) => {
  globalTasks.splice(index, 1);
  displayTasks(globalTasks);
};

const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
  let newTask = { text: taskInput.value, completed: false };
  globalTasks.push(newTask);
  taskInput.value = "";
  displayTasks(globalTasks);
});


const showCompletedBtn = document.querySelector("#showCompletedBtn");
showCompletedBtn.addEventListener("click", () => {
  displayTasks(globalTasks.filter((task) => task.completed != false));
});

const showAll = document.querySelector("#showAll");
showAll.addEventListener("click", () => {
  displayTasks(globalTasks);
});

const del = document.querySelector('#del');
del.addEventListener('click', ()=>{
  globalTasks = globalTasks.filter((task) => task.completed == false);
  displayTasks(globalTasks);

})

displayTasks(globalTasks);
