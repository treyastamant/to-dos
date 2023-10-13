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

  const newToDo = (project) => {
    showFormInputs();
    document.querySelector('#project').value = project;

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(document.querySelectorAll('#name'), document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
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
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.createProject(document.querySelector('#name').value);
        hideForm();
      }, {once: true})
    } 
    
    // if (type === 'project') {
    //   hideFormInputs();
    //   submitBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     projectStuff.createProject(document.querySelector('#name').value);
    //     hideForm();
    //   }, {once: true});
    // } if (type === 'edit project') {
    //   hideFormInputs();
    //   submitBtn.textContent = "Update";
    //   submitBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     projectStuff.updateProject(current, document.querySelector('#name').value);
    //     hideForm();
    //   }, {once: true});

    //   cancelBtn.textContent = "Delete";
    //   cancelBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     //delete todo item
    //     let index = projectStuff.projectList.indexOf(current);
    //     projectStuff.projectList.splice(index, 1);
    //     localStorage.setItem("projectList", JSON.stringify(projectStuff.projectList));
    //     projectStuff.displayProject();
    //     hideForm();
    //   }, {once: true});
    // }
  
    const showForm = (msg) => {
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
      submitBtn.textContent = "Submit";
      cancelBtn.textContent = "Cancel";
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

  const hideForm = () => {
    todoBtn.classList.remove('hidden');
    formMessage.textContent = "";
    formContainer.classList.add('hidden');
    projectContainer.classList.remove('hidden');
  }
  
  return {showForm, hideForm, newToDo, editToDo, newProject}
})();

  