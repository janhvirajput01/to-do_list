const add = document.getElementById("add");
const task = document.getElementById("task-container");
const input = document.getElementById("input-task");

add.addEventListener("click", function () {
  let newTask = document.createElement("div");
  newTask.classList.add("newTask");

  let li = document.createElement("li");
  li.innerText = `${input.value}`;
  newTask.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.classList.add("check-btn");
  checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  newTask.append(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  newTask.append(deleteBtn);

  if (input.value === "") {
    alert("Please Enter a Task");
  } else {
    task.appendChild(newTask);
  }
  input.value = "";

  checkBtn.addEventListener("click", function () {
    checkBtn.parentElement.classList.toggle("line-through");
  });

  deleteBtn.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
