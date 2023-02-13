// Declaration
const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle"),
  sidebar = body.querySelector("nav"),
  sidebarToggle = body.querySelector(".sidebar-toggle");

// Start toggle dark-mode
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// End toggle dark-mode

// Start toggle sidebar
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
// End toggle sidebar
