const selectProjectEl = document.querySelector("#selectProject");
const addTodoInputEl = document.querySelector("#addTodo");
const projectTodosEl = document.querySelector("#projectTodos");

// edit from elements 
const editFormEl = document.querySelector(".edit-form")
const editTitleEl = document.querySelector("#editTitle")
const editNotesEl = document.querySelector("#editNotes")
const editDueDateEl = document.querySelector("#editDueDate")
const editPriorityEl = document.querySelector("#editPriority")
const editProjectEl = document.querySelector("#editProject")
const DisplayController = (function () {
  const addProjectToDOM = (projectName, projectId) => {
    const optionEl = document.createElement("option");
    const optionEl2 = document.createElement("option");
    optionEl.value = projectId;
    optionEl2.value = projectId;
    optionEl.textContent = projectName;
    optionEl2.textContent = projectName;
    selectProjectEl?.appendChild(optionEl);
    editProjectEl?.appendChild(optionEl2);
    selectProjectEl.value = projectId;
  };
  const displayAllProjects = (projectArray) => {
    selectProjectEl.innerHTML = ``;
    editProjectEl.innerHTML = ``
    if (projectArray.length === 0) return;
    projectArray.forEach((element) => {
      const projectName = element.getName();
      const optionEl = document.createElement("option");
      optionEl.value = element.getId();
      optionEl.textContent = projectName;
     
     
      selectProjectEl?.appendChild(optionEl);
    });
    projectArray.forEach((element) => {
      const projectName = element.getName();
      const optionEl = document.createElement("option");
      optionEl.value = element.getId();
      optionEl.textContent = projectName;
     
     
      editProjectEl?.appendChild(optionEl);
    });
  };

  const displayProjectTodos = (projectTodosArray) => {
    projectTodosEl.innerHTML = ``;
    if (projectTodosArray.length === 0) return;

    projectTodosArray.forEach((element) => {
      const todoEl = document.createElement("div");
      todoEl.classList.add("todo");
      todoEl.classList.add(`priority-${element.getPriority()}`)

      const detailsEl = document.createElement("div");
      detailsEl.classList.add("todo-details");

      const checkEl = document.createElement("div");
      checkEl.classList.add("todo-check");

      const checkboxEl = document.createElement("input");
      checkboxEl.type = "checkbox";
      checkboxEl.setAttribute("todoId", element.getId())
      checkboxEl.checked = element.getComplete()
      checkEl.addEventListener("change",() => {
       
        element.toggleComplete()
        if(editFormEl.getAttribute("todoId") === element.getId()){
          Array.from(editFormEl.elements).forEach(item => {item.disabled = element.getComplete()})
        }
        displayProjectTodos(projectTodosArray)
      })

      const textParagraphEl = document.createElement("p");
      textParagraphEl.classList.add("todo-text");
      textParagraphEl.textContent = element.getTitle();
      if(element.getComplete()) textParagraphEl.classList.add("barred")

      const dueDateEl = document.createElement("small");
      dueDateEl.textContent = element.getDueDate();
      if(element.getComplete()) dueDateEl.classList.add("hidden")

      const editBtnEl = document.createElement("button");
      editBtnEl.classList.add("edit-btn");
      editBtnEl.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>`;
      
      
      editBtnEl.addEventListener("click", (e)=> {
        const todoId = element.getId()
        const title = element.getTitle()
        const notes = element.getNotes() || ""
        const project = element.getProject()
        const priority = element.getPriority()
        const dueDate = element.getDueDate()
        const complete = element.getComplete()
        populateEditForm(title,notes,dueDate,priority,project,todoId,complete)
      })

      detailsEl.appendChild(checkEl);
      checkEl.appendChild(checkboxEl);
      textParagraphEl.appendChild(dueDateEl);
      detailsEl.appendChild(textParagraphEl);
      todoEl.appendChild(detailsEl);
      todoEl.appendChild(editBtnEl);
      projectTodosEl.appendChild(todoEl);
    });
  };

  const populateEditForm = (title,notes,dueDate,priority,project,todoId,complete) => {
    editFormEl.setAttribute("todoId", todoId)
   
    editTitleEl.value = title
    editDueDateEl.value = dueDate
    editNotesEl.value = notes
    editPriorityEl.value = priority
    editProjectEl.value = project

    Array.from(editFormEl.elements).forEach(item => {item.disabled = complete})


  }

  const resetEditForm = () => {
    editFormEl.reset()
  }

  return { addProjectToDOM, displayProjectTodos, displayAllProjects, resetEditForm };
})();

export default DisplayController;
