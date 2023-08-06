import { createTodo } from "./todo";

export const getProjects = (() => {
  const projectList = [];
  

  //project factory function
  const createProject = (name) => {
    projectList.push(name);
    const projectSelect = document.getElementById('project');
    const projectOption = document.createElement('option');
        projectOption.setAttribute('value', name);
        projectOption.textContent = name;
        console.log(name)
        projectSelect.appendChild(projectOption);
        //show project name on page
          const projectContainer = document.querySelector('.project-container');
          const projectName = document.createElement('h2');
          projectName.textContent = name;
          projectContainer.appendChild(projectName);
        
  }
  createProject('Personal')

  

  return {createProject};
})();