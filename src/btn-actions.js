import { projectStuff } from "./projects";

export const btnActions = (() => {
  const todoBtn = document.querySelector('.add-todo');
  const projectBtn = document.querySelector('.add-project');
  const formMessage = document.querySelector('#form-message');
  const formContainer = document.querySelector('.form-container');
  
  const date = document.querySelector('.date');
  const priority = document.querySelector('.priority');
  const project = document.querySelector('.project-select');
  const submitBtn = document.querySelector('.submit-btn');

  const showForm = (msg, type, currentName) => {
    todoBtn.classList.add('hidden');
    projectBtn.classList.add('hidden');
    formMessage.textContent = msg;
    formContainer.classList.remove('hidden');
    if (type === 'todo') {
      date.classList.remove('hidden');
      priority.classList.remove('hidden');
      project.classList.remove('hidden');
      submitBtn.textContent = "Add New Todo";
       //submit todo form and clear fields
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        createTodo(document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
        hideForm('todo');
      })
    } if (type === 'project') {
      date.classList.add('hidden');
      priority.classList.add('hidden');
      project.classList.add('hidden');
      submitBtn.textContent = "Add New Project";
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectStuff.createProject(document.querySelector('#name').value);
        hideForm();
      }, {once: true});
    } if (type === 'edit project') {
      date.classList.add('hidden');
      priority.classList.add('hidden');
      project.classList.add('hidden');
      submitBtn.textContent = "Update";
      submitBtn.addEventListener('click', (e) => {
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

 

  return {showForm, hideForm}

})();

const createTodo = (name, date, priority, projectName) => {
  let todos = [];
  let todo = {name, date, priority, projectName};
  todos.push(todo);
  console.log(todos[0]);
  attachToProject(todo);

  return todos;
}

const attachToProject = (todo) => {
  projectStuff.projectList.forEach((e) => {
    if (todo.projectName === e) {
      console.log(e, todo.name);
    }
  })
  
}