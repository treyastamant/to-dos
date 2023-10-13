(()=>{"use strict";const e=(()=>{let e=JSON.parse(localStorage.getItem("toDos"))||[];return{createTodo:(o,n,c,r)=>{let d={name:o,date:n,priority:c,projectName:r,id:(new Date).getTime()};return e.push(d),localStorage.setItem("toDos",JSON.stringify(e)),t.displayProject(),{toDos:e}},toDos:e,updateTodo:(o,n,c,r,d)=>{o.name=n,o.date=c,o.priority=r,o.projectName=d,localStorage.setItem("toDos",JSON.stringify(e)),t.displayProject()}}})(),t=(()=>{const t=JSON.parse(localStorage.getItem("projectList"))||["Personal"],n=()=>{const e=document.getElementById("project");e.innerHTML="",t.forEach((t=>{const o=document.createElement("option");o.setAttribute("value",t),o.classList.add("project-option"),o.textContent=t,e.appendChild(o)}))},c=()=>{const n=document.querySelector(".project-container");n.innerHTML="",t.forEach((c=>{const d=document.createElement("div");d.dataset.project=c.replace(/\s+/g,"-").toLowerCase(),d.className="project-div";const a=document.createElement("h2");a.classList.add("project-name");const s=document.createElement("span");s.classList.add("material-symbols-outlined","edit"),s.textContent="edit",s.addEventListener("click",(()=>{r("Edit Project Name","edit project",c)}));const l=document.createElement("button");l.classList.add("add-todo","project-button");const i=document.createElement("span");i.classList.add("material-symbols-outlined","edit"),i.textContent="add",l.append(i,"Add To Do"),l.addEventListener("click",(()=>{o.showForm("Create New Item"),o.newToDo(c)}),{once:!0}),a.textContent=c,n.appendChild(d),d.appendChild(a),a.appendChild(s),d.appendChild(l),localStorage.setItem("projectList",JSON.stringify(t)),e.toDos.forEach((e=>{if(e.projectName===c){const t=document.createElement("div");t.classList.add("to-do-item"),t.setAttribute("id",e.id);const n=document.createElement("input");n.setAttribute("type","checkbox");const c=document.createElement("span");c.textContent=e.name;const r=document.createElement("span");r.textContent=e.priority;const a=document.createElement("span");a.textContent=e.date;const s=document.createElement("span");s.classList.add("material-symbols-outlined","edit"),s.textContent="edit",s.addEventListener("click",(()=>{document.querySelector("#name").value=e.name,document.querySelector("#date").value=e.date,document.querySelector("#priority").value=e.priority,document.querySelector("#project").value=e.projectName,o.showForm("Edit To Do"),o.editToDo(e)})),d.appendChild(t),t.append(n,c,r,a,s)}}))}));const c=document.createElement("button");c.classList.add("project-button");const d=document.createElement("span");d.classList.add("material-symbols-outlined","edit"),d.textContent="add",c.append(d,"Create New List"),n.appendChild(c),c.addEventListener("click",(()=>{o.showForm("Create New List"),o.newProject()}))},r=(e,t,n)=>{document.querySelector("#name").value=n,o.showForm(e,t,n)};return c(),n(),{createProject:e=>{t.push(e),localStorage.setItem("projectList",JSON.stringify(t)),n(),c()},projectList:t,updateProject:(e,o)=>{console.log(e,o);let r=t.indexOf(e);t[r]=o,localStorage.setItem("projectList",JSON.stringify(t)),c(),n()},displayProject:c}})(),o=(()=>{const o=document.querySelector(".add-todo"),n=document.querySelector("#form-message"),c=document.querySelector(".form-container"),r=document.querySelector(".project-container"),d=document.querySelector(".date"),a=document.querySelector(".priority"),s=document.querySelector(".project-select"),l=document.querySelector(".submit-btn"),i=document.querySelector(".cancel-btn"),u=()=>{d.classList.remove("hidden"),a.classList.remove("hidden"),s.classList.remove("hidden")},m=()=>{o.classList.remove("hidden"),n.textContent="",c.classList.add("hidden"),r.classList.remove("hidden")};return{showForm:e=>{document.querySelector("#priority").selectedIndex=0,document.querySelector("#project").selectedIndex=0;let t=document.querySelectorAll("input");for(let e=0;e<t.length;e++)t[e].value="";r.classList.add("hidden"),n.textContent=e,c.classList.remove("hidden"),l.textContent="Submit",i.textContent="Cancel"},hideForm:m,newToDo:t=>{u(),document.querySelector("#project").value=t,l.addEventListener("click",(t=>{t.preventDefault(),console.log(document.querySelectorAll("#name"),document.querySelector("#date").value,document.querySelector("#priority").value,document.querySelector("#project").value),e.createTodo(document.querySelector("#name").value,document.querySelector("#date").value,document.querySelector("#priority").value,document.querySelector("#project").value),m()}),{once:!0})},editToDo:o=>{u(),l.textContent="Update",l.addEventListener("click",(t=>{t.preventDefault(),e.updateTodo(o,document.querySelector("#name").value,document.querySelector("#date").value,document.querySelector("#priority").value,document.querySelector("#project").value),m()}),{once:!0}),i.textContent="Delete",i.addEventListener("click",(n=>{n.preventDefault(),e.toDos.splice(e.toDos.indexOf(o),1),localStorage.setItem("toDos",JSON.stringify(e.toDos)),t.displayProject(),m()}),{once:!0})},newProject:()=>{d.classList.add("hidden"),a.classList.add("hidden"),s.classList.add("hidden"),l.addEventListener("click",(e=>{e.preventDefault(),t.createProject(document.querySelector("#name").value),m()}),{once:!0})}}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkRpQixFQUFhQyxpQkFDYjhELEdBQVUsR0FDVCxDQUFDM0IsTUFBTSxHQUFNLEVBMkUyQlMsV0F4RTFCLEtBNERuQnZELEVBQUswQixVQUFVQyxJQUFJLFVBQ25CMUIsRUFBU3lCLFVBQVVDLElBQUksVUFDdkJiLEVBQVFZLFVBQVVDLElBQUksVUE1RHBCMEMsRUFBVS9CLGlCQUFpQixTQUFVaEIsSUFDbkNBLEVBQUV5RCxpQkFDRnJFLEVBQWFnRCxjQUFjeEMsU0FBU2EsY0FBYyxTQUFTc0IsT0FDM0RvQixHQUFVLEdBQ1QsQ0FBQzNCLE1BQU0sR0FBSyxFQW1FcEIsRUFwSHlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9idG4tYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0U3R1ZmYgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgYnRuQWN0aW9ucyB9IGZyb20gXCIuL2J0bi1hY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCB0b0RvU3R1ZmYgPSAoKCkgPT4ge1xubGV0IHRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9zXCIpKSB8fCBbXTtcbiAgY29uc3QgY3JlYXRlVG9kbyA9IChuYW1lLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgdG9EbyA9IHtuYW1lLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdE5hbWUsIGlkOm5ldyBEYXRlKCkuZ2V0VGltZSgpfTtcbiAgICB0b0Rvcy5wdXNoKHRvRG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICBwcm9qZWN0U3R1ZmYuZGlzcGxheVByb2plY3QoKTtcblxuICAgIHJldHVybiB7dG9Eb3N9O1xuICB9XG5cbiAgLy8gY29uc3QgYXR0YWNoVG9Qcm9qZWN0ID0gKHRvRG8sIHByb2plY3ROYW1lKSA9PiB7XG4gIC8vICAgcHJvamVjdFN0dWZmLnByb2plY3RMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgLy8gICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gZSkge1xuICAvLyAgICAgICBsZXQgcHJvamVjdEFycmF5O1xuICAvLyAgICAgICBwcm9qZWN0QXJyYXkucHVzaCh0b0RvKTtcbiAgLy8gICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgLy8gICAgICAgLy8gY29uc3QgY2xhc3NOYW1lID0gZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgLy8gICAgICAgLy8gY29uc29sZS5sb2coY2xhc3NOYW1lKVxuICAvLyAgICAgICAvLyBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgLy8gICAgICAgLy8gY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIC8vICAgICAgIC8vIHRvRG9JdGVtLnRleHRDb250ZW50ID0gdG9Eby5uYW1lO1xuXG4gIC8vICAgICAgIC8vIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHRvRG9JdGVtKTtcbiAgLy8gICAgICAgLy8gY29uc29sZS5sb2coZSwgcHJvamVjdE5hbWUpXG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIHByb2plY3RTdHVmZi5wcm9qZWN0TGlzdC5mb3JFYWNoKChlKSA9PiB7XG4gIC8vICAgICBpZiAocHJvamVjdE5hbWUgPT09IGUpO1xuICAvLyAgICAgcHJvamVjdFN0dWZmLmNyZWF0ZVByb2plY3QuZS5wdXNoKHRvRG8pO1xuICAvLyAgICAgICAvLyBlLnB1c2godG9Ebyk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdHVmZi5jcmVhdGVQcm9qZWN0LnByb2plY3RBcnJheSk7XG4gIC8vICAgfSlcbiAgXG4gIC8vIH1cblxuICBjb25zdCB1cGRhdGVUb2RvID0gKGN1cnJlbnQsIG5hbWUsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgY3VycmVudC5uYW1lID0gbmFtZTtcbiAgICBjdXJyZW50LmRhdGUgPSBkYXRlO1xuICAgIGN1cnJlbnQucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBjdXJyZW50LnByb2plY3ROYW1lID0gcHJvamVjdDtcbiAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuICAgIHByb2plY3RTdHVmZi5kaXNwbGF5UHJvamVjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlVG9kbywgdG9Eb3MsIHVwZGF0ZVRvZG8gfTtcbn0pKCk7IiwiaW1wb3J0IHsgYnRuQWN0aW9ucyB9IGZyb20gXCIuL2J0bi1hY3Rpb25zXCI7XG5pbXBvcnQgeyB0b0RvU3R1ZmYgfSBmcm9tIFwiLi90b2Rvc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdFN0dWZmID0gKCgpID0+IHtcbiAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKSB8fCBbJ1BlcnNvbmFsJ107XG4gIFxuICBcbiAgLy9hZGQgcHJvamVjdCB0byBkcm9wLWRvd25cbiAgY29uc3QgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGUpO1xuICAgICAgcHJvamVjdE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbicpO1xuICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IGU7XG4gICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy9zaG93IHByb2plY3QgbmFtZSBvbiBwYWdlXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdERpdi5kYXRhc2V0LnByb2plY3QgPSBlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgcHJvamVjdERpdi5jbGFzc05hbWUgPSBcInByb2plY3QtZGl2XCI7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCAoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnLCAnZWRpdCcpO1xuICAgICAgZWRpdEljb24udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdEFjdGlvbihgRWRpdCBQcm9qZWN0IE5hbWVgLCAnZWRpdCBwcm9qZWN0JywgZSlcbiAgICAgIH0pO1xuXG4gICAgICAvL3RvZG8gYnV0dG9uXG4gICAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJywgJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICBcbiAgICAgIGNvbnN0IGJ1dHRvblRleHRUb2RvID0gJ0FkZCBUbyBEbydcbiAgICAgIGNvbnN0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBuZXdJY29uLmNsYXNzTGlzdC5hZGQgKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJywgJ2VkaXQnKTtcbiAgICAgIG5ld0ljb24udGV4dENvbnRlbnQgPSAnYWRkJztcblxuICAgICAgbmV3VG9kby5hcHBlbmQobmV3SWNvbiwgYnV0dG9uVGV4dFRvZG8pO1xuICAgICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnRuQWN0aW9ucy5zaG93Rm9ybSgnQ3JlYXRlIE5ldyBJdGVtJylcbiAgICAgICAgYnRuQWN0aW9ucy5uZXdUb0RvKGUpO1xuICAgICAgfSwge29uY2U6IHRydWV9KTtcblxuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBlO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdUb2RvKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgXG4gICAgICB0b0RvU3R1ZmYudG9Eb3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAodC5wcm9qZWN0TmFtZSA9PT0gZSkge1xuICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbScpO1xuICAgICAgICAgIHRvRG9JdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB0LmlkKTtcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgICAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSB0Lm5hbWU7XG4gICAgICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIHRvRG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IHQucHJpb3JpdHk7XG4gICAgICAgICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSB0LmRhdGU7XG4gICAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCAoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnLCAnZWRpdCcpO1xuICAgICAgICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgICAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSA9IHQubmFtZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWUgPSB0LmRhdGU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSA9IHQucHJpb3JpdHk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlID0gdC5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIGJ0bkFjdGlvbnMuc2hvd0Zvcm0oJ0VkaXQgVG8gRG8nKVxuICAgICAgICAgICAgYnRuQWN0aW9ucy5lZGl0VG9Ebyh0KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pO1xuICAgICAgICAgIHRvRG9JdGVtLmFwcGVuZChjaGVja2JveCwgdG9Eb05hbWUsIHRvRG9Qcmlvcml0eSwgdG9Eb0RhdGUsIGVkaXRJY29uKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy9uZXcgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvblRleHQgPSAnQ3JlYXRlIE5ldyBMaXN0J1xuICAgIGNvbnN0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3SWNvbi5jbGFzc0xpc3QuYWRkICgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcsICdlZGl0Jyk7XG4gICAgbmV3SWNvbi50ZXh0Q29udGVudCA9ICdhZGQnO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmQobmV3SWNvbiwgYnV0dG9uVGV4dCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRuQWN0aW9ucy5zaG93Rm9ybSgnQ3JlYXRlIE5ldyBMaXN0Jyk7XG4gICAgICBidG5BY3Rpb25zLm5ld1Byb2plY3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRBY3Rpb24gPSAobXNnLCB0eXBlLCBuYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSA9IG5hbWU7XG4gICAgYnRuQWN0aW9ucy5zaG93Rm9ybShtc2csIHR5cGUsIG5hbWUpO1xuICB9XG5cblxuICAvL3Byb2plY3QgZmFjdG9yeSBmdW5jdGlvblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcblxuICAgIHBvcHVsYXRlUHJvamVjdERyb3BEb3duKCk7XG4gICAgZGlzcGxheVByb2plY3QoKTtcbiAgICAvLyBjcmVhdGVQcm9qZWN0QXJyYXkoKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoY3VycmVudE5hbWUsIG5ld05hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TmFtZSwgbmV3TmFtZSk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihjdXJyZW50TmFtZSk7XG4gICAgcHJvamVjdExpc3RbaW5kZXhdID0gbmV3TmFtZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgZGlzcGxheVByb2plY3QoKTtcbiAgICBwb3B1bGF0ZVByb2plY3REcm9wRG93bigpO1xuICB9XG4gICAgICBcbiAgZGlzcGxheVByb2plY3QoKTtcbiAgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24oKTtcbiAgXG4gIHJldHVybiB7Y3JlYXRlUHJvamVjdCwgcHJvamVjdExpc3QsIHVwZGF0ZVByb2plY3QsIGRpc3BsYXlQcm9qZWN0fVxufSkoKTsiLCJpbXBvcnQgeyBwcm9qZWN0U3R1ZmYgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdG9Eb1N0dWZmIH0gZnJvbSBcIi4vdG9kb3NcIjtcblxuZXhwb3J0IGNvbnN0IGJ0bkFjdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gIGNvbnN0IGZvcm1NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tbWVzc2FnZScpO1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2VsZWN0Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJyk7XG5cbiAgY29uc3QgbmV3VG9EbyA9IChwcm9qZWN0KSA9PiB7XG4gICAgc2hvd0Zvcm1JbnB1dHMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlID0gcHJvamVjdDtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmFtZScpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZSk7XG4gICAgICB0b0RvU3R1ZmYuY3JlYXRlVG9kbyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZSk7XG4gICAgICBoaWRlRm9ybSgpO1xuICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgfSBcbiAgXG4gIGNvbnN0IGVkaXRUb0RvID0gKGN1cnJlbnQpID0+IHsgXG4gICAgc2hvd0Zvcm1JbnB1dHMoKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b0RvU3R1ZmYudXBkYXRlVG9kbyhjdXJyZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZSk7XG4gICAgICBoaWRlRm9ybSgpO1xuICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvRG9TdHVmZi50b0Rvcy5zcGxpY2UodG9Eb1N0dWZmLnRvRG9zLmluZGV4T2YoY3VycmVudCksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9TdHVmZi50b0RvcykpO1xuICAgICAgICBwcm9qZWN0U3R1ZmYuZGlzcGxheVByb2plY3QoKTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgfSBcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgICBoaWRlRm9ybUlucHV0cygpO1xuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0U3R1ZmYuY3JlYXRlUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlKTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgICB9IFxuICAgIFxuICAgIC8vIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAvLyAgIGhpZGVGb3JtSW5wdXRzKCk7XG4gICAgLy8gICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHByb2plY3RTdHVmZi5jcmVhdGVQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUpO1xuICAgIC8vICAgICBoaWRlRm9ybSgpO1xuICAgIC8vICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAvLyB9IGlmICh0eXBlID09PSAnZWRpdCBwcm9qZWN0Jykge1xuICAgIC8vICAgaGlkZUZvcm1JbnB1dHMoKTtcbiAgICAvLyAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XG4gICAgLy8gICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHByb2plY3RTdHVmZi51cGRhdGVQcm9qZWN0KGN1cnJlbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUpO1xuICAgIC8vICAgICBoaWRlRm9ybSgpO1xuICAgIC8vICAgfSwge29uY2U6IHRydWV9KTtcblxuICAgIC8vICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAvLyAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgLy9kZWxldGUgdG9kbyBpdGVtXG4gICAgLy8gICAgIGxldCBpbmRleCA9IHByb2plY3RTdHVmZi5wcm9qZWN0TGlzdC5pbmRleE9mKGN1cnJlbnQpO1xuICAgIC8vICAgICBwcm9qZWN0U3R1ZmYucHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3R1ZmYucHJvamVjdExpc3QpKTtcbiAgICAvLyAgICAgcHJvamVjdFN0dWZmLmRpc3BsYXlQcm9qZWN0KCk7XG4gICAgLy8gICAgIGhpZGVGb3JtKCk7XG4gICAgLy8gICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgIC8vIH1cbiAgXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAobXNnKSA9PiB7XG4gICAgICAgLy9yZXNldCBwcmlvcml0eSBhbmQgcHJvamVjdFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jykuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgLy8gcmVzZXQgaW5wdXRzXG4gICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlucHV0c1tpXS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZm9ybU1lc3NhZ2UudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgfSBcblxuICBjb25zdCBzaG93Rm9ybUlucHV0cyA9ICgpID0+IHtcbiAgICBkYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cblxuICBjb25zdCBoaWRlRm9ybUlucHV0cyA9ICgpID0+IHtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cblxuICBjb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICB0b2RvQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGZvcm1NZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbiAgXG4gIHJldHVybiB7c2hvd0Zvcm0sIGhpZGVGb3JtLCBuZXdUb0RvLCBlZGl0VG9EbywgbmV3UHJvamVjdH1cbn0pKCk7XG5cbiAgIl0sIm5hbWVzIjpbInRvRG9TdHVmZiIsInRvRG9zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNyZWF0ZVRvZG8iLCJuYW1lIiwiZGF0ZSIsInByaW9yaXR5IiwicHJvamVjdE5hbWUiLCJ0b0RvIiwiaWQiLCJEYXRlIiwiZ2V0VGltZSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHJvamVjdFN0dWZmIiwiZGlzcGxheVByb2plY3QiLCJ1cGRhdGVUb2RvIiwiY3VycmVudCIsInByb2plY3QiLCJwcm9qZWN0TGlzdCIsInBvcHVsYXRlUHJvamVjdERyb3BEb3duIiwicHJvamVjdFNlbGVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiZSIsInByb2plY3RPcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInByb2plY3RDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdERpdiIsImRhdGFzZXQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjbGFzc05hbWUiLCJlZGl0SWNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlZGl0QWN0aW9uIiwibmV3VG9kbyIsIm5ld0ljb24iLCJhcHBlbmQiLCJidG5BY3Rpb25zIiwic2hvd0Zvcm0iLCJuZXdUb0RvIiwib25jZSIsInQiLCJ0b0RvSXRlbSIsImNoZWNrYm94IiwidG9Eb05hbWUiLCJ0b0RvUHJpb3JpdHkiLCJ0b0RvRGF0ZSIsInZhbHVlIiwiZWRpdFRvRG8iLCJuZXdQcm9qZWN0IiwibXNnIiwidHlwZSIsImNyZWF0ZVByb2plY3QiLCJ1cGRhdGVQcm9qZWN0IiwiY3VycmVudE5hbWUiLCJuZXdOYW1lIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiaW5kZXhPZiIsInRvZG9CdG4iLCJmb3JtTWVzc2FnZSIsImZvcm1Db250YWluZXIiLCJzdWJtaXRCdG4iLCJjYW5jZWxCdG4iLCJzaG93Rm9ybUlucHV0cyIsInJlbW92ZSIsImhpZGVGb3JtIiwic2VsZWN0ZWRJbmRleCIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9