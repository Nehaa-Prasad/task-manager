const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

addBtn.addEventListener("click", addTask);

function addTask(){

const taskText = taskInput.value.trim();

if(taskText === "") return;

const task = {
text: taskText,
completed: false
};

tasks.push(task);

taskInput.value = "";

renderTasks();

}

function renderTasks(){

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

const span = document.createElement("span");
span.textContent = task.text;

span.addEventListener("click",()=>{
tasks[index].completed = !tasks[index].completed;
renderTasks();
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.classList.add("delete-btn");

deleteBtn.addEventListener("click",()=>{
tasks.splice(index,1);
renderTasks();
});

li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);

});
localStorage.setItem("tasks", JSON.stringify(tasks));
}