import { projectStuff } from "./projects";
import { toDoStuff } from "./todos";

export const btnActions = (() => {
  const todoBtn = document.querySelector('.add-todo');
  const formMessage = document.querySelector('#form-message');
  const formContainer = document.querySelector('.form-container');
  const projectContainer = document.querySelector('.project-container');
  
  const date = document.querySelector('.date');
  const priority = document.querySelector('.priority');
  const project = document.querySelector('.project-select');
  const submitBtn = document.querySelector('.submit-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  const buttons = document.querySelector('.buttons');

  const newToDo = (project) => {
    showFormInputs();
    document.querySelector('#project').value = project.id;
   
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toDoStuff.createTodo(document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
      hideForm();
    }, {once: true})
  } 
  
  const editToDo = (current) => { 
    showFormInputs();
    submitBtn.textContent = "Update";
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toDoStuff.updateTodo(current, document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
      hideForm();
    }, {once: true});

      cancelBtn.textContent = "Delete";
      cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toDoStuff.toDos.splice(toDoStuff.toDos.indexOf(current), 1);
        localStorage.setItem("toDos", JSON.stringify(toDoStuff.toDos));
        projectStuff.displayProject();
        hideForm();
      }, {once: true});
  } 

    const newProject = () => {
      hideFormInputs();
      const subBtn = document.createElement('button');
      subBtn.textContent = "Submit";
      subBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.createProject(document.querySelector('#name').value);
        hideForm();
      }, {once: true})
      buttons.appendChild(subBtn)
    } 

    const editProject = (current) => { 
      hideFormInputs();
      document.querySelector('#name').value = current.name;
      
      const subBtn = document.createElement('button');
      subBtn.textContent = "Update";
      subBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.updateProject(current, document.querySelector('#name').value);
        console.log(projectStuff.projectList)
        hideForm();
      }, {once: true});
      buttons.appendChild(subBtn);
      
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete"
      deleteBtn.addEventListener('click', (e) => deleteProject(e, current), {once: true});
      buttons.appendChild(deleteBtn);
    }

    const deleteProject = (e, current) => {
      console.log(current, "current")
      console.log(projectStuff.projectList)
      e.preventDefault();
      //running multiple times
      projectStuff.projectList.splice(projectStuff.projectList.indexOf(current), 1);
      console.log(projectStuff.projectList)
      localStorage.setItem("projectList", JSON.stringify(projectStuff.projectList));
      projectStuff.displayProject();
      hideForm();
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
      // submitBtn.textContent = "Submit";
      // cancelBtn.textContent = "Cancel";
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
    // cancelBtn.classList.add('hidden')
  }

  const hideForm = () => {
    todoBtn.classList.remove('hidden');
    formMessage.textContent = "";
    formContainer.classList.add('hidden');
    projectContainer.classList.remove('hidden');
  }
  
  return {showForm, hideForm, newToDo, editToDo, newProject, editProject, deleteProject}
})();

  