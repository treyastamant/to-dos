import { projectStuff } from "./projects";
import { btnActions } from "./btn-actions";

export const toDoStuff = (() => {
  // localStorage.clear();
let toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  const createTodo = (name, date, priority, projectName) => {
   
    let toDo = {name, date, priority, projectName};
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
    projectStuff.displayProject();
    // attachToProject(toDo, projectName);

    return {toDos};
  }

  const attachToProject = (toDo, projectName) => {
    projectStuff.projectList.forEach((e) => {
      if (projectName === e) {
        let projectArray;
        projectArray.push(toDo);
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
    })
  
  }

  const updateTodo = (current, name, date, priority, project) => {
      let index = toDos.map(function (e) {
          return e.name;
      }).indexOf(current);
        toDos[index].name = name;
        toDos[index].date = date;
        toDos[index].priority = priority;
        toDos[index].projectName = project;
  
    localStorage.setItem("toDos", JSON.stringify(toDos));
    projectStuff.displayProject();
  }

  return { createTodo, attachToProject, toDos, updateTodo };
})();