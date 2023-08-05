//title, description, deDate, priority
//Projects/separate lists of to-dos
//Create new to-dos
//Set to-dos as complete
//change to-dos priority

//View all projects
//View all to-dos in each project
//View to-do details
//Delete a to-do

const getProjects = () => {
  const projectList = [];
}

const createProject = (name) => {
}

const displayProjects = ()  => {
}

const todo = (name, description, date, priority, projectName) => {
  return {name, description, date, priority, projectName};
}

const createTodo = (() => {
  const todoBtn = document.querySelector('.add-todo');
  const projectBtn = document.querySelector('.add-project');
  const formMessage = document.querySelector('#form-message');
  const formContainer = document.querySelector('.form-container');

  const showForm = (msg) => {
    todoBtn.classList.add('hidden');
    projectBtn.classList.add('hidden');
    formMessage.textContent = msg;
    formContainer.classList.remove('hidden');
  }

  const hideForm = () => {
    todoBtn.classList.remove('hidden');
    projectBtn.classList.remove('hidden');
    formMessage.textContent = "";
    formContainer.classList.add('hidden');
  }

  todoBtn.addEventListener('click', () => {
    showForm('Add To-do');
    document.querySelector('.date').classList.remove('hidden');
    document.querySelector('.priority').classList.remove('hidden');
    document.querySelector('.project-select').classList.remove('hidden');
  });

  projectBtn.addEventListener('click', () => {
    showForm('Create Project');
    document.querySelector('.date').classList.add('hidden');
    document.querySelector('.priority').classList.add('hidden');
    document.querySelector('.project-select').classList.add('hidden');
  })

  const submitBtn = document.querySelector('.submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideForm()
;    console.log('hey')
  })

})();

const projectSelect = document.getElementById('project');
const projectOption = document.createElement('option');
projectOption.setAttribute('value', 'Default');
projectOption.textContent = "Default";

projectSelect.appendChild(projectOption);

