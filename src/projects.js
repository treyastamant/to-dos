import { btnActions } from "./btn-actions";
import { toDoStuff } from "./todos";

export const projectStuff = (() => {
  // localStorage.clear();
  const projectList = JSON.parse(localStorage.getItem("projectList")) || [{name:'Personal', id:1}];
  
  //add project to drop-down
  const populateProjectDropDown = () => {
    const projectSelect = document.getElementById('project');
    projectSelect.innerHTML = "";
    projectList.forEach((e) => {
      const projectOption = document.createElement('option');
      projectOption.value = e.id;
      projectOption.setAttribute('dataset', e.id);
      projectOption.classList.add('project-option');
      projectOption.textContent = e.name;
      projectSelect.appendChild(projectOption);
    });
  }

  //show project name on page
  const displayProject = () => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = "";
  
    projectList.forEach((e) => {
      const projectDiv = document.createElement('div'); 
      projectDiv.className = "project-div";
      const projectName = document.createElement('h2');
      projectName.classList.add('project-name');
      const editIcon = document.createElement('span');
      editIcon.classList.add ('material-symbols-outlined', 'edit');
      editIcon.textContent = 'edit';
      editIcon.addEventListener('click', () => {
        btnActions.showForm(`Edit Project Name`);
        btnActions.editProject(e);
      }, {once: true});

      //todo button
      const newTodo = document.createElement('button');
      newTodo.classList.add('add-todo', 'project-icon');
      
      const buttonTextTodo = 'Add To Do'
      const newIcon = document.createElement('span');
      newIcon.classList.add ('material-symbols-outlined', 'edit');
      newIcon.textContent = 'add';

      newTodo.append(newIcon, buttonTextTodo);
      newTodo.addEventListener('click', () => {
        btnActions.showForm('Create New Item')
        btnActions.newToDo(e);
      }, {once: true});

      projectName.textContent = e.name;
      projectContainer.appendChild(projectDiv);
      projectDiv.appendChild(projectName);
      projectName.appendChild(editIcon);
      projectDiv.appendChild(newTodo);

      localStorage.setItem("projectList", JSON.stringify(projectList));
      
      toDoStuff.toDos.forEach((t) => {  
        if (t.projectId === e.id) {
          const toDoItem = document.createElement('div');
          toDoItem.classList.add('to-do-item');
          toDoItem.setAttribute('id', t.id);
          const checkbox = document.createElement('input')
          checkbox.setAttribute("type", "checkbox");
          checkbox.setAttribute("class", "checkbox");
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
    newProject.classList.add('project-icon');
    
    const buttonText = 'Create New List'
    const newIcon = document.createElement('span');
    newIcon.classList.add ('material-symbols-outlined', 'edit');
    newIcon.textContent = 'add';

    newProject.append(newIcon, buttonText);
    projectContainer.appendChild(newProject);
    newProject.addEventListener('click', () => {
      btnActions.showForm('Create New List');
      btnActions.newProject();
    });
  }

  const createProject = (name) => {
    const project = {name, id:new Date().getTime()}
    projectList.push(project);
    localStorage.setItem("projectList", JSON.stringify(projectList));
    populateProjectDropDown();
  }

  const updateProject = (current, newName) => {
    current.name = newName;
    localStorage.setItem("projectList", JSON.stringify(projectList));
    populateProjectDropDown();
  }
      
  displayProject();
  populateProjectDropDown();
  
  return {createProject, projectList, updateProject, displayProject}
})();