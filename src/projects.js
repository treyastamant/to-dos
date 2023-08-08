import { btnActions } from "./btn-actions";

export const projectStuff = (() => {
  const projectList = [];
  
  //add project to drop-down
  const populateProjectDropDown = (name, type, index) => {
    const projectSelect = document.getElementById('project');
    if (type === 'new') {
    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', name);
    projectOption.classList.add('project-option');
    projectOption.textContent = name;
    projectSelect.appendChild(projectOption);
    }
    if (type === 'edit') {
      const projectOption = document.querySelectorAll('.project-option');
      projectOption[index].textContent = name;
      projectOption[index].setAttribute('value', name);
    }
  }

  //show project name on page
  const displayProject = (name, type, index) => {
    if (type === "new") {
      const projectContainer = document.querySelector('.project-container');
      const projectName = document.createElement('h2');
      projectName.classList.add('project-name');
      const editIcon = document.createElement('span');
      editIcon.classList.add ('material-symbols-rounded', 'edit');
      editIcon.textContent = 'edit';
      editIcon.addEventListener('click', () => {
        editAction(`Edit Project Name`, 'edit project', name)
      });
      projectName.textContent = name;
      projectContainer.appendChild(projectName);
      projectName.appendChild(editIcon);
    }
    if (type === "edit") {
      const projectName = document.querySelectorAll('.project-name');
      projectName[index].textContent = name;
      const editIcon = document.createElement('span');
      editIcon.classList.add ('material-symbols-rounded', 'edit');
      editIcon.textContent = 'edit';
      editIcon.addEventListener('click', () => {
        editAction(`Edit Project Name`, 'edit project', name)
      });
      projectName[index].appendChild(editIcon);
    }
  }

  const editAction = (msg, type, name) => {
    document.querySelector('#name').value = name;
    btnActions.showForm(msg, type, name);
  }

  // const displayNestedTodos = (projectName, todo) => {
  //   const newTodo = document.createElement('p');
  //   newTodo.textContent = todo;
  //   projectName.appendChild(todo);
  // }

  //project factory function
  const createProject = (name) => {
    projectList.push(name);
    populateProjectDropDown(name, 'new');
    displayProject(name, 'new');
  }

  const updateProject = (currentName, newName) => {
    console.log(currentName, newName);
    let index = projectList.indexOf(currentName);
    projectList[index] = newName;
    displayProject(newName, 'edit', index);
    populateProjectDropDown(newName, 'edit', index);
  }

  //create default project
  createProject('Personal');

  return {createProject, projectList, updateProject}
})();