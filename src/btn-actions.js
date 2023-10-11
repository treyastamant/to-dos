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

  const showForm = (msg, type, current) => {
    todoBtn.classList.add('hidden');
    projectContainer.classList.add('hidden');
    formMessage.textContent = msg;
    formContainer.classList.remove('hidden');
    submitBtn.textContent = "Submit";
    cancelBtn.textContent = "Cancel";

    // cancelBtn.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   hideForm();
    // });

    if (type === 'todo') {
      showFormInputs();
      const currentProjectIndex = projectStuff.projectList.indexOf(current);
      document.querySelector('#project').value = projectStuff.projectList[currentProjectIndex];
      submitBtn.addEventListener('click', (e) => {
        if (toDoStuff.toDos.includes(document.querySelector('#name'))){
          e.preventDefault();
          toDoStuff.createTodo(document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
          hideForm('todo');
        } else {}
      }, {once: true})


    } if (type === 'edit todo') {
      showFormInputs();
      submitBtn.textContent = "Update";
      submitBtn.addEventListener('click', (e) => {
        // document.getElementById('myForm').checkValidity();
        e.preventDefault();
        //update todo item
        toDoStuff.updateTodo(current, document.querySelector('#name').value, document.querySelector('#date').value, document.querySelector('#priority').value, document.querySelector('#project').value);
        hideForm();
      }, {once: true});

      cancelBtn.textContent = "Delete";
      cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //delete todo item
        let index = toDoStuff.toDos.map(function (e) {
          return e.name;
        }).indexOf(current);
        toDoStuff.toDos.splice(index, 1);
        localStorage.setItem("toDos", JSON.stringify(toDoStuff.toDos));
        projectStuff.displayProject();
        hideForm();
      }, {once: true});
    } if (type === 'project') {
      hideFormInputs();
      submitBtn.addEventListener('click', (e) => {
        console.log(!projectStuff.projectList.includes(document.querySelector('#name').value))
        e.preventDefault();
        if (!projectStuff.projectList.includes(document.querySelector('#name').value)) {
          projectStuff.createProject(document.querySelector('#name').value);
          hideForm()
        } else {
          console.log('error')
        }

          
        
      });
    } if (type === 'edit project') {
      hideFormInputs();
      submitBtn.textContent = "Update";
      submitBtn.addEventListener('click', (e) => {
        // document.getElementById('myForm').checkValidity();
        e.preventDefault();
        projectStuff.updateProject(current, document.querySelector('#name').value);
        hideForm();
      }, {once: true});

      cancelBtn.textContent = "Delete";
      cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //delete todo item
        let index = projectStuff.projectList.indexOf(current);
        projectStuff.projectList.splice(index, 1);
        localStorage.setItem("projectList", JSON.stringify(projectStuff.projectList));
        projectStuff.displayProject();
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
  
  return {showForm, hideForm}
})();

  