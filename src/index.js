import Manager from "./manager";
import "./style.css"

// add project dialog
const dialog = document.querySelector(".addProject-dialog");
const showButton = document.querySelector("#addProjectBtn");
const closeButton = document.querySelector(".modal-actions > button");

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

Manager.init()





