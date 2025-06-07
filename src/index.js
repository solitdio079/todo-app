import Todo from "./todo";
import Project from "./projects";
import "./style.css"
const myTodos = []
const myProjects = []


const defaultProject = new Project("Personal")
const defaultProjectName = defaultProject.getName()
const todo1 = new Todo("Create Todo", defaultProjectName)



myTodos.push(todo1)
myProjects.push(defaultProject)

//todo1.complete= true
console.log(myTodos)
console.log(defaultProject)