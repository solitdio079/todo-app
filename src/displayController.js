const selectProjectEl = document.querySelector("#selectProject");
const addTodoInputEl = document.querySelector("#addTodo");
const projectTodosEl = document.querySelector("#projectTodos");
const DisplayController = (function () {
  const addProjectToDOM = (projectName, projectId) => {
    const optionEl = document.createElement("option");
    optionEl.value = projectId;
    optionEl.textContent = projectName;
    selectProjectEl?.appendChild(optionEl);
    selectProjectEl.value = projectId;
  };
  const displayAllProjects = (projectArray) => {
    selectProjectEl.innerHTML = ``;
    if (projectArray.length === 0) return;
    projectArray.forEach((element) => {
      const projectName = element.getName();
      const optionEl = document.createElement("option");
      optionEl.value = element.getId();
      optionEl.textContent = projectName;
      selectProjectEl?.appendChild(optionEl);
    });
  };

  const displayProjectTodos = (projectTodosArray) => {
    projectTodosEl.innerHTML = ``;
    if (projectTodosArray.length === 0) return;

    projectTodosArray.forEach((element) => {
      const todoEl = document.createElement("div");
      todoEl.classList.add("todo");

      const detailsEl = document.createElement("div");
      detailsEl.classList.add("todo-details");

      const checkEl = document.createElement("div");
      checkEl.classList.add("todo-check");

      const checkboxEl = document.createElement("input");
      checkboxEl.type = "checkbox";

      const textParagraphEl = document.createElement("p");
      textParagraphEl.classList.add("todo-text");
      textParagraphEl.textContent = element.getTitle();

      const dueDateEl = document.createElement("small");
      dueDateEl.textContent = element.getDueDate();

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

      detailsEl.appendChild(checkEl);
      checkEl.appendChild(checkboxEl);
      textParagraphEl.appendChild(dueDateEl);
      detailsEl.appendChild(textParagraphEl);
      todoEl.appendChild(detailsEl);
      todoEl.appendChild(editBtnEl);
      projectTodosEl.appendChild(todoEl);
    });
  };

  return { addProjectToDOM, displayProjectTodos, displayAllProjects };
})();

export default DisplayController;
