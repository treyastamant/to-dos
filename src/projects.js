import { btnActions } from "./btn-actions";
import { toDoStuff } from "./todos";

export const projectStuff = (() => {
  // localStorage.clear();
  const projectList = JSON.parse(localStorage.getItem("projectList")) || ['Personal'];
  
  
  //add project to drop-down
  const populateProjectDropDown = () => {
    const projectSelect = document.getElementById('project');
    projectSelect.innerHTML = "";
    projectList.forEach((e) => {
      const projectOption = document.createElement('option');
      projectOption.setAttribute('value', e);
      projectOption.classList.add('project-option');
      projectOption.textContent = e;
      projectSelect.appendChild(projectOption);
    });
  }

  //show project name on page
  const displayProject = () => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = "";
    projectList.forEach((e) => {
      const className = e.replace(/\s+/g, '-').toLowerCase();
      const projectDiv = document.createElement('div');
      projectDiv.className = className;
      const projectName = document.createElement('h2');
      projectName.classList.add('project-name');
      const editIcon = document.createElement('span');
      editIcon.classList.add ('material-symbols-rounded', 'edit');
      editIcon.textContent = 'edit';
      editIcon.addEventListener('click', () => {
        editAction(`Edit Project Name`, 'edit project', e)
      });

      projectName.textContent = e;
      projectContainer.appendChild(projectDiv);
      projectDiv.appendChild(projectName);
      projectName.appendChild(editIcon);
      
      toDoStuff.toDos.forEach((t) => {
        if (t.projectName === e) {
          const toDoItem = document.createElement('p');
          toDoItem.textContent = t.name;
          projectDiv.appendChild(toDoItem);
        }
      })
    })
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
  // const createProjectArray = () => {
  //   projectList.forEach((e) => {
  //     e = [];
  //     console.log(e);
  //   })
  // }

  //project factory function
  const createProject = (name) => {
    projectList.push(name);
    localStorage.setItem("projectList", JSON.stringify(projectList));

    populateProjectDropDown();
    displayProject();
    // createProjectArray();
  }

  const updateProject = (currentName, newName) => {
    console.log(currentName, newName);
    let index = projectList.indexOf(currentName);
    projectList[index] = newName;
    localStorage.setItem("projectList", JSON.stringify(projectList));
    displayProject();
    populateProjectDropDown();
  }
      
  displayProject();
  populateProjectDropDown();
  
  return {createProject, projectList, updateProject, displayProject}
})();