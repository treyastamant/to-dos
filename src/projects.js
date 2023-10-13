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
      const projectDiv = document.createElement('div');
      projectDiv.dataset.project = e.replace(/\s+/g, '-').toLowerCase();
      projectDiv.className = "project-div";
      const projectName = document.createElement('h2');
      projectName.classList.add('project-name');
      const editIcon = document.createElement('span');
      editIcon.classList.add ('material-symbols-outlined', 'edit');
      editIcon.textContent = 'edit';
      editIcon.addEventListener('click', () => {
        editAction(`Edit Project Name`, 'edit project', e)
      });

      //todo button
      const newTodo = document.createElement('button');
      newTodo.classList.add('add-todo', 'project-button');
      
      const buttonTextTodo = 'Add To Do'
      const newIcon = document.createElement('span');
      newIcon.classList.add ('material-symbols-outlined', 'edit');
      newIcon.textContent = 'add';

      newTodo.append(newIcon, buttonTextTodo);
      newTodo.addEventListener('click', () => {
        btnActions.showForm('Create New Item')
        btnActions.newToDo(e);
      }, {once: true});

      projectName.textContent = e;
      projectContainer.appendChild(projectDiv);
      projectDiv.appendChild(projectName);
      projectName.appendChild(editIcon);
      projectDiv.appendChild(newTodo);

      localStorage.setItem("projectList", JSON.stringify(projectList));
      
      toDoStuff.toDos.forEach((t) => {
        if (t.projectName === e) {
          const toDoItem = document.createElement('div');
          toDoItem.classList.add('to-do-item');
          toDoItem.setAttribute('id', t.id);
          const checkbox = document.createElement('input')
          checkbox.setAttribute("type", "checkbox");
          const toDoName = document.createElement('span');
          toDoName.textContent = t.name;
          const toDoPriority = document.createElement('span');
          toDoPriority.textContent = t.priority;
          const toDoDate = document.createElement('span');
          toDoDate.textContent = t.date;
          const editIcon = document.createElement('span');
          editIcon.classList.add ('material-symbols-outlined', 'edit');
          editIcon.textContent = 'edit';
          editIcon.addEventListener('click', () => {
            document.querySelector('#name').value = t.name;
            document.querySelector('#date').value = t.date;
            document.querySelector('#priority').value = t.priority;
            document.querySelector('#project').value = t.projectName;
            btnActions.showForm('Edit To Do')
            btnActions.editToDo(t);
          });

          projectDiv.appendChild(toDoItem);
          toDoItem.append(checkbox, toDoName, toDoPriority, toDoDate, editIcon);
        }
      })
    })

    //new project button
    const newProject = document.createElement('button');
    newProject.classList.add('project-button');
    
    const buttonText = 'Create New List'
    const newIcon = document.createElement('span');
    newIcon.classList.add ('material-symbols-outlined', 'edit');
    newIcon.textContent = 'add';

    newProject.append(newIcon, buttonText);
    projectContainer.appendChild(newProject);
    newProject.addEventListener('click', () => {
      btnActions.showForm('Create New List', 'project');
    });
  }

  const editAction = (msg, type, name) => {
    document.querySelector('#name').value = name;
    btnActions.showForm(msg, type, name);
  }


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