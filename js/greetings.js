const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoform = document.querySelector("#todo-form");
const todoframe = document.querySelector(".center_frame .todo_frame");
const centerframe = document.querySelector(".center_frame");
const center = "center_frame_width";

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoform.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoframe.classList.add("todo_frame");

  centerframe.classList.remove(center);
  centerframe.classList.add("center_frame");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(todoframe);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  todoform.classList.add(HIDDEN_CLASSNAME);
  todoframe.classList.remove("todo_frame");
  centerframe.classList.remove("center_frame");

  centerframe.classList.add(center);

  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
