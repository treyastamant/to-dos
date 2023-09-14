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

  const showForm = (msg, type, currentName) => {
    todoBtn.classList.add('hidden');
    projectContainer.classList.add('hidden');
    formMessage.textContent = msg;
    formContainer.classList.remove('hidden');
    submitBtn.textContent = "Submit";
    if (type === 'todo') {
      showFormInputs();
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toDoStuff.createTodo(document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
        hideForm('todo');
      }, {once: true})
    } if (type === 'edit todo') {
      showFormInputs();
      submitBtn.textContent = "Update";
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //update todo item
        toDoStuff.updateTodoName(currentName, document.querySelector('#name').value);
        hideForm();
      }, {once: true});
    } if (type === 'project') {
      hideFormInputs();
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.createProject(document.querySelector('#name').value);
        hideForm();
      }, {once: true});
    } if (type === 'edit project') {
      hideFormInputs();
      submitBtn.textContent = "Update";
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.updateProject(currentName, document.querySelector('#name').value);
        hideForm();
      }, {once: true});
    } 
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
    //reset priority and project
    document.querySelector('#priority').selectedIndex = 0;
    document.querySelector('#project').selectedIndex = 0;
    //reset inputs
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }

  //add todo button show form
  todoBtn.addEventListener('click', () => {
    showForm('Add To-do', 'todo');
  });
  
  return {showForm, hideForm}
})();

  