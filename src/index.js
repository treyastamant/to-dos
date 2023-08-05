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
  // console.log (name);
  return {name};
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
  const date = document.querySelector('.date');
  const priority = document.querySelector('.priority');
  const project = document.querySelector('.project-select');
  const projectSubmitBtn = document.querySelector('.project-btn');
  const todoSubmitBtn = document.querySelector('.todo-btn');

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

  //add todo button show form
  todoBtn.addEventListener('click', () => {
    showForm('Add To-do');
    date.classList.remove('hidden');
    priority.classList.remove('hidden');
    project.classList.remove('hidden');
    todoSubmitBtn.classList.remove('hidden');
    projectSubmitBtn.classList.add('hidden');
  });

  //submit todo form and clear fields 


  //create project button show form
  projectBtn.addEventListener('click', () => {
    showForm('Create Project');
    date.classList.add('hidden');
    priority.classList.add('hidden');
    project.classList.add('hidden');
    todoSubmitBtn.classList.add('hidden');
    projectSubmitBtn.classList.remove('hidden');
  })

  //submit todo form and clear fields
  todoSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideForm();
    //reset inputs
    let inputs = document.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    //reset priority
    priority.selectedIndex = 0;
    document.querySelector('#project').selectIndex = 0;
  })

  //submit project form and clear fields
  projectSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideForm();
    //reset inputs
    let inputs = document.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    createProject(document.querySelector('#name').value);
  })

})();


const storeProjectName = () => {
  const projectSelect = document.getElementById('project');
  const projectOption = document.createElement('option');
  projectOption.setAttribute('value', 'Default');
  projectOption.textContent = "Default";
  
  projectSelect.appendChild(projectOption);
}


