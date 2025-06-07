import Todo from "./todo";
import Project from "./projects";

const Manager = (function () {
  let myTodos = [];
  let myProjects = [];
  let currentProject = new Project("Personal");

  const init = () => {
    myProjects.push(currentProject);
  };

  const createTodo = (title) => {
    const todo = new Todo(title, currentProject.getName());
    myTodos.push(todo);
  };
  const createProject = (name) => {
    const newProject = new Project(name);
    myProjects.push(newProject);
  };
  const deleteProject = (id) => {
    // get the project to be deleted
    const project = myProjects.filter((item) => item.getId() === id)[0];
    // update projects
    myProjects = myProjects.filter((item) => item.getId() !== project.getId());
    // delete all todos with that projectname
    myTodos = myTodos.filter((item) => item.getProject() !== project.getName());
  };

  const deleteTodo = (id) => {
    myTodos = myTodos.filter(item  => item.getId() !== id)

  }

  return { init, createTodo, createProject, deleteProject, deleteTodo };
})();

export default Manager;

const defaultProjectName = defaultProject.getName();
const todo1 = new Todo("Create Todo", defaultProjectName);

myTodos.push(todo1);
myProjects.push(defaultProject);

//todo1.complete= true
console.log(myTodos);
console.log(defaultProject);
