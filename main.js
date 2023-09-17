(()=>{"use strict";const e=(()=>{let e=JSON.parse(localStorage.getItem("toDos"))||[];return{createTodo:(o,c,n,r)=>{let d={name:o,date:c,priority:n,projectName:r};return e.push(d),localStorage.setItem("toDos",JSON.stringify(e)),t.displayProject(),{toDos:e}},attachToProject:(e,o)=>{t.projectList.forEach((t=>{if(o===t){let t;t.push(e),console.log(t)}})),t.projectList.forEach((o=>{t.createProject.e.push(e),console.log(t.createProject.projectArray)}))},toDos:e,updateTodo:(o,c,n,r,d)=>{let a=e.map((function(e){return e.name})).indexOf(o);e[a].name=c,e[a].date=n,e[a].priority=r,e[a].projectName=d,localStorage.setItem("toDos",JSON.stringify(e)),t.displayProject()}}})(),t=(()=>{const t=JSON.parse(localStorage.getItem("projectList"))||["Personal"],c=()=>{const e=document.getElementById("project");e.innerHTML="",t.forEach((t=>{const o=document.createElement("option");o.setAttribute("value",t),o.classList.add("project-option"),o.textContent=t,e.appendChild(o)}))},n=()=>{const c=document.querySelector(".project-container");c.innerHTML="",t.forEach((n=>{const a=n.replace(/\s+/g,"-").toLowerCase(),s=document.createElement("div");s.className=a,s.className="project-div";const l=document.createElement("h2");l.classList.add("project-name");const i=document.createElement("span");i.classList.add("material-symbols-outlined","edit"),i.textContent="edit",i.addEventListener("click",(()=>{r("Edit Project Name","edit project",n)}));const u=document.createElement("button");u.classList.add("add-todo","project-button");const m=document.createElement("span");m.classList.add("material-symbols-outlined","edit"),m.textContent="add",u.append(m,"Add To Do"),u.addEventListener("click",(()=>{o.showForm("Create New Item","todo")})),l.textContent=n,c.appendChild(s),s.appendChild(l),l.appendChild(i),s.appendChild(u),localStorage.setItem("projectList",JSON.stringify(t)),e.toDos.forEach((e=>{if(e.projectName===n){const t=document.createElement("div");t.classList.add("to-do-item");const o=document.createElement("input");o.setAttribute("type","checkbox");const c=document.createElement("span");c.textContent=e.name;const n=document.createElement("span");n.textContent=e.priority;const r=document.createElement("span");r.textContent=e.date;const a=document.createElement("span");a.classList.add("material-symbols-outlined","edit"),a.textContent="edit",a.addEventListener("click",(()=>{d("Edit To Do","edit todo",e)})),s.appendChild(t),t.append(o,c,n,r,a)}}))}));const n=document.createElement("button");n.classList.add("project-button");const a=document.createElement("span");a.classList.add("material-symbols-outlined","edit"),a.textContent="add",n.append(a,"Create New List"),c.appendChild(n),n.addEventListener("click",(()=>{o.showForm("Create New List","project")}))},r=(e,t,c)=>{document.querySelector("#name").value=c,o.showForm(e,t,c)},d=(e,t,c)=>{document.querySelector("#name").value=c.name,document.querySelector("#date").value=c.date,document.querySelector("#priority").value=c.priority,document.querySelector("#project").value=c.projectName,o.showForm(e,t,c.name)};return n(),c(),{createProject:e=>{t.push(e),localStorage.setItem("projectList",JSON.stringify(t)),c(),n()},projectList:t,updateProject:(e,o)=>{console.log(e,o);let r=t.indexOf(e);t[r]=o,localStorage.setItem("projectList",JSON.stringify(t)),n(),c()},displayProject:n}})(),o=(()=>{const o=document.querySelector(".add-todo"),c=document.querySelector("#form-message"),n=document.querySelector(".form-container"),r=document.querySelector(".project-container"),d=document.querySelector(".date"),a=document.querySelector(".priority"),s=document.querySelector(".project-select"),l=document.querySelector(".submit-btn"),i=document.querySelector(".cancel-btn"),u=(d,a,s)=>{o.classList.add("hidden"),r.classList.add("hidden"),c.textContent=d,n.classList.remove("hidden"),l.textContent="Submit",i.textContent="Cancel","todo"===a&&(m(),l.addEventListener("click",(t=>{t.preventDefault(),e.createTodo(document.querySelector("#name").value,document.querySelector("#date").value,document.querySelector("#priority").value,document.querySelector("#project").value),y("todo")}),{once:!0})),"edit todo"===a&&(m(),l.textContent="Update",l.addEventListener("click",(t=>{t.preventDefault(),e.updateTodo(s,document.querySelector("#name").value,document.querySelector("#date").value,document.querySelector("#priority").value,document.querySelector("#project").value),y()}),{once:!0}),i.textContent="Delete",i.addEventListener("click",(o=>{o.preventDefault();let c=e.toDos.map((function(e){return e.name})).indexOf(s);e.toDos.splice(c,1),localStorage.setItem("toDos",JSON.stringify(e.toDos)),t.displayProject(),y()}),{once:!0})),"project"===a&&(p(),l.addEventListener("click",(e=>{e.preventDefault(),t.createProject(document.querySelector("#name").value),y()}),{once:!0})),"edit project"===a&&(p(),l.textContent="Update",l.addEventListener("click",(e=>{e.preventDefault(),t.updateProject(s,document.querySelector("#name").value),y()}),{once:!0}),i.textContent="Delete",i.addEventListener("click",(e=>{e.preventDefault();let o=t.projectList.indexOf(s);t.projectList.splice(o,1),localStorage.setItem("projectList",JSON.stringify(t.projectList)),t.displayProject(),y()}),{once:!0}))},m=()=>{d.classList.remove("hidden"),a.classList.remove("hidden"),s.classList.remove("hidden")},p=()=>{d.classList.add("hidden"),a.classList.add("hidden"),s.classList.add("hidden")},y=()=>{o.classList.remove("hidden"),c.textContent="",n.classList.add("hidden"),r.classList.remove("hidden"),document.querySelector("#priority").selectedIndex=0,document.querySelector("#project").selectedIndex=0;let e=document.querySelectorAll("input");for(let t=0;t<e.length;t++)e[t].value=""};return o.addEventListener("click",(()=>{u("Add To-do","todo")})),{showForm:u,hideForm:y}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBYSxPQUFPLElBR3hCLENBQUNBLFdBQVV3QixXQUNuQixFQTlHeUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvcy8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL2J0bi1hY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RTdHVmZiB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBidG5BY3Rpb25zIH0gZnJvbSBcIi4vYnRuLWFjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IHRvRG9TdHVmZiA9ICgoKSA9PiB7XG5sZXQgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb3NcIikpIHx8IFtdO1xuICBjb25zdCBjcmVhdGVUb2RvID0gKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgXG4gICAgbGV0IHRvRG8gPSB7bmFtZSwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3ROYW1lfTtcbiAgICB0b0Rvcy5wdXNoKHRvRG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICBwcm9qZWN0U3R1ZmYuZGlzcGxheVByb2plY3QoKTtcbiAgICAvLyBhdHRhY2hUb1Byb2plY3QodG9EbywgcHJvamVjdE5hbWUpO1xuXG4gICAgcmV0dXJuIHt0b0Rvc307XG4gIH1cblxuICBjb25zdCBhdHRhY2hUb1Byb2plY3QgPSAodG9EbywgcHJvamVjdE5hbWUpID0+IHtcbiAgICBwcm9qZWN0U3R1ZmYucHJvamVjdExpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKHByb2plY3ROYW1lID09PSBlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0QXJyYXk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHRvRG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICAgICAgICAvLyBjb25zdCBjbGFzc05hbWUgPSBlLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGFzc05hbWUpXG4gICAgICAgIC8vIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICAvLyBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgLy8gdG9Eb0l0ZW0udGV4dENvbnRlbnQgPSB0b0RvLm5hbWU7XG5cbiAgICAgICAgLy8gcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLCBwcm9qZWN0TmFtZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcHJvamVjdFN0dWZmLnByb2plY3RMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gZSk7XG4gICAgICBwcm9qZWN0U3R1ZmYuY3JlYXRlUHJvamVjdC5lLnB1c2godG9Ebyk7XG4gICAgICAgIC8vIGUucHVzaCh0b0RvKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0dWZmLmNyZWF0ZVByb2plY3QucHJvamVjdEFycmF5KTtcbiAgICB9KVxuICBcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAoY3VycmVudCwgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHRvRG9zLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLm5hbWU7XG4gICAgICB9KS5pbmRleE9mKGN1cnJlbnQpO1xuICAgICAgICB0b0Rvc1tpbmRleF0ubmFtZSA9IG5hbWU7XG4gICAgICAgIHRvRG9zW2luZGV4XS5kYXRlID0gZGF0ZTtcbiAgICAgICAgdG9Eb3NbaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRvRG9zW2luZGV4XS5wcm9qZWN0TmFtZSA9IHByb2plY3Q7XG4gIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICBwcm9qZWN0U3R1ZmYuZGlzcGxheVByb2plY3QoKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZVRvZG8sIGF0dGFjaFRvUHJvamVjdCwgdG9Eb3MsIHVwZGF0ZVRvZG8gfTtcbn0pKCk7IiwiaW1wb3J0IHsgYnRuQWN0aW9ucyB9IGZyb20gXCIuL2J0bi1hY3Rpb25zXCI7XG5pbXBvcnQgeyB0b0RvU3R1ZmYgfSBmcm9tIFwiLi90b2Rvc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdFN0dWZmID0gKCgpID0+IHtcbiAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKSB8fCBbJ1BlcnNvbmFsJ107XG4gIFxuICBcbiAgLy9hZGQgcHJvamVjdCB0byBkcm9wLWRvd25cbiAgY29uc3QgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGUpO1xuICAgICAgcHJvamVjdE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbicpO1xuICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IGU7XG4gICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy9zaG93IHByb2plY3QgbmFtZSBvbiBwYWdlXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3REaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgcHJvamVjdERpdi5jbGFzc05hbWUgPSBcInByb2plY3QtZGl2XCI7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCAoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnLCAnZWRpdCcpO1xuICAgICAgZWRpdEljb24udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdEFjdGlvbihgRWRpdCBQcm9qZWN0IE5hbWVgLCAnZWRpdCBwcm9qZWN0JywgZSlcbiAgICAgIH0pO1xuXG4gICAgICAvL3RvZG8gYnV0dG9uXG4gICAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJywgJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICBcbiAgICAgIGNvbnN0IGJ1dHRvblRleHRUb2RvID0gJ0FkZCBUbyBEbydcbiAgICAgIGNvbnN0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBuZXdJY29uLmNsYXNzTGlzdC5hZGQgKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJywgJ2VkaXQnKTtcbiAgICAgIG5ld0ljb24udGV4dENvbnRlbnQgPSAnYWRkJztcblxuICAgICAgbmV3VG9kby5hcHBlbmQobmV3SWNvbiwgYnV0dG9uVGV4dFRvZG8pO1xuICAgICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnRuQWN0aW9ucy5zaG93Rm9ybSgnQ3JlYXRlIE5ldyBJdGVtJywgJ3RvZG8nKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGU7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICBcbiAgICAgIHRvRG9TdHVmZi50b0Rvcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LnByb2plY3ROYW1lID09PSBlKSB7XG4gICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtJyk7XG5cbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgICAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSB0Lm5hbWU7XG4gICAgICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIHRvRG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IHQucHJpb3JpdHk7XG4gICAgICAgICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSB0LmRhdGU7XG4gICAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCAoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnLCAnZWRpdCcpO1xuICAgICAgICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgICAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdFRvZG9BY3Rpb24oYEVkaXQgVG8gRG9gLCAnZWRpdCB0b2RvJywgdClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pO1xuICAgICAgICAgIHRvRG9JdGVtLmFwcGVuZChjaGVja2JveCwgdG9Eb05hbWUsIHRvRG9Qcmlvcml0eSwgdG9Eb0RhdGUsIGVkaXRJY29uKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy9uZXcgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvblRleHQgPSAnQ3JlYXRlIE5ldyBMaXN0J1xuICAgIGNvbnN0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3SWNvbi5jbGFzc0xpc3QuYWRkICgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcsICdlZGl0Jyk7XG4gICAgbmV3SWNvbi50ZXh0Q29udGVudCA9ICdhZGQnO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmQobmV3SWNvbiwgYnV0dG9uVGV4dCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRuQWN0aW9ucy5zaG93Rm9ybSgnQ3JlYXRlIE5ldyBMaXN0JywgJ3Byb2plY3QnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRBY3Rpb24gPSAobXNnLCB0eXBlLCBuYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSA9IG5hbWU7XG4gICAgYnRuQWN0aW9ucy5zaG93Rm9ybShtc2csIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgY29uc3QgZWRpdFRvZG9BY3Rpb24gPSAobXNnLCB0eXBlLCB0b2RvKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSA9IHRvZG8ubmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlID0gdG9kby5kYXRlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlID0gdG9kby5wcm9qZWN0TmFtZTtcbiAgICBidG5BY3Rpb25zLnNob3dGb3JtKG1zZywgdHlwZSwgdG9kby5uYW1lKTtcbiAgfVxuXG4gIC8vcHJvamVjdCBmYWN0b3J5IGZ1bmN0aW9uXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIHByb2plY3RMaXN0LnB1c2gobmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuXG4gICAgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24oKTtcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIC8vIGNyZWF0ZVByb2plY3RBcnJheSgpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChjdXJyZW50TmFtZSwgbmV3TmFtZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnROYW1lLCBuZXdOYW1lKTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKGN1cnJlbnROYW1lKTtcbiAgICBwcm9qZWN0TGlzdFtpbmRleF0gPSBuZXdOYW1lO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIHBvcHVsYXRlUHJvamVjdERyb3BEb3duKCk7XG4gIH1cbiAgICAgIFxuICBkaXNwbGF5UHJvamVjdCgpO1xuICBwb3B1bGF0ZVByb2plY3REcm9wRG93bigpO1xuICBcbiAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0LCBwcm9qZWN0TGlzdCwgdXBkYXRlUHJvamVjdCwgZGlzcGxheVByb2plY3R9XG59KSgpOyIsImltcG9ydCB7IHByb2plY3RTdHVmZiB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyB0b0RvU3R1ZmYgfSBmcm9tIFwiLi90b2Rvc1wiO1xuXG5leHBvcnQgY29uc3QgYnRuQWN0aW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKTtcbiAgY29uc3QgZm9ybU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1tZXNzYWdlJyk7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jyk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWxlY3QnKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4nKTtcblxuICBjb25zdCBzaG93Rm9ybSA9IChtc2csIHR5cGUsIGN1cnJlbnQpID0+IHtcbiAgICB0b2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZm9ybU1lc3NhZ2UudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgaWYgKHR5cGUgPT09ICd0b2RvJykge1xuICAgICAgc2hvd0Zvcm1JbnB1dHMoKTtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9Eb1N0dWZmLmNyZWF0ZVRvZG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWUpO1xuICAgICAgICBoaWRlRm9ybSgndG9kbycpO1xuICAgICAgfSwge29uY2U6IHRydWV9KVxuICAgIH0gaWYgKHR5cGUgPT09ICdlZGl0IHRvZG8nKSB7XG4gICAgICBzaG93Rm9ybUlucHV0cygpO1xuICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJVcGRhdGVcIjtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy91cGRhdGUgdG9kbyBpdGVtXG4gICAgICAgIHRvRG9TdHVmZi51cGRhdGVUb2RvKGN1cnJlbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlKTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vZGVsZXRlIHRvZG8gaXRlbVxuICAgICAgICBsZXQgaW5kZXggPSB0b0RvU3R1ZmYudG9Eb3MubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUubmFtZTtcbiAgICAgICAgfSkuaW5kZXhPZihjdXJyZW50KTtcbiAgICAgICAgdG9Eb1N0dWZmLnRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb1N0dWZmLnRvRG9zKSk7XG4gICAgICAgIHByb2plY3RTdHVmZi5kaXNwbGF5UHJvamVjdCgpO1xuICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICB9IGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGhpZGVGb3JtSW5wdXRzKCk7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RTdHVmZi5jcmVhdGVQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUpO1xuICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICB9IGlmICh0eXBlID09PSAnZWRpdCBwcm9qZWN0Jykge1xuICAgICAgaGlkZUZvcm1JbnB1dHMoKTtcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RTdHVmZi51cGRhdGVQcm9qZWN0KGN1cnJlbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUpO1xuICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgfSwge29uY2U6IHRydWV9KTtcblxuICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9kZWxldGUgdG9kbyBpdGVtXG4gICAgICAgIGxldCBpbmRleCA9IHByb2plY3RTdHVmZi5wcm9qZWN0TGlzdC5pbmRleE9mKGN1cnJlbnQpO1xuICAgICAgICBwcm9qZWN0U3R1ZmYucHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3R1ZmYucHJvamVjdExpc3QpKTtcbiAgICAgICAgcHJvamVjdFN0dWZmLmRpc3BsYXlQcm9qZWN0KCk7XG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3dGb3JtSW5wdXRzID0gKCkgPT4ge1xuICAgIGRhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIGNvbnN0IGhpZGVGb3JtSW5wdXRzID0gKCkgPT4ge1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxuXG4gIGNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgIHRvZG9CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZm9ybU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAvL3Jlc2V0IHByaW9yaXR5IGFuZCBwcm9qZWN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jykuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAvL3Jlc2V0IGlucHV0c1xuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnB1dHNbaV0udmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIC8vYWRkIHRvZG8gYnV0dG9uIHNob3cgZm9ybVxuICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dGb3JtKCdBZGQgVG8tZG8nLCAndG9kbycpO1xuICB9KTtcbiAgXG4gIHJldHVybiB7c2hvd0Zvcm0sIGhpZGVGb3JtfVxufSkoKTtcblxuICAiXSwibmFtZXMiOlsidG9Eb1N0dWZmIiwidG9Eb3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3JlYXRlVG9kbyIsIm5hbWUiLCJkYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0TmFtZSIsInRvRG8iLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInByb2plY3RTdHVmZiIsImRpc3BsYXlQcm9qZWN0IiwiYXR0YWNoVG9Qcm9qZWN0IiwicHJvamVjdExpc3QiLCJmb3JFYWNoIiwiZSIsInByb2plY3RBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVQcm9qZWN0IiwidXBkYXRlVG9kbyIsImN1cnJlbnQiLCJwcm9qZWN0IiwiaW5kZXgiLCJtYXAiLCJpbmRleE9mIiwicG9wdWxhdGVQcm9qZWN0RHJvcERvd24iLCJwcm9qZWN0U2VsZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInByb2plY3RPcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInByb2plY3RDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwicHJvamVjdERpdiIsImVkaXRJY29uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVkaXRBY3Rpb24iLCJuZXdUb2RvIiwibmV3SWNvbiIsImFwcGVuZCIsImJ0bkFjdGlvbnMiLCJzaG93Rm9ybSIsInQiLCJ0b0RvSXRlbSIsImNoZWNrYm94IiwidG9Eb05hbWUiLCJ0b0RvUHJpb3JpdHkiLCJ0b0RvRGF0ZSIsImVkaXRUb2RvQWN0aW9uIiwibmV3UHJvamVjdCIsIm1zZyIsInR5cGUiLCJ2YWx1ZSIsInRvZG8iLCJ1cGRhdGVQcm9qZWN0IiwiY3VycmVudE5hbWUiLCJuZXdOYW1lIiwidG9kb0J0biIsImZvcm1NZXNzYWdlIiwiZm9ybUNvbnRhaW5lciIsInN1Ym1pdEJ0biIsImNhbmNlbEJ0biIsInJlbW92ZSIsInNob3dGb3JtSW5wdXRzIiwicHJldmVudERlZmF1bHQiLCJoaWRlRm9ybSIsIm9uY2UiLCJzcGxpY2UiLCJoaWRlRm9ybUlucHV0cyIsInNlbGVjdGVkSW5kZXgiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=