import Todo from "./todo";
import Project from "./projects";
import DisplayController from "./displayController";
 
const Manager = (function () {
  let myTodos = [];
  let myProjects = [];
  let currentProject = new Project("Personal");

  const init = () => {
    myProjects.push(currentProject);
    DisplayController.displayAllProjects(myProjects)
    showCurrentTodos()
  };

  const setCurrentProject = (project) => {
    currentProject = project
    showCurrentTodos()

  }
  const showCurrentTodos = () => {
    const currentProjectTodos = myTodos.filter(item => item.getProject() === currentProject.getName())
    DisplayController.displayProjectTodos(currentProjectTodos)
  }

  const createTodo = (title) => {
    const todo = new Todo(title, currentProject.getName());
    myTodos.push(todo);
    showCurrentTodos()
  };
  const createProject = (name) => {
    const newProject = new Project(name);
    DisplayController.addProjectToDOM(newProject.getName(), newProject.getId())
    myProjects.push(newProject);
    setCurrentProject(newProject)
  };
  const deleteProject = (id) => {
    // get the project to be deleted
    const project = myProjects.filter((item) => item.getId() === id)[0];
    // update projects
    myProjects = myProjects.filter((item) => item.getId() !== project.getId());
    // delete all todos with that projectname
    myTodos = myTodos.filter((item) => item.getProject() !== project.getName());
  };

  const findProject = (projectId) => {
    const project = myProjects.filter(item => item.getId() === projectId)[0]
    return project
  }

  const deleteTodo = (id) => {
    myTodos = myTodos.filter(item  => item.getId() !== id)

  }

  return { init, createTodo, createProject, deleteProject, deleteTodo, setCurrentProject, showCurrentTodos,findProject };
})();

export default Manager;

