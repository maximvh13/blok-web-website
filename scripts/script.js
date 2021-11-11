// JavaScript Document


var deMenuButton = document.querySelector("header nav button");
var deNav = document.querySelector("header nav");

deMenuButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}

var deChatButton = document.querySelector("main aside button");

deChatButton.addEventListener("click", openChat);

function openChat(){
  console.log("openchat");
	let hetFormulier = document.querySelector("form.chat-form");
  hetFormulier.classList.add("toonForm");
  deButton.classList.add("toonForm");
}

var deSluitButton = document.querySelector("main aside form button");

deSluitButton.addEventListener("click", sluitChat);

function sluitChat(){
	let hetFormulier = document.querySelector("form.chat-form");
  hetFormulier.classList.remove("toonForm");
  deButton.classList.remove("toonForm");
}