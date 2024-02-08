document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    let taskName = taskInput.value;

    let li = document.createElement("li");
    li.innerHTML = `
      <span class="task-name">${taskName}</span>
      <span class="done" onclick="markDone(this)">Done</span>
      <span class="delete" onclick="deleteTask(this)">Delete</span>
    `;

    li.setAttribute("data-status", "undone");

    taskList.appendChild(li);

    saveTasks();

    taskInput.value = "";
  }
}

function markDone(element) {
  let taskElement = element.parentElement;
  taskElement.style.background = "#dff0d8";
  taskElement.style.color = "#4caf50";

  taskElement.setAttribute("data-status", "done");

  saveTasks();
}

function deleteTask(element) {
  let taskItem = element.parentElement;
  taskItem.remove();

  saveTasks();
}

function saveTasks() {
  let taskList = document.getElementById("taskList");
  let tasks = taskList.innerHTML;

  localStorage.setItem("tasks", tasks);
}

function loadTasks() {
  let taskList = document.getElementById("taskList");

  let savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    taskList.innerHTML = savedTasks;

    let tasks = taskList.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
      let status = tasks[i].getAttribute("data-status");
      if (status === "done") {
        tasks[i].style.background = "#dff0d8";
        tasks[i].style.color = "#4caf50";
      }
    }
  }
}
