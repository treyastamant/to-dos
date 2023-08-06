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
  }
  createProject('Personal')

  return {createProject};
})();