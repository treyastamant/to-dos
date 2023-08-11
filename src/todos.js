import { projectStuff } from "./projects";
import { btnActions } from "./btn-actions";

export const toDoStuff = (() => {
let toDos = [];
  const createTodo = (name, date, priority, projectName) => {
   
    let toDo = {name, date, priority, projectName};
    toDos.push(toDo);
    projectStuff.displayProject();
    // attachToProject(toDo, projectName);

    return {toDos};
  }

  const attachToProject = (toDo, projectName) => {
    projectStuff.projectList.forEach((e) => {
      if (projectName === e) {
        let projectArray;
        projectArray.push(toDo);
        console.log(projectArray);
        // const className = e.replace(/\s+/g, '-').toLowerCase();
        // console.log(className)
        // const projectName = document.querySelector(`.${className}`);
        // const toDoItem = document.createElement('p');
        // toDoItem.textContent = toDo.name;

        // projectName.appendChild(toDoItem);
        // console.log(e, projectName)
      }
    })

    projectStuff.projectList.forEach((e) => {
      if (projectName === e);
      projectStuff.createProject.e.push(toDo);
        // e.push(toDo);
        console.log(projectStuff.createProject.projectArray);
    })
    
  
  }
  return { createTodo, attachToProject, toDos };
})();