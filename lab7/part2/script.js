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

    taskList.appendChild(li);

    taskInput.value = "";
  }
}

function markDone(element) {
  let taskElement = element.parentElement;
  taskElement.style.background = "#dff0d8";
  taskElement.style.color = "#4caf50";
}

function deleteTask(element) {
  let taskItem = element.parentElement;
  taskItem.remove();
}
