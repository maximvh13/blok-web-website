// JavaScript Document


var deButton = document.querySelector("header nav button");
var deNav = document.querySelector("header nav");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}