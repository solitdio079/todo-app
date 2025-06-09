import Todo from "./todo";
import Project from "./projects";
import DisplayController from "./displayController";
 
const Manager = (function () {
  let myTodos =JSON.parse(localStorage.getItem("myTodos")) || [];
  let myProjects = JSON.parse(localStorage.getItem("myProjects"))||[];
  if(myProjects.length>0){
    myProjects = myProjects.map((project) => 
       new Project(project._name,project.id,project._description)
       
     )
     
   }
   if(myTodos.length>0){
    
     myTodos = myTodos.map(todo => 
      new Todo(todo._title,todo._project,todo._id,todo._priority,todo._complete,todo._dueDate,todo._notes)
     )
     
   }
  let currentProject =  myProjects[0] ? myProjects[0] :  new Project("Personal");

  

  const init = () => {
    if(!myProjects[0]){ 
      myProjects.push(currentProject)
      //persistData()

     };
    DisplayController.displayAllProjects(myProjects)
    showCurrentTodos()
  };

  const setCurrentProject = (project) => {
    currentProject = project
    showCurrentTodos()

  }
  const showCurrentTodos = () => {
    const currentProjectTodos = myTodos.filter(item => item.getProject() === currentProject.getId())
    DisplayController.displayProjectTodos(currentProjectTodos)
  }

  const createTodo = (title) => {
    const todo = new Todo(title, currentProject.getId());
    myTodos.push(todo);
    persistData()
    showCurrentTodos()
  };
  const createProject = (name) => {
    const newProject =  new Project(name);
    DisplayController.addProjectToDOM(newProject.getName(), newProject.getId())
    myProjects.push(newProject);
    persistData()
    setCurrentProject(newProject)
  };
  const deleteProject = (id) => {
    // get the project to be deleted
    const project = myProjects.filter((item) => item.getId() === id)[0];
    if(project.getName() === "Personal") return
    // update projects
    myProjects = myProjects.filter((item) => item.getId() !== project.getId());
    // delete all todos with that projectname
    myTodos = myTodos.filter((item) => item.getProject() !== project.getId());
    persistData()
    DisplayController.displayAllProjects(myProjects)
    setCurrentProject(myProjects[0])
  };

  const findProject = (projectId) => {
    const project = myProjects.filter(item => item.getId() === projectId)[0]
    return project
  }

  const deleteTodo = (id) => {
    myTodos = myTodos.filter(item  => item.getId() !== id)
    persistData()
    DisplayController.resetEditForm()
    showCurrentTodos()
  }

  const changeTodoTitle = (title,todoId) => {
    const todo = myTodos.filter(item => item.getId() === todoId)[0]
    todo.setTitle(title)
    persistData()
    showCurrentTodos()

  }
  const changeTodoNotes = (notes,todoId) => {
    const todo = myTodos.filter(item => item.getId() === todoId)[0]
    todo.setNotes(notes)
    persistData()
    showCurrentTodos()

  }
  const changeTodoPriority = (priority,todoId) => {
    const todo = myTodos.filter(item => item.getId() === todoId)[0]
    todo.setPriority(priority)
    persistData()
    showCurrentTodos()

  }
  const changeTodoProject = (project, todoId) => {
    const todo = myTodos.filter(item => item.getId() === todoId)[0]
    todo.setProject(project)
    persistData()
    showCurrentTodos()

  }
  const changeTodoDueDate = (dueDate, todoId) => {
    const todo = myTodos.filter(item => item.getId() === todoId)[0]
    todo.setDueDate(dueDate)
    persistData()
    showCurrentTodos()

  }
  const persistData = () => {
    localStorage.setItem("myProjects", JSON.stringify(myProjects))
    localStorage.setItem("myTodos", JSON.stringify(myTodos))

  }
  return { init, createTodo, createProject, deleteProject, deleteTodo, 
    setCurrentProject, showCurrentTodos,findProject,
    changeTodoTitle,changeTodoPriority,changeTodoNotes,changeTodoProject, changeTodoDueDate };
})();

export default Manager;

