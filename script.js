

let taskInput = document.querySelector("#taskInput");
let dateInput = document.querySelector("#dateInput");
let addBtn = document.querySelector("#addBtn");
let taskTable = document.querySelector("#taskTable");

const addTask = (e) => { 
  e.preventDefault()

 if(taskInput.value == "" && dateInput.value == "") {
  window.alert("input task and date")
 } else if(taskInput.value == "") {
  window.alert("input task")
 } else if(dateInput.value == "") {
  window.alert("choose date")
 } else {

let taskDiv = document.createElement("div");
let myTasks = document.createElement("input")
let dateTasks = document.createElement("input");
let editBtn = document.createElement("button");
let delBtn = document.createElement("button");
let saveBtn = document.createElement("button")

delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
saveBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;

saveBtn.style.display = "none"

editBtn.style.padding = "8px 8px 8px 8px"
editBtn.style.fontSize = "15px"
editBtn.style.color = "white"
editBtn.style.backgroundColor = "rgb(28,28,162)"
editBtn.style.border = "none"
editBtn.style.borderRadius = "3px"

delBtn.style.padding = "8px 8px 8px 8px"
delBtn.style.fontSize = "15px"
delBtn.style.color = "white"
delBtn.style.margin = "0 3px 0 3px"
delBtn.style.backgroundColor = "rgb(28,28,162)"
delBtn.style.border = "none"
delBtn.style.borderRadius = "3px"

saveBtn.style.padding = "8px 8px 8px 8px"
saveBtn.style.fontSize = "15px"
saveBtn.style.color = "white"
saveBtn.style.margin = "0 3px 0 3px"
saveBtn.style.backgroundColor = "rgb(28,28,162)"
saveBtn.style.border = "none"
saveBtn.style.borderRadius = "3px"

taskDiv.style.width = "450px"
taskDiv.style.padding = "8px"
taskDiv.style.display = "flex"
taskDiv.style.justifyContent = "center"
taskDiv.style.margin = "3px auto"
taskDiv.style.borderRadius = "5px"
taskDiv.style.backgroundColor = "rgb(198,225,229)"

myTasks.style.padding = "5px 1px 5px 1px"
myTasks.style.backgroundColor = "rgb(198,225,229)"

dateTasks.style.backgroundColor = "rgb(198,225,229)"
myTasks.style.textAlign = "center"
dateTasks.style.textAlign = "center"

myTasks.style.border = "none"
dateTasks.style.border = "none"

myTasks.value = taskInput.value;
dateTasks.value = dateInput.value

myTasks.setAttribute("disabled", "");
dateTasks.setAttribute("disabled", "");

myTasks.style.color = "black";
dateTasks.style.color = "black";


taskTable.appendChild(taskDiv)
taskDiv.appendChild(myTasks)
taskDiv.appendChild(dateTasks)
taskDiv.appendChild(editBtn)
taskDiv.appendChild(delBtn)
taskDiv.appendChild(saveBtn)

const countChild = taskTable.childElementCount;

if(countChild > 6) {
  addBtn.setAttribute("disabled", "")
  taskInput.setAttribute("disabled", "")
  dateInput.setAttribute("disabled", "")
} 


//edit, save, delete button event listener
editBtn.addEventListener("click", () => {

  saveBtn.style.display = "inline"
  editBtn.style.display = "none"

  myTasks.removeAttribute("disabled");
  dateTasks.removeAttribute("disabled");

  myTasks.focus()

})

saveBtn.addEventListener("click", () => {
  editBtn.style.display = "inline"
  saveBtn.style.display = "none"

  myTasks.setAttribute("disabled", "");
  dateTasks.setAttribute("disabled", "")

})


delBtn.addEventListener("click", () => {

  if(countChild == 7) {

    addBtn.removeAttribute("disabled");
    taskInput.removeAttribute("disabled");
    dateInput.removeAttribute("disabled");

  }

  taskDiv.remove()

})

}

}

addBtn.addEventListener("click", addTask);

