import { projectStuff } from "./projects";

export const btnActions = (() => {
  const todoBtn = document.querySelector('.add-todo');
  const projectBtn = document.querySelector('.add-project');
  const formMessage = document.querySelector('#form-message');
  const formContainer = document.querySelector('.form-container');
  const description = document.querySelector('.description');
  const date = document.querySelector('.date');
  const priority = document.querySelector('.priority');
  const project = document.querySelector('.project-select');
  const projectSubmitBtn = document.querySelector('.project-btn');
  const todoSubmitBtn = document.querySelector('.todo-btn');

  const showForm = (msg, type, currentName) => {
    todoBtn.classList.add('hidden');
    projectBtn.classList.add('hidden');
    formMessage.textContent = msg;
    formContainer.classList.remove('hidden');
    if (type === 'todo') {
      date.classList.remove('hidden');
      priority.classList.remove('hidden');
      project.classList.remove('hidden');
      todoSubmitBtn.classList.remove('hidden');
      projectSubmitBtn.classList.add('hidden');
    } if (type === 'project') {
      description.classList.add('hidden');
      date.classList.add('hidden');
      priority.classList.add('hidden');
      project.classList.add('hidden');
      todoSubmitBtn.classList.add('hidden');
      projectSubmitBtn.classList.remove('hidden');
      projectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.createProject(document.querySelector('#name').value);
        hideForm();
      }, {once: true});
    } if (type === 'edit project') {
      description.classList.add('hidden');
      date.classList.add('hidden');
      priority.classList.add('hidden');
      project.classList.add('hidden');
      todoSubmitBtn.classList.add('hidden');
      projectSubmitBtn.classList.remove('hidden');
      projectSubmitBtn.textContent = "Update";
      projectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.updateProject(currentName, document.querySelector('#name').value);
        hideForm();
      }, {once: true});
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
    showForm('Add To-do', 'todo');
  });

  //create project button show form
  projectBtn.addEventListener('click', () => {
    showForm('Create Project', 'project');
  })

  //submit todo form and clear fields
  todoSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
      hideForm('todo');
  })


  //submit project form and clear fields
  
    // if (projectStuff.projectList.includes(document.getElementById('name').value)) {
    //   const index = projectStuff.projectList.findIndex(document.querySelector('#name').value);
    //   projectStuff.projectList[index] = document.querySelector('#name').value;
    //   projectStuff.updateProject(document.querySelector('#name').value);
    // }
    

  return {showForm, hideForm}

})();

// const todo = (name, description, date, priority, projectName) => {
//   return {name, description, date, priority, projectName};
// }