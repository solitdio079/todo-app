import Manager from "./manager";
import "./style.css"

// edit from elements 
const editFormEl = document.querySelector(".edit-form")
const editTitleEl = document.querySelector("#editTitle")
const editNotesEl = document.querySelector("#editNotes")
const editDueDateEl = document.querySelector("#editDueDate")
const editPriorityEl = document.querySelector("#editPriority")
const editProjectEl = document.querySelector("#editProject")

// add project dialog
const dialog = document.querySelector(".addProject-dialog");
const showButton = document.querySelector("#addProjectBtn");
const closeButton = document.querySelector(".modal-actions > button");

// delete todo btn
const deleteTodoBtnEl = document.querySelector("#deleteTodoBtn")
const deleteProjectBtnEl = document.querySelector("#deleteProjectBtn")

// addProjectForm
const addProjectFormEl = document.querySelector("#addProjectForm")
// add todo
const addTodoInputEl = document.querySelector("#addTodo")

const selectProjectEl = document.querySelector("#selectProject")

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
  dialog.computedStyleMap.display = "flex"
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

//addProject
addProjectFormEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(addProjectFormEl)
    Manager.createProject(formData.get("name"))
})

addTodoInputEl.addEventListener("keydown", (e)=> {
    if(e.code === "Enter" && e.target.value !==""){
        Manager.createTodo(e.target.value)
        e.target.value = ""
    }
})

selectProjectEl.addEventListener("change", (e) => {
    const project = Manager.findProject(e.target.value)
    Manager.setCurrentProject(project)
})

editTitleEl.addEventListener("keydown", (e) => {
  if(e.code === "Enter" && e.target.value !== "" && editFormEl.getAttribute("todoId")){
    //console.log("we are here")
    const todoId = editFormEl.getAttribute("todoId")
    const title = e.target.value
    Manager.changeTodoTitle(title,todoId)
  }
})
editNotesEl.addEventListener("keydown", (e) => {
  if(e.code === "Enter" && e.target.value !== "" && editFormEl.getAttribute("todoId")){
    //console.log("we are here")
    const todoId = editFormEl.getAttribute("todoId")
    const notes = e.target.value
    Manager.changeTodoNotes(notes,todoId)
  }
})

editPriorityEl.addEventListener("change", (e) => {
  //console.log("we are here")
  if(editFormEl.getAttribute("todoId")){
    const todoId = editFormEl.getAttribute("todoId")
    Manager.changeTodoPriority(e.target.value,todoId)
  }

})
editDueDateEl.addEventListener("change", (e) => {
  if(editFormEl.getAttribute("todoId")){
    const todoId = editFormEl.getAttribute("todoId")
    Manager.changeTodoDueDate(e.target.value,todoId)
  }
})
editProjectEl.addEventListener("change", (e) => {
  //console.log("we are here")
  if(editFormEl.getAttribute("todoId")){
    const todoId = editFormEl.getAttribute("todoId")
    Manager.changeTodoProject(e.target.value,todoId)
  }

})

deleteTodoBtnEl.addEventListener("click", () => {
  if(editFormEl.getAttribute("todoId")){
    Manager.deleteTodo(editFormEl.getAttribute("todoId"))
  }
})

deleteProjectBtnEl.addEventListener("click", () => {
  const projectId = selectProjectEl.value 
  Manager.deleteProject(projectId)
})

Manager.init()





