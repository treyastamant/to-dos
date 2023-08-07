import { createTodo } from "./btn-actions";

  const projectList = [];
  
  //add project to drop-down
  const populateProjectDropDown = (name) => {
    const projectSelect = document.getElementById('project');
    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', name);
    projectOption.textContent = name;
    projectSelect.appendChild(projectOption);
  }

  //show project name on page
  const displayProject = (name) => {
    const projectContainer = document.querySelector('.project-container');
    const projectName = document.createElement('h2');
    const editIcon = document.createElement('span');
    editIcon.classList.add ('material-symbols-rounded', 'edit');
    editIcon.textContent = 'edit';
    projectName.textContent = name;
    projectContainer.appendChild(projectName);
    projectName.appendChild(editIcon);
  }

  // const displayNestedTodos = (projectName, todo) => {
  //   const newTodo = document.createElement('p');
  //   newTodo.textContent = todo;
  //   projectName.appendChild(todo);
  // }

  //project factory function
  export const createProject = (name) => {
    projectList.push(name);
    populateProjectDropDown(name);
    displayProject(name);
  }

  //create default project
  createProject('Personal');