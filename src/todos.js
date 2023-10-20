export const toDoStuff = (() => {
let toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  const createTodo = (name, date, priority, pId) => {
    let projectId = parseInt(pId);
    let toDo = {name, date, priority, projectId, id:new Date().getTime()};
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
    return {toDos};
  }

  const updateTodo = (current, name, date, priority, project) => {
    let projectId = parseInt(project);
    current.name = name;
    current.date = date;
    current.priority = priority;
    current.projectId = projectId;
  
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }

  return { createTodo, toDos, updateTodo };
})();