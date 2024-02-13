var menuBarIcon = document.querySelector(".menu-bar i");
var nav = document.querySelector("nav");

menuBarIcon.addEventListener("click", () => {
	nav.classList.toggle("hide");
	if (menuBarIcon.classList.contains("fa-bars")) {
		menuBarIcon.classList.add("fa-multiply");
		menuBarIcon.classList.remove("fa-bars");
	} else {
		menuBarIcon.classList.remove("fa-multiply");
		menuBarIcon.classList.add("fa-bars");
	}
});
