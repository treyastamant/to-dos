(()=>{"use strict";const e=(()=>{const e=[],d=(e,t,d)=>{const o=document.getElementById("project");if("new"===t){const t=document.createElement("option");t.setAttribute("value",e),t.classList.add("project-option"),t.textContent=e,o.appendChild(t)}if("edit"===t){const t=document.querySelectorAll(".project-option");t[d].textContent=e,t[d].setAttribute("value",e)}},o=(e,t,d)=>{if("new"===t){const t=document.querySelector(".project-container"),d=document.createElement("h2");d.classList.add("project-name");const o=document.createElement("span");o.classList.add("material-symbols-rounded","edit"),o.textContent="edit",o.addEventListener("click",(()=>{n("Edit Project Name","edit project",e)})),d.textContent=e,t.appendChild(d),d.appendChild(o)}if("edit"===t){const t=document.querySelectorAll(".project-name");t[d].textContent=e;const o=document.createElement("span");o.classList.add("material-symbols-rounded","edit"),o.textContent="edit",o.addEventListener("click",(()=>{n("Edit Project Name","edit project",e)})),t[d].appendChild(o)}},n=(e,d,o)=>{document.querySelector("#name").value=o,t.showForm(e,d,o)},c=t=>{e.push(t),d(t,"new"),o(t,"new")};return c("Personal"),{createProject:c,projectList:e,updateProject:(t,n)=>{console.log(t,n);let c=e.indexOf(t);e[c]=n,o(n,"edit",c),d(n,"edit",c)}}})(),t=(()=>{const t=document.querySelector(".add-todo"),o=document.querySelector(".add-project"),n=document.querySelector("#form-message"),c=document.querySelector(".form-container"),r=document.querySelector(".project-container"),s=document.querySelector(".date"),a=document.querySelector(".priority"),i=document.querySelector(".project-select"),l=document.querySelector(".submit-btn"),u=(u,p,L)=>{t.classList.add("hidden"),o.classList.add("hidden"),r.classList.add("hidden"),n.textContent=u,c.classList.remove("hidden"),"todo"===p&&(s.classList.remove("hidden"),a.classList.remove("hidden"),i.classList.remove("hidden"),l.textContent="Add New Todo",l.addEventListener("click",(e=>{e.preventDefault(),d(document.querySelector("#name").value,document.querySelector("#date").value,document.querySelector("#priority").value,document.querySelector("#project").value),m("todo")}),{once:!0})),"project"===p&&(s.classList.add("hidden"),a.classList.add("hidden"),i.classList.add("hidden"),l.textContent="Add New Project",l.addEventListener("click",(t=>{t.preventDefault(),e.createProject(document.querySelector("#name").value),m()}),{once:!0})),"edit project"===p&&(s.classList.add("hidden"),a.classList.add("hidden"),i.classList.add("hidden"),l.textContent="Update",l.addEventListener("click",(t=>{t.preventDefault(),e.updateProject(L,document.querySelector("#name").value),m()}),{once:!0}))},m=()=>{t.classList.remove("hidden"),o.classList.remove("hidden"),n.textContent="",c.classList.add("hidden"),r.classList.remove("hidden"),document.querySelector("#priority").selectedIndex=0,document.querySelector("#project").selectedIndex=0;let e=document.querySelectorAll("input");for(let t=0;t<e.length;t++)e[t].value=""};return t.addEventListener("click",(()=>{u("Add To-do","todo")})),o.addEventListener("click",(()=>{u("Create Project","project")})),{showForm:u,hideForm:m}})(),d=(e,t,d,n)=>{let c=[],r={name:e,date:t,priority:d,projectName:n};return c.push(r),console.log(c[0]),o(r),c},o=t=>{e.projectList.forEach((e=>{t.projectName===e&&console.log(e,t.name)}))}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVkrQixjQUFnQixFQUVuRCxJQUFJQyxFQUFTNUMsU0FBU1MsaUJBQWlCLFNBQ3ZDLElBQUssSUFBSW9DLEVBQUksRUFBR0EsRUFBSUQsRUFBT0UsT0FBUUQsSUFDakNELEVBQU9DLEdBQUczQixNQUFRLEVBQ3BCLEVBZUYsT0FYQVcsRUFBUWQsaUJBQWlCLFNBQVMsS0FDaENLLEVBQVMsWUFBYSxPQUFPLElBSS9CVSxFQUFXZixpQkFBaUIsU0FBUyxLQUNuQ0ssRUFBUyxpQkFBa0IsVUFBVSxJQUtoQyxDQUFDQSxXQUFVcUIsV0FFbkIsRUFsRnlCLEdBb0ZwQkQsRUFBYSxDQUFDNUMsRUFBTXFDLEVBQU1DLEVBQVVyQixLQUN4QyxJQUFJa0MsRUFBUSxHQUNSQyxFQUFPLENBQUNwRCxPQUFNcUMsT0FBTUMsV0FBVXJCLGVBS2xDLE9BSkFrQyxFQUFNekIsS0FBSzBCLEdBQ1h0QixRQUFRQyxJQUFJb0IsRUFBTSxJQUNsQkUsRUFBZ0JELEdBRVRELENBQUssRUFHUkUsRUFBbUJELElBQ3ZCdkQsRUFBYUMsWUFBWXdELFNBQVNaLElBQzVCVSxFQUFLbkMsY0FBZ0J5QixHQUN2QlosUUFBUUMsSUFBSVcsRUFBR1UsRUFBS3BELEtBQ3RCLEdBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvcy8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvYnRuLWFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnRuQWN0aW9ucyB9IGZyb20gXCIuL2J0bi1hY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0U3R1ZmYgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBcbiAgLy9hZGQgcHJvamVjdCB0byBkcm9wLWRvd25cbiAgY29uc3QgcG9wdWxhdGVQcm9qZWN0RHJvcERvd24gPSAobmFtZSwgdHlwZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbiAgICBpZiAodHlwZSA9PT0gJ25ldycpIHtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmFtZSk7XG4gICAgcHJvamVjdE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbicpO1xuICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZWRpdCcpIHtcbiAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1vcHRpb24nKTtcbiAgICAgIHByb2plY3RPcHRpb25baW5kZXhdLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgIHByb2plY3RPcHRpb25baW5kZXhdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvL3Nob3cgcHJvamVjdCBuYW1lIG9uIHBhZ2VcbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSAobmFtZSwgdHlwZSwgaW5kZXgpID0+IHtcbiAgICBpZiAodHlwZSA9PT0gXCJuZXdcIikge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQgKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnLCAnZWRpdCcpO1xuICAgICAgZWRpdEljb24udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdEFjdGlvbihgRWRpdCBQcm9qZWN0IE5hbWVgLCAnZWRpdCBwcm9qZWN0JywgbmFtZSlcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcImVkaXRcIikge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJyk7XG4gICAgICBwcm9qZWN0TmFtZVtpbmRleF0udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkICgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJywgJ2VkaXQnKTtcbiAgICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXRBY3Rpb24oYEVkaXQgUHJvamVjdCBOYW1lYCwgJ2VkaXQgcHJvamVjdCcsIG5hbWUpXG4gICAgICB9KTtcbiAgICAgIHByb2plY3ROYW1lW2luZGV4XS5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZWRpdEFjdGlvbiA9IChtc2csIHR5cGUsIG5hbWUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlID0gbmFtZTtcbiAgICBidG5BY3Rpb25zLnNob3dGb3JtKG1zZywgdHlwZSwgbmFtZSk7XG4gIH1cblxuICAvLyBjb25zdCBkaXNwbGF5TmVzdGVkVG9kb3MgPSAocHJvamVjdE5hbWUsIHRvZG8pID0+IHtcbiAgLy8gICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyAgIG5ld1RvZG8udGV4dENvbnRlbnQgPSB0b2RvO1xuICAvLyAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHRvZG8pO1xuICAvLyB9XG5cbiAgLy9wcm9qZWN0IGZhY3RvcnkgZnVuY3Rpb25cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgcHJvamVjdExpc3QucHVzaChuYW1lKTtcbiAgICBwb3B1bGF0ZVByb2plY3REcm9wRG93bihuYW1lLCAnbmV3Jyk7XG4gICAgZGlzcGxheVByb2plY3QobmFtZSwgJ25ldycpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChjdXJyZW50TmFtZSwgbmV3TmFtZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnROYW1lLCBuZXdOYW1lKTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKGN1cnJlbnROYW1lKTtcbiAgICBwcm9qZWN0TGlzdFtpbmRleF0gPSBuZXdOYW1lO1xuICAgIGRpc3BsYXlQcm9qZWN0KG5ld05hbWUsICdlZGl0JywgaW5kZXgpO1xuICAgIHBvcHVsYXRlUHJvamVjdERyb3BEb3duKG5ld05hbWUsICdlZGl0JywgaW5kZXgpO1xuICB9XG5cbiAgLy9jcmVhdGUgZGVmYXVsdCBwcm9qZWN0XG4gIGNyZWF0ZVByb2plY3QoJ1BlcnNvbmFsJyk7XG5cbiAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0LCBwcm9qZWN0TGlzdCwgdXBkYXRlUHJvamVjdH1cbn0pKCk7IiwiaW1wb3J0IHsgcHJvamVjdFN0dWZmIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IGJ0bkFjdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgY29uc3QgZm9ybU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1tZXNzYWdlJyk7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jyk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWxlY3QnKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcblxuICBjb25zdCBzaG93Rm9ybSA9IChtc2csIHR5cGUsIGN1cnJlbnROYW1lKSA9PiB7XG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZm9ybU1lc3NhZ2UudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBpZiAodHlwZSA9PT0gJ3RvZG8nKSB7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRvZG9cIjtcbiAgICAgICAvL3N1Ym1pdCB0b2RvIGZvcm0gYW5kIGNsZWFyIGZpZWxkc1xuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjcmVhdGVUb2RvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlKTtcbiAgICAgICAgaGlkZUZvcm0oJ3RvZG8nKTtcbiAgICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgICB9IGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgUHJvamVjdFwiO1xuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0U3R1ZmYuY3JlYXRlUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlKTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgfSBpZiAodHlwZSA9PT0gJ2VkaXQgcHJvamVjdCcpIHtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0U3R1ZmYudXBkYXRlUHJvamVjdChjdXJyZW50TmFtZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSk7XG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgIHRvZG9CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIC8vcmVzZXQgcHJpb3JpdHkgYW5kIHByb2plY3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIC8vcmVzZXQgaW5wdXRzXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlucHV0c1tpXS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgLy9hZGQgdG9kbyBidXR0b24gc2hvdyBmb3JtXG4gIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd0Zvcm0oJ0FkZCBUby1kbycsICd0b2RvJyk7XG4gIH0pO1xuXG4gIC8vY3JlYXRlIHByb2plY3QgYnV0dG9uIHNob3cgZm9ybVxuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dGb3JtKCdDcmVhdGUgUHJvamVjdCcsICdwcm9qZWN0Jyk7XG4gIH0pXG5cbiBcblxuICByZXR1cm4ge3Nob3dGb3JtLCBoaWRlRm9ybX1cblxufSkoKTtcblxuY29uc3QgY3JlYXRlVG9kbyA9IChuYW1lLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdE5hbWUpID0+IHtcbiAgbGV0IHRvZG9zID0gW107XG4gIGxldCB0b2RvID0ge25hbWUsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0TmFtZX07XG4gIHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnNvbGUubG9nKHRvZG9zWzBdKTtcbiAgYXR0YWNoVG9Qcm9qZWN0KHRvZG8pO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cblxuY29uc3QgYXR0YWNoVG9Qcm9qZWN0ID0gKHRvZG8pID0+IHtcbiAgcHJvamVjdFN0dWZmLnByb2plY3RMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAodG9kby5wcm9qZWN0TmFtZSA9PT0gZSkge1xuICAgICAgY29uc29sZS5sb2coZSwgdG9kby5uYW1lKTtcbiAgICB9XG4gIH0pXG4gIFxufSJdLCJuYW1lcyI6WyJwcm9qZWN0U3R1ZmYiLCJwcm9qZWN0TGlzdCIsInBvcHVsYXRlUHJvamVjdERyb3BEb3duIiwibmFtZSIsInR5cGUiLCJpbmRleCIsInByb2plY3RTZWxlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJvamVjdE9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc3BsYXlQcm9qZWN0IiwicHJvamVjdENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0TmFtZSIsImVkaXRJY29uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVkaXRBY3Rpb24iLCJtc2ciLCJ2YWx1ZSIsImJ0bkFjdGlvbnMiLCJzaG93Rm9ybSIsImNyZWF0ZVByb2plY3QiLCJwdXNoIiwidXBkYXRlUHJvamVjdCIsImN1cnJlbnROYW1lIiwibmV3TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwidG9kb0J0biIsInByb2plY3RCdG4iLCJmb3JtTWVzc2FnZSIsImZvcm1Db250YWluZXIiLCJkYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0Iiwic3VibWl0QnRuIiwicmVtb3ZlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlVG9kbyIsImhpZGVGb3JtIiwib25jZSIsInNlbGVjdGVkSW5kZXgiLCJpbnB1dHMiLCJpIiwibGVuZ3RoIiwidG9kb3MiLCJ0b2RvIiwiYXR0YWNoVG9Qcm9qZWN0IiwiZm9yRWFjaCJdLCJzb3VyY2VSb290IjoiIn0=