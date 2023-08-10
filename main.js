(()=>{"use strict";const e=(()=>{const e=JSON.parse(localStorage.getItem("projectList"))||["Personal"];console.log(e);const o=()=>{const t=document.getElementById("project");t.innerHTML="",e.forEach((e=>{const o=document.createElement("option");o.setAttribute("value",e),o.classList.add("project-option"),o.textContent=e,t.appendChild(o)}))},d=()=>{const t=document.querySelector(".project-container");t.innerHTML="",e.forEach((e=>{const o=document.createElement("h2");o.classList.add("project-name");const d=document.createElement("span");d.classList.add("material-symbols-rounded","edit"),d.textContent="edit",d.addEventListener("click",(()=>{c("Edit Project Name","edit project",e)})),o.textContent=e,t.appendChild(o),o.appendChild(d)}))},c=(e,o,d)=>{document.querySelector("#name").value=d,t.showForm(e,o,d)};return d(),o(),{createProject:t=>{e.push(t),localStorage.setItem("projectList",JSON.stringify(e)),o(),d()},projectList:e,updateProject:(t,c)=>{console.log(t,c);let n=e.indexOf(t);e[n]=c,localStorage.setItem("projectList",JSON.stringify(e)),d(),o()}}})(),t=(()=>{const t=document.querySelector(".add-todo"),d=document.querySelector(".add-project"),c=document.querySelector("#form-message"),n=document.querySelector(".form-container"),r=document.querySelector(".project-container"),s=document.querySelector(".date"),a=document.querySelector(".priority"),l=document.querySelector(".project-select"),i=document.querySelector(".submit-btn"),u=(u,p,L)=>{t.classList.add("hidden"),d.classList.add("hidden"),r.classList.add("hidden"),c.textContent=u,n.classList.remove("hidden"),"todo"===p&&(s.classList.remove("hidden"),a.classList.remove("hidden"),l.classList.remove("hidden"),i.textContent="Add New Todo",i.addEventListener("click",(e=>{e.preventDefault(),o(document.querySelector("#name").value,document.querySelector("#date").value,document.querySelector("#priority").value,document.querySelector("#project").value),m("todo")}),{once:!0})),"project"===p&&(s.classList.add("hidden"),a.classList.add("hidden"),l.classList.add("hidden"),i.textContent="Add New Project",i.addEventListener("click",(t=>{t.preventDefault(),e.createProject(document.querySelector("#name").value),m()}),{once:!0})),"edit project"===p&&(s.classList.add("hidden"),a.classList.add("hidden"),l.classList.add("hidden"),i.textContent="Update",i.addEventListener("click",(t=>{t.preventDefault(),e.updateProject(L,document.querySelector("#name").value),m()}),{once:!0}))},m=()=>{t.classList.remove("hidden"),d.classList.remove("hidden"),c.textContent="",n.classList.add("hidden"),r.classList.remove("hidden"),document.querySelector("#priority").selectedIndex=0,document.querySelector("#project").selectedIndex=0;let e=document.querySelectorAll("input");for(let t=0;t<e.length;t++)e[t].value=""};return t.addEventListener("click",(()=>{u("Add To-do","todo")})),d.addEventListener("click",(()=>{u("Create Project","project")})),{showForm:u,hideForm:m}})(),o=(e,t,o,c)=>{let n=[],r={name:e,date:t,priority:o,projectName:c};return n.push(r),console.log(n[0]),d(r),n},d=t=>{e.projectList.forEach((e=>{t.projectName===e&&console.log(e,t.name)}))}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRU8sTUFBTUEsRUFBZSxNQUUxQixNQUFNQyxFQUFjQyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUFtQixDQUFDLFlBRXhFQyxRQUFRQyxJQUFJTixHQUlaLE1BQU1PLEVBQTBCLEtBQzlCLE1BQU1DLEVBQWdCQyxTQUFTQyxlQUFlLFdBQzlDRixFQUFjRyxVQUFZLEdBQzFCWCxFQUFZWSxTQUFTQyxJQUNuQixNQUFNQyxFQUFnQkwsU0FBU00sY0FBYyxVQUM3Q0QsRUFBY0UsYUFBYSxRQUFTSCxHQUNwQ0MsRUFBY0csVUFBVUMsSUFBSSxrQkFDNUJKLEVBQWNLLFlBQWNOLEVBQzVCTCxFQUFjWSxZQUFZTixFQUFjLEdBQ3hDLEVBSUVPLEVBQWlCLEtBQ3JCLE1BQU1DLEVBQW1CYixTQUFTYyxjQUFjLHNCQUNoREQsRUFBaUJYLFVBQVksR0FDN0JYLEVBQVlZLFNBQVNDLElBQ25CLE1BQU1XLEVBQWNmLFNBQVNNLGNBQWMsTUFDM0NTLEVBQVlQLFVBQVVDLElBQUksZ0JBQzFCLE1BQU1PLEVBQVdoQixTQUFTTSxjQUFjLFFBQ3hDVSxFQUFTUixVQUFVQyxJQUFLLDJCQUE0QixRQUNwRE8sRUFBU04sWUFBYyxPQUN2Qk0sRUFBU0MsaUJBQWlCLFNBQVMsS0FDakNDLEVBQVcsb0JBQXFCLGVBQWdCZCxFQUFDLElBRW5EVyxFQUFZTCxZQUFjTixFQUMxQlMsRUFBaUJGLFlBQVlJLEdBQzdCQSxFQUFZSixZQUFZSyxFQUFTLEdBQ2xDLEVBR0dFLEVBQWEsQ0FBQ0MsRUFBS0MsRUFBTUMsS0FDN0JyQixTQUFTYyxjQUFjLFNBQVNRLE1BQVFELEVBQ3hDRSxFQUFXQyxTQUFTTCxFQUFLQyxFQUFNQyxFQUFLLEVBK0J0QyxPQUhBVCxJQUNBZCxJQUVPLENBQUMyQixjQXJCZUosSUFDckI5QixFQUFZbUMsS0FBS0wsR0FDakIzQixhQUFhaUMsUUFBUSxjQUFlbkMsS0FBS29DLFVBQVVyQyxJQUVuRE8sSUFDQWMsR0FBZ0IsRUFnQktyQixjQUFhc0MsY0FaZCxDQUFDQyxFQUFhQyxLQUNsQ25DLFFBQVFDLElBQUlpQyxFQUFhQyxHQUN6QixJQUFJQyxFQUFRekMsRUFBWTBDLFFBQVFILEdBQ2hDdkMsRUFBWXlDLEdBQVNELEVBQ3JCckMsYUFBYWlDLFFBQVEsY0FBZW5DLEtBQUtvQyxVQUFVckMsSUFDbkRxQixJQUNBZCxHQUF5QixFQU81QixFQXpFMkIsR0NBZnlCLEVBQWEsTUFDeEIsTUFBTVcsRUFBVWxDLFNBQVNjLGNBQWMsYUFDakNxQixFQUFhbkMsU0FBU2MsY0FBYyxnQkFDcENzQixFQUFjcEMsU0FBU2MsY0FBYyxpQkFDckN1QixFQUFnQnJDLFNBQVNjLGNBQWMsbUJBQ3ZDRCxFQUFtQmIsU0FBU2MsY0FBYyxzQkFFMUN3QixFQUFPdEMsU0FBU2MsY0FBYyxTQUM5QnlCLEVBQVd2QyxTQUFTYyxjQUFjLGFBQ2xDMEIsRUFBVXhDLFNBQVNjLGNBQWMsbUJBQ2pDMkIsRUFBWXpDLFNBQVNjLGNBQWMsZUFFbkNVLEVBQVcsQ0FBQ0wsRUFBS0MsRUFBTVUsS0FDM0JJLEVBQVExQixVQUFVQyxJQUFJLFVBQ3RCMEIsRUFBVzNCLFVBQVVDLElBQUksVUFDekJJLEVBQWlCTCxVQUFVQyxJQUFJLFVBQy9CMkIsRUFBWTFCLFlBQWNTLEVBQzFCa0IsRUFBYzdCLFVBQVVrQyxPQUFPLFVBQ2xCLFNBQVR0QixJQUNGa0IsRUFBSzlCLFVBQVVrQyxPQUFPLFVBQ3RCSCxFQUFTL0IsVUFBVWtDLE9BQU8sVUFDMUJGLEVBQVFoQyxVQUFVa0MsT0FBTyxVQUN6QkQsRUFBVS9CLFlBQWMsZUFFeEIrQixFQUFVeEIsaUJBQWlCLFNBQVViLElBQ25DQSxFQUFFdUMsaUJBQ0ZDLEVBQVc1QyxTQUFTYyxjQUFjLFNBQVNRLE1BQU90QixTQUFTYyxjQUFjLFNBQVNRLE1BQU90QixTQUFTYyxjQUFjLGFBQWFRLE1BQU90QixTQUFTYyxjQUFjLFlBQVlRLE9BQ3ZLdUIsRUFBUyxPQUFPLEdBQ2YsQ0FBQ0MsTUFBTSxLQUNHLFlBQVQxQixJQUNKa0IsRUFBSzlCLFVBQVVDLElBQUksVUFDbkI4QixFQUFTL0IsVUFBVUMsSUFBSSxVQUN2QitCLEVBQVFoQyxVQUFVQyxJQUFJLFVBQ3RCZ0MsRUFBVS9CLFlBQWMsa0JBQ3hCK0IsRUFBVXhCLGlCQUFpQixTQUFVYixJQUNuQ0EsRUFBRXVDLGlCQUNGckQsRUFBYW1DLGNBQWN6QixTQUFTYyxjQUFjLFNBQVNRLE9BQzNEdUIsR0FBVSxHQUNULENBQUNDLE1BQU0sS0FDRyxpQkFBVDFCLElBQ0prQixFQUFLOUIsVUFBVUMsSUFBSSxVQUNuQjhCLEVBQVMvQixVQUFVQyxJQUFJLFVBQ3ZCK0IsRUFBUWhDLFVBQVVDLElBQUksVUFDdEJnQyxFQUFVL0IsWUFBYyxTQUN4QitCLEVBQVV4QixpQkFBaUIsU0FBVWIsSUFDbkNBLEVBQUV1QyxpQkFDRnJELEVBQWF1QyxjQUFjQyxFQUFhOUIsU0FBU2MsY0FBYyxTQUFTUSxPQUN4RXVCLEdBQVUsR0FDVCxDQUFDQyxNQUFNLElBQ1osRUFHSUQsRUFBVyxLQUNmWCxFQUFRMUIsVUFBVWtDLE9BQU8sVUFDekJQLEVBQVczQixVQUFVa0MsT0FBTyxVQUM1Qk4sRUFBWTFCLFlBQWMsR0FDMUIyQixFQUFjN0IsVUFBVUMsSUFBSSxVQUM1QkksRUFBaUJMLFVBQVVrQyxPQUFPLFVBRWxDMUMsU0FBU2MsY0FBYyxhQUFhaUMsY0FBZ0IsRUFDcEQvQyxTQUFTYyxjQUFjLFlBQVlpQyxjQUFnQixFQUVuRCxJQUFJQyxFQUFTaEQsU0FBU2lELGlCQUFpQixTQUN2QyxJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSUYsRUFBT0csT0FBUUQsSUFDakNGLEVBQU9FLEdBQUc1QixNQUFRLEVBQ3BCLEVBZUYsT0FYQVksRUFBUWpCLGlCQUFpQixTQUFTLEtBQ2hDTyxFQUFTLFlBQWEsT0FBTyxJQUkvQlcsRUFBV2xCLGlCQUFpQixTQUFTLEtBQ25DTyxFQUFTLGlCQUFrQixVQUFVLElBS2hDLENBQUNBLFdBQVVxQixXQUVuQixFQWxGeUIsR0FvRnBCRCxFQUFhLENBQUN2QixFQUFNaUIsRUFBTUMsRUFBVXhCLEtBQ3hDLElBQUlxQyxFQUFRLEdBQ1JDLEVBQU8sQ0FBQ2hDLE9BQU1pQixPQUFNQyxXQUFVeEIsZUFLbEMsT0FKQXFDLEVBQU0xQixLQUFLMkIsR0FDWHpELFFBQVFDLElBQUl1RCxFQUFNLElBQ2xCRSxFQUFnQkQsR0FFVEQsQ0FBSyxFQUdSRSxFQUFtQkQsSUFDdkIvRCxFQUFhQyxZQUFZWSxTQUFTQyxJQUM1QmlELEVBQUt0QyxjQUFnQlgsR0FDdkJSLFFBQVFDLElBQUlPLEVBQUdpRCxFQUFLaEMsS0FDdEIsR0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9idG4tYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidG5BY3Rpb25zIH0gZnJvbSBcIi4vYnRuLWFjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RTdHVmZiA9ICgoKSA9PiB7XG4gIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSkgfHwgWydQZXJzb25hbCddO1xuICBcbiAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXG4gIFxuICBcbiAgLy9hZGQgcHJvamVjdCB0byBkcm9wLWRvd25cbiAgY29uc3QgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGUpO1xuICAgICAgcHJvamVjdE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbicpO1xuICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IGU7XG4gICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy9zaG93IHByb2plY3QgbmFtZSBvbiBwYWdlXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQgKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnLCAnZWRpdCcpO1xuICAgICAgZWRpdEljb24udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdEFjdGlvbihgRWRpdCBQcm9qZWN0IE5hbWVgLCAnZWRpdCBwcm9qZWN0JywgZSlcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBlO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGVkaXRBY3Rpb24gPSAobXNnLCB0eXBlLCBuYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSA9IG5hbWU7XG4gICAgYnRuQWN0aW9ucy5zaG93Rm9ybShtc2csIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgLy8gY29uc3QgZGlzcGxheU5lc3RlZFRvZG9zID0gKHByb2plY3ROYW1lLCB0b2RvKSA9PiB7XG4gIC8vICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgLy8gICBuZXdUb2RvLnRleHRDb250ZW50ID0gdG9kbztcbiAgLy8gICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgLy8gfVxuXG4gIC8vcHJvamVjdCBmYWN0b3J5IGZ1bmN0aW9uXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIHByb2plY3RMaXN0LnB1c2gobmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuXG4gICAgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24oKTtcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xuXG4gIH1cblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGN1cnJlbnROYW1lLCBuZXdOYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coY3VycmVudE5hbWUsIG5ld05hbWUpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2YoY3VycmVudE5hbWUpO1xuICAgIHByb2plY3RMaXN0W2luZGV4XSA9IG5ld05hbWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24oKTtcbiAgfVxuICAgICAgXG4gIGRpc3BsYXlQcm9qZWN0KCk7XG4gIHBvcHVsYXRlUHJvamVjdERyb3BEb3duKCk7XG4gIFxuICByZXR1cm4ge2NyZWF0ZVByb2plY3QsIHByb2plY3RMaXN0LCB1cGRhdGVQcm9qZWN0fVxufSkoKTsiLCJpbXBvcnQgeyBwcm9qZWN0U3R1ZmYgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgYnRuQWN0aW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKTtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICBjb25zdCBmb3JtTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLW1lc3NhZ2UnKTtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIFxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXNlbGVjdCcpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xuXG4gIGNvbnN0IHNob3dGb3JtID0gKG1zZywgdHlwZSwgY3VycmVudE5hbWUpID0+IHtcbiAgICB0b2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9IG1zZztcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGlmICh0eXBlID09PSAndG9kbycpIHtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVG9kb1wiO1xuICAgICAgIC8vc3VibWl0IHRvZG8gZm9ybSBhbmQgY2xlYXIgZmllbGRzXG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNyZWF0ZVRvZG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWUpO1xuICAgICAgICBoaWRlRm9ybSgndG9kbycpO1xuICAgICAgfSwge29uY2U6IHRydWV9KVxuICAgIH0gaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBQcm9qZWN0XCI7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RTdHVmZi5jcmVhdGVQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUpO1xuICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICB9IGlmICh0eXBlID09PSAnZWRpdCBwcm9qZWN0Jykge1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RTdHVmZi51cGRhdGVQcm9qZWN0KGN1cnJlbnROYW1lLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlKTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgdG9kb0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGZvcm1NZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgLy9yZXNldCBwcmlvcml0eSBhbmQgcHJvamVjdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jykuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgLy9yZXNldCBpbnB1dHNcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaW5wdXRzW2ldLnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICAvL2FkZCB0b2RvIGJ1dHRvbiBzaG93IGZvcm1cbiAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93Rm9ybSgnQWRkIFRvLWRvJywgJ3RvZG8nKTtcbiAgfSk7XG5cbiAgLy9jcmVhdGUgcHJvamVjdCBidXR0b24gc2hvdyBmb3JtXG4gIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd0Zvcm0oJ0NyZWF0ZSBQcm9qZWN0JywgJ3Byb2plY3QnKTtcbiAgfSlcblxuIFxuXG4gIHJldHVybiB7c2hvd0Zvcm0sIGhpZGVGb3JtfVxuXG59KSgpO1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TmFtZSkgPT4ge1xuICBsZXQgdG9kb3MgPSBbXTtcbiAgbGV0IHRvZG8gPSB7bmFtZSwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3ROYW1lfTtcbiAgdG9kb3MucHVzaCh0b2RvKTtcbiAgY29uc29sZS5sb2codG9kb3NbMF0pO1xuICBhdHRhY2hUb1Byb2plY3QodG9kbyk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5jb25zdCBhdHRhY2hUb1Byb2plY3QgPSAodG9kbykgPT4ge1xuICBwcm9qZWN0U3R1ZmYucHJvamVjdExpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmICh0b2RvLnByb2plY3ROYW1lID09PSBlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLCB0b2RvLm5hbWUpO1xuICAgIH1cbiAgfSlcbiAgXG59Il0sIm5hbWVzIjpbInByb2plY3RTdHVmZiIsInByb2plY3RMaXN0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwb3B1bGF0ZVByb2plY3REcm9wRG93biIsInByb2plY3RTZWxlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsImUiLCJwcm9qZWN0T3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5UHJvamVjdCIsInByb2plY3RDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdE5hbWUiLCJlZGl0SWNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlZGl0QWN0aW9uIiwibXNnIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImJ0bkFjdGlvbnMiLCJzaG93Rm9ybSIsImNyZWF0ZVByb2plY3QiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVwZGF0ZVByb2plY3QiLCJjdXJyZW50TmFtZSIsIm5ld05hbWUiLCJpbmRleCIsImluZGV4T2YiLCJ0b2RvQnRuIiwicHJvamVjdEJ0biIsImZvcm1NZXNzYWdlIiwiZm9ybUNvbnRhaW5lciIsImRhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJzdWJtaXRCdG4iLCJyZW1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVRvZG8iLCJoaWRlRm9ybSIsIm9uY2UiLCJzZWxlY3RlZEluZGV4IiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJ0b2RvcyIsInRvZG8iLCJhdHRhY2hUb1Byb2plY3QiXSwic291cmNlUm9vdCI6IiJ9