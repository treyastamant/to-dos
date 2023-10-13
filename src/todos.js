import { projectStuff } from "./projects";
import { btnActions } from "./btn-actions";

export const toDoStuff = (() => {
let toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  const createTodo = (name, date, priority, projectName) => {
    let toDo = {name, date, priority, projectName, id:new Date().getTime()};
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
    projectStuff.displayProject();

    return {toDos};
  }

  // const attachToProject = (toDo, projectName) => {
  //   projectStuff.projectList.forEach((e) => {
  //     if (projectName === e) {
  //       let projectArray;
  //       projectArray.push(toDo);
  //       console.log(projectArray);
  //       // const className = e.replace(/\s+/g, '-').toLowerCase();
  //       // console.log(className)
  //       // const projectName = document.querySelector(`.${className}`);
  //       // const toDoItem = document.createElement('p');
  //       // toDoItem.textContent = toDo.name;

  //       // projectName.appendChild(toDoItem);
  //       // console.log(e, projectName)
  //     }
  //   })

  //   projectStuff.projectList.forEach((e) => {
  //     if (projectName === e);
  //     projectStuff.createProject.e.push(toDo);
  //       // e.push(toDo);
  //       console.log(projectStuff.createProject.projectArray);
  //   })
  
  // }

  const updateTodo = (current, name, date, priority, project) => {
    current.name = name;
    current.date = date;
    current.priority = priority;
    current.projectName = project;
  
    localStorage.setItem("toDos", JSON.stringify(toDos));
    projectStuff.displayProject();
  }

  return { createTodo, toDos, updateTodo };
})();