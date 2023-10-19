import { projectStuff } from "./projects";
import { toDoStuff } from "./todos";

export const btnActions = (() => {
  const todoIcon = document.querySelector('.add-todo');
  const formMessage = document.querySelector('#form-message');
  const formContainer = document.querySelector('.form-container');
  const projectContainer = document.querySelector('.project-container');
  
  const date = document.querySelector('.date');
  const priority = document.querySelector('.priority');
  const project = document.querySelector('.project-select');
  const buttons = document.querySelector('.buttons');

  const newToDo = (project) => {
    showFormInputs();
    document.querySelector('#project').value = project.id;

    const subBtn = document.createElement('button');
    subBtn.textContent = "Submit";
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toDoStuff.createTodo(document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
      hideForm();
    })
    buttons.appendChild(subBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel"
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hideForm();
    });
    buttons.appendChild(cancelBtn);
  } 
  
  const editToDo = (current) => { 
    showFormInputs();
    document.querySelector('#name').value = current.name;
    document.querySelector('#date').value = current.date;
    document.querySelector('#priority').value = current.priority;
    document.querySelector('#project').value = current.projectId;

    const subBtn = document.createElement('button');
    subBtn.textContent = "Update";
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toDoStuff.updateTodo(current, document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
      hideForm();
    });
    buttons.appendChild(subBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toDoStuff.toDos.splice(toDoStuff.toDos.indexOf(current), 1);
      localStorage.setItem("toDos", JSON.stringify(toDoStuff.toDos));
      hideForm();
    });
    buttons.appendChild(deleteBtn);
  } 

  const newProject = () => {
    hideFormInputs();
    const subBtn = document.createElement('button');
    subBtn.textContent = "Submit";
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      projectStuff.createProject(document.querySelector('#name').value);
      hideForm();
    })
    buttons.appendChild(subBtn)

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel"
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hideForm();
    });
    buttons.appendChild(cancelBtn);
  } 

  const editProject = (current) => { 
    hideFormInputs();
    document.querySelector('#name').value = current.name;
    
    const subBtn = document.createElement('button');
    subBtn.textContent = "Update";
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      projectStuff.updateProject(current, document.querySelector('#name').value);
      hideForm();
    });
    buttons.appendChild(subBtn);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      projectStuff.projectList.splice(projectStuff.projectList.indexOf(current), 1);
      localStorage.setItem("projectList", JSON.stringify(projectStuff.projectList));
      hideForm();
    });
    buttons.appendChild(deleteBtn);
  }
  
  const showForm = (msg) => {
    buttons.innerHTML = "";
      //reset priority and project
    document.querySelector('#priority').selectedIndex = 0;
    document.querySelector('#project').selectedIndex = 0;
    // reset inputs
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    projectContainer.classList.add('hidden');
    formMessage.textContent = msg;
    formContainer.classList.remove('hidden');
  } 

  const hideForm = () => {
    todoIcon.classList.remove('hidden');
    formMessage.textContent = "";
    formContainer.classList.add('hidden');
    projectContainer.classList.remove('hidden');
    projectStuff.displayProject();
  }

  const showFormInputs = () => {
    date.classList.remove('hidden');
    priority.classList.remove('hidden');
    project.classList.remove('hidden');
  }

  const hideFormInputs = () => {
    date.classList.add('hidden');
    priority.classList.add('hidden');
    project.classList.add('hidden');
  }

  return {showForm, hideForm, newToDo, editToDo, newProject, editProject}
})();

  