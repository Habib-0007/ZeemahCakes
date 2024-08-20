var menuBar = document.querySelector("header button");
var nav = document.querySelector("header nav");

menuBar.addEventListener("click", () => {
  nav.classList.toggle("hide");
});
