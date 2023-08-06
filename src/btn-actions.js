import { getProjects } from "./projects";

export const btnActions = (() => {
  const todoBtn = document.querySelector('.add-todo');
  const projectBtn = document.querySelector('.add-project');
  const formMessage = document.querySelector('#form-message');
  const formContainer = document.querySelector('.form-container');
  const date = document.querySelector('.date');
  const priority = document.querySelector('.priority');
  const project = document.querySelector('.project-select');
  const projectSubmitBtn = document.querySelector('.project-btn');
  const todoSubmitBtn = document.querySelector('.todo-btn');

  const nameValue = document.querySelector('#name').value;
  const descriptionValue = document.querySelector('#description').value;

  const showForm = (msg) => {
    todoBtn.classList.add('hidden');
    projectBtn.classList.add('hidden');
    formMessage.textContent = msg;
    formContainer.classList.remove('hidden');
    if (msg === 'Add To-do') {
      date.classList.remove('hidden');
      priority.classList.remove('hidden');
      project.classList.remove('hidden');
      todoSubmitBtn.classList.remove('hidden');
      projectSubmitBtn.classList.add('hidden');
    } else {
      date.classList.add('hidden');
      priority.classList.add('hidden');
      project.classList.add('hidden');
      todoSubmitBtn.classList.add('hidden');
      projectSubmitBtn.classList.remove('hidden');
    }
  }

  const hideForm = () => {
    todoBtn.classList.remove('hidden');
    projectBtn.classList.remove('hidden');
    formMessage.textContent = "";
    formContainer.classList.add('hidden');
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
    showForm('Add To-do');
  });

  //create project button show form
  projectBtn.addEventListener('click', () => {
    showForm('Create Project');
  })

  //submit todo form and clear fields
  todoSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameValue != "" || descriptionValue != "") {  
      hideForm();
      console.log('not empty')
    }
    if (nameValue === "") {
      console.log('name empty')
    }
    if (descriptionValue === "") {
      console.log('description empty')
    }
  })


  //submit project form and clear fields
  projectSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getProjects.createProject(document.querySelector('#name').value);
    hideForm();
  })

})();

// const todo = (name, description, date, priority, projectName) => {
//   return {name, description, date, priority, projectName};
// }